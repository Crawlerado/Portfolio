import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { useReducedMotion } from 'framer-motion';
import { useInViewport, useWindowSize } from '~/hooks';
import { useEffect, useRef } from 'react';
import {
  Color,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  WebGLRenderer,
} from 'three';
import { throttle } from '~/utils/throttle';
import styles from './hero-contours.module.css';

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float time;
  uniform vec2 res;
  uniform vec2 mouse;
  uniform float strength;
  uniform vec3 lo;
  uniform vec3 hi;
  uniform vec3 line;
  varying vec2 vUv;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 6; i++) {
      v += a * noise(p);
      p = m * p;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = res.x / res.y;
    vec2 p = vec2(uv.x * aspect, uv.y) * 3.2;
    p += (mouse - 0.5) * 0.7;
    p += vec2(time * 0.028, time * 0.014);

    float e = fbm(p);

    // contour lines from the elevation field, anti-aliased with fwidth
    float lines = e * 15.0;
    float f = abs(fract(lines) - 0.5);
    float d = fwidth(lines);
    float contour = 1.0 - smoothstep(0.0, d * 1.6, f);

    // every 5th line heavier (index contours)
    float major = 1.0 - smoothstep(0.0, d * 2.4, abs(fract(lines / 5.0) - 0.5));

    // Transparent output: only faint land haze + delicate lines float over the
    // page background, so foreground text stays legible.
    vec3 land = mix(lo, hi, smoothstep(0.15, 0.95, e));
    vec3 col = mix(land, line, clamp(contour + major * 0.6, 0.0, 1.0));

    float landAlpha = smoothstep(0.1, 0.95, e) * 0.05;
    float lineAlpha = contour * 0.22 + major * 0.13;
    float alpha = (landAlpha + lineAlpha) * strength;

    // fade toward the edges so it reads as an ambient backdrop
    float vig = smoothstep(1.3, 0.25, length(uv - 0.5));
    alpha *= mix(0.5, 1.0, vig);

    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`;

// Overall opacity of the whole effect. Lower = quieter backdrop.
const STRENGTH = 0.6;

const palettes = {
  dark: { lo: '#153524', hi: '#4f9a68', line: '#8fe6b0' },
  light: { lo: '#bcdcc6', hi: '#7bbb90', line: '#2d7a3f' },
};

// Ambient topographic-contour backdrop for the intro. Faint green elevation
// lines drift and follow the cursor, rendered on a transparent canvas so the
// headline reads cleanly on top. Replaces the original displacement sphere.
export const HeroContours = props => {
  const { theme } = useTheme();
  const canvasRef = useRef();
  const renderer = useRef();
  const scene = useRef();
  const camera = useRef();
  const material = useRef();
  const mesh = useRef();
  const mouse = useRef(new Vector2(0.5, 0.5));
  const start = useRef(performance.now());
  const reduceMotion = useReducedMotion();
  const isInViewport = useInViewport(canvasRef);
  const windowSize = useWindowSize();

  useEffect(() => {
    renderer.current = new WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.current.setSize(window.innerWidth, window.innerHeight);

    scene.current = new Scene();
    camera.current = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const colors = palettes[theme] || palettes.dark;
    material.current = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      extensions: { derivatives: true },
      uniforms: {
        time: { value: 0 },
        res: { value: new Vector2(window.innerWidth, window.innerHeight) },
        mouse: { value: new Vector2(0.5, 0.5) },
        strength: { value: STRENGTH },
        lo: { value: new Color(colors.lo) },
        hi: { value: new Color(colors.hi) },
        line: { value: new Color(colors.line) },
      },
    });

    mesh.current = new Mesh(new PlaneGeometry(2, 2), material.current);
    scene.current.add(mesh.current);

    return () => {
      mesh.current?.geometry.dispose();
      material.current?.dispose();
      renderer.current?.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update palette on theme change without rebuilding the renderer.
  useEffect(() => {
    if (!material.current) return;
    const colors = palettes[theme] || palettes.dark;
    material.current.uniforms.lo.value.set(colors.lo);
    material.current.uniforms.hi.value.set(colors.hi);
    material.current.uniforms.line.value.set(colors.line);
    if (reduceMotion) {
      renderer.current.render(scene.current, camera.current);
    }
  }, [theme, reduceMotion]);

  // Track resize.
  useEffect(() => {
    const { width, height } = windowSize;
    if (!renderer.current) return;
    renderer.current.setSize(width, height);
    material.current.uniforms.res.value.set(width, height);
    if (reduceMotion) {
      renderer.current.render(scene.current, camera.current);
    }
  }, [windowSize, reduceMotion]);

  // Track pointer for the parallax drift.
  useEffect(() => {
    const onMouseMove = throttle(event => {
      mouse.current.set(
        event.clientX / window.innerWidth,
        1.0 - event.clientY / window.innerHeight
      );
    }, 100);

    if (!reduceMotion && isInViewport) {
      window.addEventListener('pointermove', onMouseMove);
    }

    return () => {
      window.removeEventListener('pointermove', onMouseMove);
    };
  }, [isInViewport, reduceMotion]);

  // Animate (paused when off-screen or reduced-motion).
  useEffect(() => {
    let animation;

    const animate = () => {
      animation = requestAnimationFrame(animate);
      material.current.uniforms.time.value = (performance.now() - start.current) / 1000;
      material.current.uniforms.mouse.value.lerp(mouse.current, 0.05);
      renderer.current.render(scene.current, camera.current);
    };

    if (!reduceMotion && isInViewport) {
      animate();
    } else if (renderer.current) {
      renderer.current.render(scene.current, camera.current);
    }

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [isInViewport, reduceMotion]);

  return (
    <Transition in timeout={3000} nodeRef={canvasRef}>
      {({ visible, nodeRef }) => (
        <canvas
          aria-hidden
          className={styles.canvas}
          data-visible={visible}
          ref={nodeRef}
          {...props}
        />
      )}
    </Transition>
  );
};
