import grabblLarge from '~/assets/grabbl-large.png';
import grabblPlaceholder from '~/assets/grabbl-placeholder.png';
import grabbl from '~/assets/grabbl.png';
import portfolioSiteLarge from '~/assets/portfolio-site-large.png';
import portfolioSitePlaceholder from '~/assets/portfolio-site-placeholder.png';
import portfolioSite from '~/assets/portfolio-site.png';
import starkweatherLarge from '~/assets/starkweather-large.png';
import starkweatherPlaceholder from '~/assets/starkweather-placeholder.png';
import starkweather from '~/assets/starkweather.png';
import sleepmatLarge from '~/assets/sleepmat-large.png';
import sleepmatPlaceholder from '~/assets/sleepmat-placeholder.png';
import sleepmat from '~/assets/sleepmat.png';
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

export const AiDevelopment = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top" className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>nathank.build</ProjectSectionHeading>
                  <ProjectSectionText>
                    The site you&apos;re on right now. Built with Remix, Three.js, and
                    custom GLSL shaders, deployed to Cloudflare. I used Claude Code as
                    my engineering partner throughout. It has responsive layout, animated
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
                  sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top" className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow noMargin>
              <ProjectSectionHeading>
                <Link href="https://odditycycles.com">odditycycles.com</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                The brand site for Oddity Cycles, where I work as Chief of Staff.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://crawlerado.com">crawlerado.com</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                The site for Crawlerado, a Northern Colorado bikepacking community I
                founded.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://crawlerado.com/explore">Find Unpaved</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                An interactive map for finding gravel and unpaved roads to ride, at
                crawlerado.com/explore.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://sleepmat.app">sleepmat.app</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                An offline-first app that helps people without stable housing find nearby
                resources.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>
                <Link href="https://hellokristin.co">hellokristin.co</Link>
              </ProjectSectionHeading>
              <ProjectSectionText>
                A portfolio site for a communications and marketing professional, with
                paginated photo galleries.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
