import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './skills.module.css';

const groups = [
  {
    title: 'Product and discovery',
    items: [
      'Product strategy and roadmap',
      'User research and discovery',
      'OKRs',
      'MoSCoW prioritization',
      'Stakeholder and executive engagement',
      'Cross-functional leadership',
    ],
  },
  {
    title: 'Data and experimentation',
    items: [
      'SQL',
      'Looker',
      'Tableau',
      'BigQuery',
      'A/B testing across web, mobile, and commerce',
      'Salesforce',
    ],
  },
  {
    title: 'Technical ownership',
    items: [
      'Partner APIs',
      'Payments',
      'Auth and SSO',
      'Headless Shopify',
      'Offline-first and PWA architecture',
      'Cloudflare Workers, Pages, and R2',
    ],
  },
  {
    title: 'Delivery at scale',
    items: [
      'Scrum@Scale',
      'Kanban',
      'Release and PI planning',
      'Agile coaching',
      'Team management',
      'Jira and Confluence',
    ],
  },
  {
    title: 'Building with LLMs',
    items: [
      'LLM and agent workflows',
      'Multi-agent orchestration',
      'Prompt and context engineering',
      'Web and mobile development',
      'Geospatial: PMTiles, MapLibre, Valhalla',
      'Developer relations',
    ],
  },
];

export const Skills = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.skills}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div aria-hidden className={styles.tag}>
              <Divider
                notchWidth="64px"
                notchHeight="8px"
                collapsed={!visible}
                collapseDelay={1000}
              />
              <div className={styles.tagText} data-visible={visible}>
                What I work with
              </div>
            </div>
            <Heading
              level={3}
              as="h2"
              className={styles.title}
              data-visible={visible}
              id={titleId}
            >
              Skills
            </Heading>
            <Text className={styles.description} data-visible={visible} as="p">
              The practices and tools behind the work above. I have shipped with all of
              these, most of them alongside a team.
            </Text>
            <ul className={styles.groups}>
              {groups.map((group, index) => (
                <li
                  className={styles.group}
                  key={group.title}
                  data-visible={visible}
                  style={{ '--delay': `${240 + index * 120}ms` }}
                >
                  <h3 className={styles.groupTitle}>{group.title}</h3>
                  <ul className={styles.items}>
                    {group.items.map(item => (
                      <li className={styles.item} key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Transition>
    </Section>
  );
};
