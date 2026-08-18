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
  'Agile Coach at Flywheel/WP Engine while the Scrum organization grew fourfold, from 20 builders to 80-plus. Trained client teams in four countries on Agile, Scrum, Kanban, and release planning.';
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
                    When I joined Flywheel as Agile Coach, engineering was around 20 people
                    running a handful of Scrum teams. By the time I moved on it was 80-plus
                    builders. I ran the coaching, reshaped team structures as groups split,
                    and built the cross-team coordination a group that size needs. I also
                    coached leaders through the problems that come with fast growth.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Going from 20 to 80 usually costs a team its working conditions.
                    Keeping that from happening was as much of the job as the structure.
                    Teams kept the autonomy they had at 20, and the coordination we added
                    on top was there to protect it rather than to police it.
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
                    The framework varied by team: Scrum, Kanban, or SAFe, depending on what
                    each one needed. Some thrived with strict two-week sprints. Others
                    needed the flexibility of Kanban flow. At the portfolio level I
                    introduced
                    release planning and PI planning, which gave the whole organization
                    visibility into what was coming and when.
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
                    The Scrum certifications came from Jeff Sutherland, co-creator of
                    Scrum, and Mike Cohn, one of the founders of the Scrum Alliance. They
                    were a starting point. Most of the learning came from years of coaching
                    teams through the reality of building software at scale.
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
