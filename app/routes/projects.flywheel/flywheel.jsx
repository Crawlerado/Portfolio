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
import styles from './flywheel.module.css';

const title = 'Flywheel: Product Leadership';
const description =
  'Product and delivery leadership at Flywheel and WP Engine, 2018 to 2021. Local, the desktop app WordPress developers build on, Local Pro from discovery through launch, and the Cloud Platform team through a move to Kubernetes.';
const roles = [
  'Product Management',
  'User Research',
  'Platform Delivery',
  'Go-to-Market',
  'Community of Practice',
];

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

export const Flywheel = () => {
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
                  <ProjectSectionHeading>The Remit</ProjectSectionHeading>
                  <ProjectSectionText>
                    Flywheel builds WordPress hosting and developer tooling out of Omaha,
                    and was acquired by WP Engine partway through my four years there. I
                    arrived in February 2018 on the delivery side of the developer tools
                    group, and the product work ran until early 2021, when I moved into
                    the coaching role.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    The titles on file were Scrum Master, then Senior Scrum Master from
                    2020. The work was product management: roadmap, research, launch, and
                    the calls underneath them. That gap between what the title said and
                    what the job was is worth naming rather than tidying up.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    This page covers the product half. The coaching half, where the Scrum
                    organization grew from 20 people to more than 80, is on the{' '}
                    <Link href="/projects/scaling-agile">Scaling Agile</Link> page.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with Local app screenshot or Flywheel team photo */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <ProjectSectionHeading>Local, the Developer App</ProjectSectionHeading>
              <ProjectSectionText>
                Local is the desktop application WordPress developers use to run sites on
                their own machines before anything reaches a server. It was the flagship,
                and it was free, so the install base ran far ahead of the paying customer
                base and every release landed in front of all of it at once. Delivery for
                it sat with me.
              </ProjectSectionText>
              <ProjectSectionText>
                A local development tool breaks differently from a hosted one. It runs on
                the user machine, against whatever operating system, PHP version, and
                half-configured environment is already there, so a bug report arrives
                without a stack you control and often without a way to reproduce it. Much
                of the product work was deciding which of those environments we would
                promise to support and saying so plainly, instead of implying we
                supported all of them and disappointing people quietly.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns} data-alternate="true">
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Local Pro</ProjectSectionHeading>
                  <ProjectSectionText>
                    Flywheel needed a second product. Local Pro went from customer
                    discovery through launch with me leading the delivery team. We
                    interviewed users, mapped where they got stuck, and built the roadmap
                    out of what they told us rather than what the roadmap already said.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Research only changes anything if people are free to act on it.
                    Engineering and design sat in the sessions instead of receiving a
                    summary, so priorities got argued out in the open and nobody had to
                    relitigate them later.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with Local Pro screenshot, research artifacts, or roadmap visual */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <ProjectSectionHeading>The Cloud Platform Team</ProjectSectionHeading>
              <ProjectSectionText>
                The Cloud Platform team ran the infrastructure the hosting product sits
                on. I managed it and owned its roadmap, and the largest piece of work in
                that stretch was the move onto Kubernetes.
              </ProjectSectionText>
              <ProjectSectionText>
                Platform roadmaps get argued differently from product roadmaps. None of
                the work is visible to a customer, so a quarter of it has to be justified
                by what it prevents or what it makes cheap later, and the engineers doing
                it are usually the only people who can explain why. Most of my job was
                making sure they were in the room when the trade-off was decided rather
                than hearing about it afterwards.
              </ProjectSectionText>
              <ProjectSectionText>
                A migration of that size also has a long stretch in the middle where
                nothing looks finished. Saying that out loud at the start, and again when
                it was true, kept it from being read as a team that had stalled.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Go-to-Market</ProjectSectionHeading>
                  <ProjectSectionText>
                    Launch coordination across marketing, sales, and support sat with me,
                    so that customers understood what the product did and the internal
                    teams were ready for it the day it shipped.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Support is the part that gets skipped. They take the first call from
                    anyone the launch confuses, and a team that hears about a feature the
                    same week the customers do has been set up to fail at it.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with launch metrics, marketing collateral, or team photo */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <ProjectSectionHeading>The Product Community of Practice</ProjectSectionHeading>
              <ProjectSectionText>
                Product managers at Flywheel sat inside separate teams with no shared way
                of working. The Product Management Community of Practice started as a
                standing forum for them, and I founded it and chaired it. Minimum Lovable
                Product came out of that group and spread from there, mostly because the
                people who had already tried it could say plainly where it had not worked.
              </ProjectSectionText>
              <ProjectSectionText>
                A group like that only earns the hour it takes if it is safe to bring a
                problem to it. Ours was somewhere to say a launch had gone badly, not
                somewhere to present. Protecting that is harder than protecting the
                meeting slot.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
