import nathankSite from '~/assets/nathank-site.jpg';
import nathankSitePlaceholder from '~/assets/nathank-site-placeholder.jpg';
import oddity from '~/assets/oddity.jpg';
import oddityPlaceholder from '~/assets/oddity-placeholder.jpg';
import crawleradoVideo from '~/assets/crawlerado.mp4';
import crawleradoPlaceholder from '~/assets/crawlerado-placeholder.jpg';
import findUnpaved from '~/assets/find-unpaved.jpg';
import findUnpavedPlaceholder from '~/assets/find-unpaved-placeholder.jpg';
import sleepmatWeb from '~/assets/sleepmat-web.jpg';
import sleepmatWebPlaceholder from '~/assets/sleepmat-web-placeholder.jpg';
import hellokristinSite from '~/assets/hellokristin-site.jpg';
import hellokristinSitePlaceholder from '~/assets/hellokristin-site-placeholder.jpg';
import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './ai-development.module.css';

const title = 'Building and Shipping Products';
const description =
  'Live sites and apps I designed and shipped, with LLM-based coding tools as my engineering partner. All of these are running in production, and I still maintain them.';
const roles = ['Product', 'ML/AI Development', 'Design', 'Builder'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

const sizes = `(max-width: ${media.mobile}px) 100vw, 50vw`;

function Product({ name, href, alternate, children, image }) {
  return (
    <ProjectSection padding="top" className={styles.compactSection}>
      <ProjectSectionContent>
        <div className={styles.columns} data-alternate={alternate}>
          <div className={styles.textColumn}>
            <ProjectTextRow noMargin>
              <ProjectSectionHeading>
                <Link href={href}>{name}</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>{children}</ProjectSectionText>
            </ProjectTextRow>
          </div>
          <div className={styles.imageWrapLandscape}>{image}</div>
        </div>
      </ProjectSectionContent>
    </ProjectSection>
  );
}

export const AiDevelopment = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader title={title} description={description} roles={roles} />

        <Product
          name="Find Unpaved"
          href="https://crawlerado.com/explore"
          image={
            <Image
              srcSet={`${findUnpaved} 1400w`}
              width={1400}
              height={876}
              placeholder={findUnpavedPlaceholder}
              alt="Find Unpaved gravel-road discovery map"
              sizes={sizes}
            />
          }
        >
          Part of Crawlerado. An interactive map for finding gravel and unpaved roads to
          ride, where you filter by surface and see what is genuinely rideable near you. It
          runs on vector tiles with custom routing, so panning around with that much data
          on screen stays quick.
        </Product>

        <Product
          name="sleepmat.app"
          href="https://sleepmat.app"
          alternate
          image={
            <Image
              srcSet={`${sleepmatWeb} 1400w`}
              width={1400}
              height={876}
              placeholder={sleepmatWebPlaceholder}
              alt="sleepmat.app resource finder"
              sizes={sizes}
            />
          }
        >
          An offline-first app for people without stable housing: showers, food, shelter,
          healthcare, all searchable with no signal and no account. That constraint drove
          most of the design, because the moment you require a login or a data connection
          you have shut out the people who need it most. The listings are curated and kept
          current.
        </Product>

        <Product
          name="odditycycles.com"
          href="https://odditycycles.com"
          image={
            <Image
              srcSet={`${oddity} 1400w`}
              width={1400}
              height={840}
              placeholder={oddityPlaceholder}
              alt="odditycycles.com storefront"
              sizes={sizes}
            />
          }
        >
          The brand and online store for Oddity Cycles, from browsing to checkout. The
          layout stays plain on purpose so the frames lead.
        </Product>

        <Product
          name="crawlerado.com"
          href="https://crawlerado.com"
          alternate
          image={
            <Image
              src={crawleradoVideo}
              width={1200}
              height={688}
              placeholder={crawleradoPlaceholder}
              alt="crawlerado.com bikepacking community site"
              sizes={sizes}
              noPauseButton
            />
          }
        >
          The home for Crawlerado, a Northern Colorado bikepacking community I started.
          Routes, gear, and somewhere for the group to gather. The tone is deliberately
          rough, and everything is mobile-first, because it gets opened at a trailhead on
          one bar of signal.
        </Product>

        <Product
          name="hellokristin.co"
          href="https://hellokristin.co"
          image={
            <Image
              srcSet={`${hellokristinSite} 1400w`}
              width={1400}
              height={862}
              placeholder={hellokristinSitePlaceholder}
              alt="hellokristin.co communications portfolio"
              sizes={sizes}
            />
          }
        >
          A portfolio site for a communications and marketing professional, pulling her
          writing, campaign work, and travel photography into one place. Same foundation as
          this site, tuned to her work. The galleries paginate so the big photo sets stay
          quick.
        </Product>

        <Product
          name="nathank.build"
          href="https://nathank.build"
          alternate
          image={
            <Image
              srcSet={`${nathankSite} 1400w`}
              width={1400}
              height={840}
              placeholder={nathankSitePlaceholder}
              alt="nathank.build portfolio site"
              sizes={sizes}
            />
          }
        >
          The site you&apos;re on. Remix, Three.js, and custom GLSL shaders on Cloudflare,
          with Claude Code as my engineering partner throughout. If you&apos;re reading
          this on a phone in dark mode, that works too.
        </Product>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
