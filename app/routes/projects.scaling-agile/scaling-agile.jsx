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
import { Link } from '~/components/link';
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
                    Over my four years at Flywheel the Scrum organization went from around
                    20 people running a handful of teams to more than 80 builders.
                    Coaching it through that growth was the second half of my time there,
                    after the{' '}
                    <Link href="/projects/flywheel">product work</Link>. I ran the
                    coaching, reshaped team structures as groups split, and built the
                    cross-team coordination a group that size needs. I also coached leaders
                    through the problems that come with fast growth.
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
            <ProjectTextRow width="l" noMargin>
              <ProjectSectionHeading>Coaching the Coaches</ProjectSectionHeading>
              <ProjectSectionText>
                The agile group itself was four people, and it reported to me. Coaching
                coaches turns out to be a different job from coaching teams, and most of
                it is deciding what to leave alone.
              </ProjectSectionText>
              <ProjectSectionText>
                Each coach held their own teams and their own judgment about what those
                teams needed. My part was making the boundaries clear and then backing
                their calls in front of leadership when a team chose something unusual. A
                coach who gets overruled in public once stops making the call at all, and
                after that every decision comes back to me, which does not survive past a
                handful of teams.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className={styles.compactSection}>
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
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <ProjectSectionHeading>Agile Outside Engineering</ProjectSectionHeading>
              <ProjectSectionText>
                Marketing, customer experience, design, and product picked up the same
                practices. Engineering usually gets there first and then wonders why the
                rest of the company still works in quarterly batches.
              </ProjectSectionText>
              <ProjectSectionText>
                Those groups needed a translation rather than a rollout. A marketing team
                running two-week iterations is not doing Scrum with different nouns, and
                pretending otherwise is how process earns a bad name. What carried over
                was the small parts: a visible backlog, a standing retrospective, and
                permission to stop something that was not working.
              </ProjectSectionText>
            </ProjectTextRow>
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
