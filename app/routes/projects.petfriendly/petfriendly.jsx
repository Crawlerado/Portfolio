import petFriendlyVideo from '~/assets/petfriendly.mp4';
import petFriendlyPlaceholder from '~/assets/petfriendly-placeholder.jpg';
import petFriendlyProducts from '~/assets/petfriendly-products.jpg';
import petFriendlyProductsPlaceholder from '~/assets/petfriendly-products-placeholder.jpg';
import petFriends from '~/assets/petfriends.jpg';
import petFriendsPlaceholder from '~/assets/petfriends-placeholder.jpg';
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
import { media } from '~/utils/style';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './petfriendly.module.css';

const title = 'PetFriendly: Chief of Staff';
const description =
  'Chief of Staff at a subscription pet wellness startup, 2022 to 2024. Company strategy, OKRs across every department, a 23-person product org across three countries, and the budget behind it.';
const roles = [
  'Chief of Staff',
  'Company Strategy',
  'Interim Executive',
  'Org Leadership',
  'Budget Ownership',
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

export const PetFriendly = () => {
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
                  <ProjectSectionHeading>The Mandate</ProjectSectionHeading>
                  <ProjectSectionText>
                    I joined PetFriendly in February 2022 as Chief of Staff, second in
                    command to the CEO, and stayed through March 2024. The official remit
                    was growth, process, brand, and product launch, which in practice meant
                    whatever the company had not yet built.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    The job covered day-to-day operations and chairing the leadership
                    meetings. It also came with standing authority to decide in the
                    CEO&apos;s absence, and interim executive duty on business inquiries
                    and high-level decisions when he was out.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap} style={{ '--videoCrop': '576 / 624', '--videoCropY': '50%' }}>
                <Image
                  className={styles.croppedVideo}
                  src={petFriendlyVideo}
                  placeholder={petFriendlyPlaceholder}
                  alt="PetFriendly app promotional video"
                  sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                  noPauseButton
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <ProjectSectionHeading>Company Strategy</ProjectSectionHeading>
              <ProjectSectionText>
                The company-wide strategy spanned four areas: brand, customer experience,
                technology, and leadership. Building it meant setting the direction each
                function worked toward, then keeping those directions from pulling against
                each other, which is most of the job at a company this size.
              </ProjectSectionText>
              <ProjectSectionText>
                The data strategy and the process around it came out of the same stretch.
                Before that, reporting was assembled by hand whenever someone asked a
                question.
                Afterwards there was a defined source of truth and a routine for keeping
                it current, so leadership arguments could be about the decision rather than
                about whose number was right.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <ProjectSectionHeading>OKRs Across Every Department</ProjectSectionHeading>
              <ProjectSectionText>
                OKRs ran across the whole company, not one function. Every department set
                objectives through the same process, on the same cadence, and reviewed them
                in the same forum. The value was less in the framework than in the
                cadence: a standing rhythm where teams said out loud what they intended to
                do and then reported honestly on what happened.
              </ProjectSectionText>
              <ProjectSectionText>
                Coming from agile coaching, I had already spent years watching this go
                wrong. The failure mode is treating OKRs as a reporting tax instead of a
                prioritization tool, so I kept the set small and made it acceptable to miss
                one and say why.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <ProjectSectionHeading>
                A Product Org Across Three Countries
              </ProjectSectionHeading>
              <ProjectSectionText>
                At its widest the group ran to 23 people. Eleven were in-house product and
                engineering: backend, frontend, a VP of Technology, plus design and data.
                Twelve were contracted, eight Laravel engineers in Canada, two in the
                United States, and two in the Philippines. Alongside that we ran a
                year-long agency engagement.
              </ProjectSectionText>
              <ProjectSectionText>
                Spread across those time zones, the coordination is the work. I owned
                scope, schedule, and the handoffs between groups, which is where
                distributed builds usually fail. The practical version was making sure a
                decision taken in Omaha on Tuesday afternoon reached Manila before it
                blocked anyone, and that no group was waiting on an answer nobody had been
                asked for.
              </ProjectSectionText>
              <ProjectSectionText>
                Twelve contractors on three continents cannot be supervised, so they
                were not. Each group decided inside its own scope and was told plainly
                where the edges were. Freedom with responsibility attached costs less than
                oversight and it survives a nine-hour time difference, which supervision
                does not.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns} data-alternate="true">
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Tripling the Product</ProjectSectionHeading>
                  <ProjectSectionText>
                    PetFriendly grew from a single product into a multi-product platform.
                    We tripled the product offering. That meant spotting market
                    opportunities, prioritizing features from customer feedback, and
                    coordinating engineering, design, and marketing to ship on time.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  srcSet={`${petFriendlyProducts} 800w`}
                  width={800}
                  height={700}
                  placeholder={petFriendlyProductsPlaceholder}
                  alt="PetFriendly subscription boxes with dogs and customers"
                  sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <ProjectSectionHeading>The Headless Commerce Build</ProjectSectionHeading>
              <ProjectSectionText>
                The largest objective on the company roadmap was a custom headless commerce
                platform, built from the ground up for subscription products
                instead of bolted onto a template. I led it to delivery.
              </ProjectSectionText>
              <ProjectSectionText>
                Subscription is the hard part. A standard storefront assumes a one-time
                cart, so recurring billing, plan changes, skips, and swaps all have to be
                designed, not configured, and every one of them touches fulfillment for a
                physical product that ships on a schedule.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Building the Team</ProjectSectionHeading>
                  <ProjectSectionText>
                    Hiring and onboarding sat with me too, along with the routines a small
                    startup needs to stay organized as it grows.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Onboarding mattered more than usual here. With contractors joining from
                    three countries, anything that lived only in someone&apos;s head was a
                    single point of failure, so it had to be written down.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  style={{ transform: 'scale(1.2)' }}
                  srcSet={`${petFriends} 1216w`}
                  width={1216}
                  height={690}
                  placeholder={petFriendsPlaceholder}
                  alt="PetFriendly team members"
                  sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <ProjectSectionHeading>Budget and Vendor Accountability</ProjectSectionHeading>
              <ProjectSectionText>
                I held budget and cost-control accountability for the technology program:
                in-house engineering, two contractor teams, the agency, and the replatform.
                It was a multi-million-dollar program, and I partnered with the CFO on
                spend, forecasting, and the trade-off calls underneath it.
              </ProjectSectionText>
              <ProjectSectionText>
                Managing a premium agency&apos;s scope against an in-house timeline was the
                real work. An outside shop works to its own delivery window, and
                keeping that honest against what the internal team could absorb is a
                different skill from writing the contract.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
