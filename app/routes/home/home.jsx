import productLeadershipLarge from '~/assets/product-leadership-large.jpg';
import productLeadershipPlaceholder from '~/assets/product-leadership-placeholder.jpg';
import productLeadership from '~/assets/product-leadership.jpg';
import agileScalingLarge from '~/assets/agile-scaling-large.jpg';
import agileScalingPlaceholder from '~/assets/agile-scaling-placeholder.jpg';
import agileScaling from '~/assets/agile-scaling.jpg';
import aiDevLarge from '~/assets/ai-dev-large.jpg';
import aiDevPlaceholder from '~/assets/ai-dev-placeholder.jpg';
import aiDev from '~/assets/ai-dev.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import petFriendlyVideo from '~/assets/petfriendly.mp4';
import petFriendlyPlaceholder from '~/assets/petfriendly-placeholder.jpg';
import givingBackLarge from '~/assets/giving-back-large.jpg';
import givingBackPlaceholder from '~/assets/giving-back-placeholder.jpg';
import givingBack from '~/assets/giving-back.jpg';
import crawleradoVideo from '~/assets/crawlerado.mp4';
import crawleradoPlaceholder from '~/assets/crawlerado-placeholder.jpg';
import audioImg from '~/assets/audio.jpg';
import audioPlaceholder from '~/assets/audio-placeholder.jpg';
import { AudioWaveform } from './audio-waveform';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Product Leader, Agile Coach & Builder',
    description: `Product leader, agile coach, and builder. Former Chief of Staff. Scaled teams from 20 to 80+. Trained thousands across four countries.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Building and Shipping Products"
        description="Four products I designed and shipped end to end: this site, a weather app, a gravel-road discovery tool, and a resource app for people without housing. I write the code, using LLM-based tools as my engineering partner."
        buttonText="View projects"
        buttonLink="/projects/ai-development"
        decorativeLabel="Shipped"
        model={{
          alt: 'Four AI-built apps: portfolio site, StarkWeather, Grabbl, and SleepMat',
          imageScale: 1,
          imageOffsetY: '0%',
          textures: [
            {
              srcSet: `${aiDev} 1280w, ${aiDevLarge} 7823w`,
              placeholder: aiDevPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        previewMaxWidth="450px"
        title="PetFriendly: Chief of Staff"
        description="I co-ran a pet-wellness startup alongside the CEO. Led an 11-person engineering team, ran operations and the leadership team, and tripled the product offering."
        buttonText="How I ran it"
        buttonLink="/projects/petfriendly"
        decorativeLabel="Ran"
        model={{
          alt: 'PetFriendly app promotional video',
          imageScale: 1,
          videoCrop: '576 / 624',
          videoCropY: '50%',
          textures: [
            {
              src: petFriendlyVideo,
              placeholder: petFriendlyPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Flywheel: Product Leadership"
        description="I led delivery for Flywheel's second product, Local Pro. Ran the roadmap from user research through go-to-market, across engineering, design, and marketing."
        buttonText="How I led it"
        buttonLink="/projects/flywheel"
        decorativeLabel="Led"
        model={{
          alt: 'Agile scaling team collaboration and sprint planning',
          imageScale: 1.4,
          imageCrop: '1280 / 770',
          imageCropY: '21%',
          imageOffsetX: '3.5%',
          textures: [
            {
              srcSet: `${agileScaling} 1280w, ${agileScalingLarge} 3916w`,
              placeholder: agileScalingPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Scaling Agile: 20 to 80+ Builders"
        description="As Agile Coach at Flywheel/WP Engine, I grew the Scrum organization from 20 to 80-plus and coached client teams across four countries on Scrum, Kanban, and release planning. I learned the craft from Scrum co-creator Jeff Sutherland and Mike Cohn."
        buttonText="How I scaled it"
        buttonLink="/projects/scaling-agile"
        decorativeLabel="Scaled"
        model={{
          alt: 'Flywheel product leadership team collaboration',
          textures: [
            {
              srcSet: `${productLeadership} 1280w, ${productLeadershipLarge} 2048w`,
              placeholder: productLeadershipPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Giving Back"
        description="Board leadership, mentoring the same kid for nine years, food drives, and shelter volunteering. Showing up matters."
        buttonText="See the work"
        buttonLink="/giving-back"
        decorativeLabel="Gave"
        model={{
          alt: 'Giving back to the community',
          textures: [
            {
              srcSet: `${givingBack} 1280w, ${givingBackLarge} 5760w`,
              placeholder: givingBackPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Crawlerado Bikepacking"
        description="A bikepacking community I founded in Northern Colorado, plus the web app behind it: interactive gravel-road discovery, gear checklists, and ride planning. Built and shipped solo."
        buttonText="Visit crawlerado.com"
        buttonLink="https://crawlerado.com"
        decorativeLabel="Rode"
        model={{
          alt: 'Crawlerado bikepacking community website',
          textures: [
            {
              src: crawleradoVideo,
              placeholder: crawleradoPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        overlay={<AudioWaveform />}
        title="Audio Engineer"
        description="Before product, I made records. Engineering, mixing, mastering, and session work on 50-plus releases across the Midwest."
        buttonText="View discography"
        buttonLink="https://www.discogs.com/artist/1196680-Nathan-Knisley"
        decorativeLabel="Mixed"
        model={{
          alt: 'Nathan in the recording studio behind the mixing console',
          textures: [
            {
              srcSet: `${audioImg} 1279w`,
              placeholder: audioPlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
