import portfolioSiteLarge from '~/assets/portfolio-site-large.png';
import portfolioSitePlaceholder from '~/assets/portfolio-site-placeholder.png';
import portfolioSite from '~/assets/portfolio-site.png';
import oddity from '~/assets/oddity.jpg';
import oddityPlaceholder from '~/assets/oddity-placeholder.jpg';
import crawleradoVideo from '~/assets/crawlerado.mp4';
import crawleradoPlaceholder from '~/assets/crawlerado-placeholder.jpg';
import findUnpaved from '~/assets/find-unpaved.jpg';
import findUnpavedPlaceholder from '~/assets/find-unpaved-placeholder.jpg';
import sleepmatWeb from '~/assets/sleepmat-web.jpg';
import sleepmatWebPlaceholder from '~/assets/sleepmat-web-placeholder.jpg';
import hellokristinVideo from '~/assets/hellokristin.mp4';
import hellokristinPlaceholder from '~/assets/hellokristin-placeholder.jpg';
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

export const AiDevelopment = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader title={title} description={description} roles={roles} />

        <ProjectSection padding="top" className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>nathank.build</ProjectSectionHeading>
                  <ProjectSectionText>
                    The site you&apos;re on right now. Built with Remix, Three.js, and
                    custom GLSL shaders, deployed to Cloudflare. I used Claude Code as my
                    engineering partner throughout. It has a responsive layout, animated
                    transitions, dark and light themes, and is tuned for performance.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrapLandscape}>
                <Image
                  srcSet={`${portfolioSite} 1280w, ${portfolioSiteLarge} 2560w`}
                  width={1280}
                  height={862}
                  placeholder={portfolioSitePlaceholder}
                  alt="nathank.build portfolio site hero section"
                  sizes={sizes}
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="top" className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>
                    <Link href="https://odditycycles.com">odditycycles.com</Link>
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    The brand and online store for Oddity Cycles. It gives the company a
                    clean home to show its frames and sell parts, with a straightforward
                    path from browsing to checkout. The layout stays plain on purpose so
                    the bikes lead. It loads quickly and reads well on phones as well as
                    desktops.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrapLandscape}>
                <Image
                  srcSet={`${oddity} 1400w`}
                  width={1400}
                  height={903}
                  placeholder={oddityPlaceholder}
                  alt="odditycycles.com storefront"
                  sizes={sizes}
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="top" className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>
                    <Link href="https://crawlerado.com">crawlerado.com</Link>
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    The home for Crawlerado, a Northern Colorado bikepacking community I
                    founded. It welcomes new riders, points them to routes and gear, and
                    gives the group a place to gather. The tone is deliberately rough,
                    built for people who ride dirt. Everything is fast and mobile-first,
                    since it gets opened on the trail.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrapLandscape}>
                <Image
                  src={crawleradoVideo}
                  width={1280}
                  height={800}
                  placeholder={crawleradoPlaceholder}
                  alt="crawlerado.com bikepacking community site"
                  sizes={sizes}
                  noPauseButton
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="top" className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>
                    <Link href="https://crawlerado.com/explore">Find Unpaved</Link>
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    An interactive map for finding gravel and unpaved roads to ride, part
                    of Crawlerado. Riders filter by surface and see what is actually
                    rideable near them, instead of guessing from a standard road map. It
                    runs on vector tiles and custom routing, so it stays quick even with a
                    lot of data. Less time planning, more time riding.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrapLandscape}>
                <Image
                  srcSet={`${findUnpaved} 1400w`}
                  width={1400}
                  height={938}
                  placeholder={findUnpavedPlaceholder}
                  alt="Find Unpaved gravel-road discovery map"
                  sizes={sizes}
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="top" className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>
                    <Link href="https://sleepmat.app">sleepmat.app</Link>
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    An offline-first app that helps people without stable housing find
                    nearby resources: showers, food, shelter, and healthcare. It works
                    without a signal, which matters most for the people who rely on it.
                    The listings are curated and kept current so they can be trusted. It
                    is quiet, fast, and free of anything that gets in the way.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrapLandscape}>
                <Image
                  srcSet={`${sleepmatWeb} 1400w`}
                  width={1400}
                  height={938}
                  placeholder={sleepmatWebPlaceholder}
                  alt="sleepmat.app resource finder"
                  sizes={sizes}
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="top" className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>
                    <Link href="https://hellokristin.co">hellokristin.co</Link>
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    A portfolio site for a communications and marketing professional. It
                    brings her writing, campaign work, and travel photography into one
                    calm, readable place. The photo galleries are paginated so large sets
                    stay quick to browse. Built on the same foundation as this site, tuned
                    to her voice and work.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrapLandscape}>
                <Image
                  src={hellokristinVideo}
                  width={1200}
                  height={695}
                  placeholder={hellokristinPlaceholder}
                  alt="hellokristin.co communications portfolio"
                  sizes={sizes}
                  noPauseButton
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
