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
  'Live sites and apps I designed and shipped, using LLM-based coding tools as my engineering partner. Each one solves a concrete problem for the people who use it.';
const roles = ['Product', 'AI Development', 'Design', 'Builder'];

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
          name="nathank.build"
          href="https://nathank.build"
          image={
            <Image
              srcSet={`${nathankSite} 1400w`}
              width={1400}
              height={886}
              placeholder={nathankSitePlaceholder}
              alt="nathank.build portfolio site"
              sizes={sizes}
            />
          }
        >
          The site you&apos;re on right now. Built with Remix, Three.js, and custom GLSL
          shaders, deployed to Cloudflare. I used Claude Code as my engineering partner
          throughout. It has a responsive layout, animated transitions, dark and light
          themes, and is tuned for performance.
        </Product>

        <Product
          name="odditycycles.com"
          href="https://odditycycles.com"
          alternate
          image={
            <Image
              srcSet={`${oddity} 1400w`}
              width={1400}
              height={886}
              placeholder={oddityPlaceholder}
              alt="odditycycles.com storefront"
              sizes={sizes}
            />
          }
        >
          The brand and online store for Oddity Cycles. It gives the company a clean home
          to show its frames and sell parts, with a straightforward path from browsing to
          checkout. The layout stays plain on purpose so the bikes lead. It loads quickly
          and reads well on phones as well as desktops.
        </Product>

        <Product
          name="crawlerado.com"
          href="https://crawlerado.com"
          image={
            <Image
              src={crawleradoVideo}
              width={1200}
              height={772}
              placeholder={crawleradoPlaceholder}
              alt="crawlerado.com bikepacking community site"
              sizes={sizes}
              noPauseButton
            />
          }
        >
          The home for Crawlerado, a Northern Colorado bikepacking community I founded. It
          welcomes new riders, points them to routes and gear, and gives the group a place
          to gather. The tone is deliberately rough, built for people who ride dirt.
          Everything is fast and mobile-first, since it gets opened on the trail.
        </Product>

        <Product
          name="Find Unpaved"
          href="https://crawlerado.com/explore"
          alternate
          image={
            <Image
              srcSet={`${findUnpaved} 1400w`}
              width={1400}
              height={924}
              placeholder={findUnpavedPlaceholder}
              alt="Find Unpaved gravel-road discovery map"
              sizes={sizes}
            />
          }
        >
          An interactive map for finding gravel and unpaved roads to ride, part of
          Crawlerado. Riders filter by surface and see what is actually rideable near them,
          instead of guessing from a standard road map. It runs on vector tiles and custom
          routing, so it stays quick even with a lot of data. Less time planning, more time
          riding.
        </Product>

        <Product
          name="sleepmat.app"
          href="https://sleepmat.app"
          image={
            <Image
              srcSet={`${sleepmatWeb} 1400w`}
              width={1400}
              height={924}
              placeholder={sleepmatWebPlaceholder}
              alt="sleepmat.app resource finder"
              sizes={sizes}
            />
          }
        >
          An offline-first app that helps people without stable housing find nearby
          resources: showers, food, shelter, and healthcare. It works without a signal,
          which matters most for the people who rely on it. The listings are curated and
          kept current so they can be trusted. It is quiet, fast, and free of anything that
          gets in the way.
        </Product>

        <Product
          name="hellokristin.co"
          href="https://hellokristin.co"
          alternate
          image={
            <Image
              srcSet={`${hellokristinSite} 1400w`}
              width={1400}
              height={910}
              placeholder={hellokristinSitePlaceholder}
              alt="hellokristin.co communications portfolio"
              sizes={sizes}
            />
          }
        >
          A portfolio site for a communications and marketing professional. It brings her
          writing, campaign work, and travel photography into one calm, readable place. The
          photo galleries are paginated so large sets stay quick to browse. Built on the
          same foundation as this site, tuned to her voice and work.
        </Product>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
