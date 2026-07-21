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
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './scaling-agile.module.css';

const title = 'Scaling Agile: 20 to 80+ Builders';
const description =
  'As Agile Coach at Flywheel/WP Engine, I scaled the Scrum organization fourfold. Certified by Jeff Sutherland and Mike Cohn, I trained thousands of clients across four countries on Agile, Scrum, Kanban, and release planning.';
const roles = ['Agile Coach', 'Scrum Master', 'Training', 'Organizational Scaling'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

function PlaceholderImage() {
  return (
    <div className={styles.placeholder}>
      <svg
        className={styles.placeholderIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  );
}

export const ScalingAgile = () => {
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
                  <ProjectSectionHeading>Scaling the Organization</ProjectSectionHeading>
                  <ProjectSectionText>
                    When I joined Flywheel as Agile Coach, the engineering team was around
                    20 people running a handful of Scrum teams. Over the next several years,
                    I helped scale it to 80+ builders. That work meant evolving team
                    structures and adding cross-team coordination. I also coached leaders
                    through the problems that come with fast growth.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with team growth visual, org chart, or team photo */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns} data-alternate="true">
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Coaching & Frameworks</ProjectSectionHeading>
                  <ProjectSectionText>
                    I worked across Scrum, Kanban, and SAFe depending on what each team
                    needed. Some teams thrived with strict two-week sprints. Others needed
                    the flexibility of Kanban flow. At the portfolio level, I helped
                    leadership adopt release planning and PI planning practices that
                    gave the whole organization visibility into what was coming and when.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with sprint board, planning session, or framework diagram */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Training Across Borders</ProjectSectionHeading>
                  <ProjectSectionText>
                    Beyond internal coaching, I trained thousands of clients across four
                    countries on Agile, Scrum, Kanban, and release planning. These were
                    hands-on workshops with practical tools teams could apply right away.
                    The clients ranged from startups trying Scrum for the first time to
                    enterprises scaling across departments.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with training session photo or workshop image */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns} data-alternate="true">
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Certification & Growth</ProjectSectionHeading>
                  <ProjectSectionText>
                    I hold Scrum certifications from Jeff Sutherland, co-creator of Scrum,
                    and Mike Cohn, one of the founders of the Scrum Alliance. The
                    certifications were a starting point. Most of what I learned came from
                    years of coaching teams through the reality of building software at
                    scale.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with certification badges, conference photo, or speaking image */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
