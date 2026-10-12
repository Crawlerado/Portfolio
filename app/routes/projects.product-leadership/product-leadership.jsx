import mesaStore from '~/assets/mesa-store.mp4';
import mesaStorePlaceholder from '~/assets/mesa-store-placeholder.jpg';
import oddityStore from '~/assets/oddity-store.mp4';
import oddityStorePlaceholder from '~/assets/oddity-store-placeholder.jpg';
import aiDev from '~/assets/ai-dev.jpg';
import aiDevLarge from '~/assets/ai-dev-large.jpg';
import aiDevPlaceholder from '~/assets/ai-dev-placeholder.jpg';
import petFriendlyProducts from '~/assets/petfriendly-products.jpg';
import petFriendlyProductsPlaceholder from '~/assets/petfriendly-products-placeholder.jpg';
import local from '~/assets/local.jpg';
import localLarge from '~/assets/local-large.jpg';
import localPlaceholder from '~/assets/local-placeholder.jpg';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { media } from '~/utils/style';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './product-leadership.module.css';

const title = 'Product Leadership';
const description =
  'Ten years of product work, from rebuilding payroll for the security industry to moderating councils of Chief Product Officers. Most recently, helping ecommerce brands grow and thrive.';
const roles = [
  'Product Strategy',
  'Discovery',
  'Customer Journey',
  'Zero to One',
  'Product Org Building',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

function Eyebrow({ company, years }) {
  return (
    <div className={styles.eyebrow}>
      <span>{company}</span>
      <span className={styles.eyebrowYears}>{years}</span>
    </div>
  );
}

function Stats({ items }) {
  return (
    <dl className={styles.stats}>
      {items.map(({ value, label }) => (
        <div key={label}>
          <dt className={styles.statValue}>{value}</dt>
          <dd className={styles.statLabel}>{label}</dd>
        </div>
      ))}
    </dl>
  );
}

const imageSizes = `(max-width: ${media.mobile}px) 100vw, 50vw`;

export const ProductLeadership = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader title={title} description={description} roles={roles} />

        <ProjectSection padding="top" className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <Eyebrow company="Independent" years="2025 to now" />
                  <ProjectSectionHeading>Product Consulting</ProjectSectionHeading>
                  <ProjectSectionText>
                    Ecommerce brands rarely run short of growth ideas. What they lack is
                    a clear picture of how a customer actually gets from a first visit to
                    a third order. My consulting work starts here: mapping the customer
                    journey, reading where buying habits are shifting, and tying each
                    change back to customer lifetime value, the number that decides
                    whether growth pays for itself.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    For Mesa Coffee Company, that meant a move from Wix to Shopify built
                    around subscriptions, with a focus on Shopify Collective:
                    pulling partner brands&apos; products in, and expanding Mesa&apos;s coffee out
                    to other retailers.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <figure className={styles.figure}>
                <div className={styles.imageWrap}>
                  <Image
                    src={mesaStore}
                    placeholder={mesaStorePlaceholder}
                    alt="A walkthrough of the Mesa Coffee Company Shopify store: home page, coffee collection, and the subscription product page"
                    sizes={imageSizes}
                  />
                </div>
                <figcaption className={styles.caption}>
                  Mesa Coffee Company on Shopify, ahead of launch
                </figcaption>
              </figure>
            </div>
            <div className={styles.columns} data-alternate="true" data-stacked="true">
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionText>
                    Oddity Cycles builds titanium frames and components by hand in Fort
                    Collins. It got a rebuilt storefront, a prioritized product pipeline,
                    and order fulfillment that no longer ran on manual steps, with product
                    pages that carry the full spec sheet a custom-bike buyer looks for.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <figure className={styles.figure}>
                <div className={styles.imageWrap}>
                  <Image
                    src={oddityStore}
                    placeholder={oddityStorePlaceholder}
                    alt="A walkthrough of the Oddity Cycles Shopify store: home page, the shop, and the Razorbar product page"
                    sizes={imageSizes}
                  />
                </div>
                <figcaption className={styles.caption}>
                  Oddity Cycles on Shopify, ahead of launch
                </figcaption>
              </figure>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns} data-alternate="true">
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <Eyebrow company="Personal products" years="Ongoing" />
                  <ProjectSectionHeading>Building My Own Products</ProjectSectionHeading>
                  <ProjectSectionText>
                    The same approach runs through the products I design and build
                    myself, with LLM-based tools as my engineering partner. Crawlerado
                    started as a bikepacking group in Northern Colorado and now has more
                    than 70 members who ride together in person, with{' '}
                    <Link href="https://crawlerado.com">crawlerado.com</Link> as its home
                    base.{' '}
                    <Link href="https://crawlerado.com/explore">Find Unpaved</Link> takes
                    that need worldwide: a map of gravel and dirt roads, built on a
                    pipeline that turns OpenStreetMap data into vector tiles, with a
                    self-hosted routing engine behind it.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    <Link href="https://sleepmat.app">SleepMat</Link> came out of
                    conversations with community leaders who work with people without
                    housing. It finds shelter, food, showers, and healthcare with no
                    signal and no account, because the people who need it most are often
                    the ones without a data plan. Listings come from federal and municipal
                    sources and ship inside the app, so the first launch works on a dead
                    connection.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Two portfolio sites share one component foundation:{' '}
                    <Link href="https://hellokristin.co">hellokristin.co</Link>, which
                    brings a communications professional&apos;s writing, campaigns, and
                    travel photography into one place, and nathank.build, the site
                    you&apos;re reading.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  srcSet={`${aiDev} 1280w, ${aiDevLarge} 1800w`}
                  width={1280}
                  height={460}
                  placeholder={aiDevPlaceholder}
                  alt="Three products I built: Find Unpaved, SleepMat, and nathank.build"
                  sizes={imageSizes}
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <Eyebrow company="Products That Count" years="2024 to 2025" />
              <ProjectSectionHeading>Leading the Product Leaders</ProjectSectionHeading>
              <ProjectSectionText>
                Products That Count is a Silicon Valley non-profit founded by author SC
                Moatti, a global network that inspires more than 500,000 professionals to
                build products that count. It runs an award-winning podcast and one of
                the leading product newsletters on Substack.
              </ProjectSectionText>
              <ProjectSectionText>
                The work sat with the most senior people in that network. The advisory
                councils of Chief Product Officers, VPs, directors, and product managers
                were mine to moderate, along with the awards programs that recognize the
                best product work in the industry. Behind both sat the judging rubrics and
                the curriculum for the leadership summits, written so that each session
                moved the craft forward rather than repeating last year&apos;s talks.
              </ProjectSectionText>
              <ProjectSectionText>
                Leading leaders is its own skill. Nobody in those rooms needs a process
                explained to them, so the job is to make their time count and keep the
                conversation honest. Redesigning the journey a nominee and a judge go
                through let us launch three executive awards programs in a third of the
                time they took before.
              </ProjectSectionText>
              <Stats
                items={[
                  { value: '500K+', label: 'Professionals in the network' },
                  { value: '3', label: 'Executive awards programs launched' },
                  { value: '2×', label: 'Executive engagement' },
                ]}
              />
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <Eyebrow company="PetFriendly" years="2022 to 2024" />
                  <ProjectSectionHeading>From One Product to a Platform</ProjectSectionHeading>
                  <ProjectSectionText>
                    PetFriendly was a single-product subscription company when I joined
                    as Chief of Staff. The goal was a company that could launch whatever
                    product it chose next, physical or digital, without rebuilding the
                    business each time. Along the way we tripled the product offering.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    That ambition outgrew the store. We re-envisioned commerce as a custom
                    headless platform on Shopify, built for subscriptions from the ground
                    up: recurring billing, plan changes, skips, and swaps, each wired to
                    fulfillment for boxes that ship on a schedule. It was the
                    company&apos;s largest objective, delivered by a 23-person product org
                    across three countries.
                  </ProjectSectionText>
                  <div className={styles.link}>
                    <Button
                      secondary
                      iconHoverShift
                      href="/projects/petfriendly"
                      iconEnd="arrow-right"
                    >
                      Read the full case study
                    </Button>
                  </div>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  srcSet={`${petFriendlyProducts} 800w`}
                  width={800}
                  height={700}
                  placeholder={petFriendlyProductsPlaceholder}
                  alt="PetFriendly subscription boxes with dogs and customers"
                  sizes={imageSizes}
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns} data-alternate="true">
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <Eyebrow company="Flywheel / WP Engine" years="2018 to 2022" />
                  <ProjectSectionHeading>Out of the Build Trap</ProjectSectionHeading>
                  <ProjectSectionText>
                    Flywheel grew up building what its founders and loudest customers
                    asked for, which works until it doesn&apos;t. Melissa Perri calls it
                    the build trap, and most people know it as the feature factory:
                    shipping gets measured, outcomes don&apos;t, and nobody can say which
                    features moved anything.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    The shift was from intuition to evidence. Teams learned to start from
                    the problem instead of the feature: customer interviews, jobs to be
                    done, prototype tests before code, and success measured in outcomes
                    over output. Today that goes by continuous discovery, with a product
                    trio of product, design, and engineering working each problem
                    together. The fundamentals underneath are older than the labels.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    It ran through real products: delivery on Local, the desktop app
                    WordPress developers build on, Local Pro from user research to launch,
                    and the Cloud Platform team through its move to Kubernetes. To make the
                    practice outlast any one team, I founded and chaired the Product
                    Management Community of Practice and moved the company toward Minimum
                    Lovable Product thinking.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  srcSet={`${local} 1269w, ${localLarge} 5075w`}
                  width={1269}
                  height={850}
                  placeholder={localPlaceholder}
                  alt="Local, the WordPress development app from Flywheel"
                  sizes={imageSizes}
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <Eyebrow company="Mutual of Omaha" years="2017 to 2018" />
              <ProjectSectionHeading>A Data Science Product From Nothing</ProjectSectionHeading>
              <ProjectSectionText>
                Mutual of Omaha, a Fortune 500 insurer, had data scientists and nowhere
                for them to work at scale. The answer was its first big data platform, a
                Hadoop build that was zero to one in the truest sense: no existing system
                to improve, and no internal customer who had used one before.
              </ProjectSectionText>
              <ProjectSectionText>
                Discovery came first. That meant interviewing the analysts and business
                teams who would use it, mapping the questions they could not yet answer,
                and sizing which opportunities were worth solving first. From there we
                stood up three new agile teams focused on data science and big data.
              </ProjectSectionText>
              <ProjectSectionText>
                The bigger goal was data democratization: putting analysis in the hands
                of people outside the data team. A cross-functional group taught analytics
                literacy across the company, and I served as the primary trainer for its
                wider agile transformation.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection className={styles.compactSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <Eyebrow company="TEAM Software" years="2015 to 2017" />
              <ProjectSectionHeading>Rebuilding What Could Not Break</ProjectSectionHeading>
              <ProjectSectionText>
                TEAM Software runs operations for some of the largest security and
                facility maintenance companies in the United States. Its most critical
                functions are payroll, accounts receivable, scheduling, and proximity
                check-in: the features that decide whether thousands of guards and
                cleaners get scheduled, clocked in, and paid on time.
              </ProjectSectionText>
              <ProjectSectionText>
                They were also the oldest parts of the product. We re-imagined them from
                the user&apos;s chair, redesigning the four highest-criticality screens
                with user-centered design, and I wrote the operating playbook the product
                teams worked from. A mobile staffing concept for covering open shifts won
                the company&apos;s Innovative Start-Up Idea Award.
              </ProjectSectionText>
              <ProjectSectionText>
                The rebuilt functions changed what the industry expected from its
                software, and the growing offering carried the company through to its
                acquisition.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
