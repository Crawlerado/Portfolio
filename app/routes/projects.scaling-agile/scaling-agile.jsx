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
  'Agile Coach at Flywheel/WP Engine while the Scrum organization grew fourfold, from 20 builders to 80-plus. At Mutual of Omaha, trained client teams on Agile, Scrum, Kanban, and release planning.';
const roles = ['Agile Coach', 'Scrum Master', 'Training', 'Organizational Scaling'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const ScalingAgile = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader title={title} description={description} roles={roles} />
        <ProjectSection padding="top" className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <ProjectSectionHeading>Scaling the Organization</ProjectSectionHeading>
              <ProjectSectionText>
                In two to three years at Flywheel the Scrum organization went from around
                20 people running a handful of teams to more than 80 builders. Coaching it
                through that growth was the second half of my time there, after the
                product work. I ran the coaching, reshaped team structures as groups
                split, and built the cross-team coordination a group that size needs. I
                also coached leaders through the problems that come with fast growth.
              </ProjectSectionText>
              <ProjectSectionText>
                Going from 20 to 80 usually costs a team its working conditions. Keeping
                that from happening was as much of the job as the structure. Teams kept
                the autonomy they had at 20, and the coordination we added on top was
                there to protect it rather than to police it.
              </ProjectSectionText>
            </ProjectTextRow>
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
            <ProjectTextRow width="l" noMargin>
              <ProjectSectionHeading>Coaching & Frameworks</ProjectSectionHeading>
              <ProjectSectionText>
                The framework varied by team: Scrum, Kanban, or SAFe, depending on what
                each one needed. Some thrived with strict two-week sprints. Others needed
                the flexibility of Kanban flow. At the portfolio level I introduced
                release planning and PI planning, which gave the whole organization
                visibility into what was coming and when.
              </ProjectSectionText>
            </ProjectTextRow>
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
            <ProjectTextRow width="l" noMargin>
              <ProjectSectionHeading>Training at Scale</ProjectSectionHeading>
              <ProjectSectionText>
                At Mutual of Omaha, I trained thousands of clients on Agile, Scrum,
                Kanban, and release planning. These were hands-on workshops with practical
                tools teams could apply right away.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <ProjectSectionHeading>Certification & Growth</ProjectSectionHeading>
              <ProjectSectionText>
                The Scrum certifications came from Jeff Sutherland, co-creator of Scrum,
                and Mike Cohn, one of the founders of the Scrum Alliance. They were a
                starting point. Most of the learning came from years of coaching teams
                through the reality of building software at scale.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
