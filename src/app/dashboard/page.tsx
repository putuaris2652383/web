import {
  Badge,
  Button,
  Card,
  Column,
  Heading,
  Meta,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";
import { ImpactVisualization } from "@/components/dashboard/ImpactVisualization";
import { about, baseURL, person } from "@/resources";
import styles from "./dashboard.module.scss";

const impact = [
  { value: "35", amount: 35, label: "Participants", note: "National virtual workshop" },
  { value: "13", amount: 13, label: "Educational vlogs", note: "Youth-created content" },
  { value: "20K+", amount: 20000, label: "Vlog views", note: "Digital outreach" },
  { value: "30K+", amount: 30000, label: "Impressions", note: "Campaign reach" },
  { value: "14.7%", amount: 14.7, label: "Knowledge increase", note: "Carbon footprint understanding" },
  { value: "77%", amount: 77, label: "Pre/post participation", note: "Workshop assessment" },
];

const research = [
  {
    title: "AI-Based Climate Modeling",
    meta: "FNN · 1995–2024 · 4 stations",
    value: "R = 0.97",
    description: "Daily surface-temperature prediction using a FeedForward Neural Network with Keras, time-series analysis, and climate-data preprocessing.",
    href: "/work/ai-based-climate-modeling",
  },
  {
    title: "PM2.5 Monitoring with ESP32",
    meta: "Research Assistant · 2018–2019",
    value: "IoT + Web",
    description: "Low-cost monitoring prototype using DSM501, ESP32, microSD, SQL storage, and an HTML/PHP visualization interface.",
    href: "/work/pm25-monitoring-esp32",
  },
  {
    title: "Carbon Vlogger Workshop",
    meta: "Project Leader · 2025",
    value: "2.5M IDR",
    description: "Climate education and digital storytelling program combining workshop learning, youth-led vlogs, evaluation, and green-jobs themes.",
    href: "/work/carbon-vlogger-workshop-challenge",
  },
];

const timeline = [
  ["2018–2019", "PM2.5 monitoring research", "IPB University"],
  ["2021", "B.Sc. Applied Meteorology", "IPB University"],
  ["2022–2023", "Development & Planning Staff", "Yaksa Pelestari Bumi Berkelanjutan"],
  ["2024", "Disaster education program support", "Rinjani Geopark × UNESCO"],
  ["2025", "Carbon Vlogger Project Leader", "MyCarbonSteps × Carbon Academy"],
  ["2025", "AI-based climate modeling", "IPB University"],
  ["2026", "M.Appl.Clim. — final year", "IPB University"],
];

const skills = [
  "Climate data analytics",
  "Python / Keras",
  "Time-series analysis",
  "Data collection & cleaning",
  "Monitoring & Evaluation",
  "Project coordination",
  "Stakeholder engagement",
  "Environmental education",
  "IoT / ESP32",
  "SQL / HTML / PHP",
];

export async function generateMetadata() {
  return Meta.generate({
    title: `Dashboard – ${person.name}`,
    description: `Climate, research, air-quality, carbon-impact, and project dashboard for ${person.name}.`,
    baseURL,
    path: "/dashboard",
  });
}

export default function Dashboard() {
  return (
    <Column maxWidth="m" gap="m" paddingY="m" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/dashboard"
        title={`Dashboard – ${person.name}`}
        description={`Climate, research, air-quality, carbon-impact, and project dashboard for ${person.name}.`}
        author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }}
      />

      <Column fillWidth gap="m">
        <Row fillWidth horizontal="between" vertical="end" s={{ direction: "column", alignItems: "flex-start" }} gap="m">
          <Column gap="8">
            <Badge background="brand-alpha-weak" onBackground="brand-strong" arrow={false}>
              Climate Intelligence Dashboard
            </Badge>
            <Heading variant="display-strong-m" wrap="balance">Research, impact & climate action</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
              A live portfolio view of {person.name}&apos;s climate research, environmental projects, digital engagement, and carbon tools.
            </Text>
          </Column>
          <Button href="/carbon-calculator" variant="primary" size="s" arrowIcon>Open Carbon Calculator</Button>
        </Row>
      </Column>

      <Row fillWidth gap="m" s={{ direction: "column" }} vertical="start">
        <Column flex={1} gap="m">
          <Column fillWidth gap="s">
            <Heading as="h2" variant="display-strong-xs">Project impact</Heading>
            <Card border="neutral-alpha-weak" radius="l" padding="l">
              <ImpactVisualization impact={impact} />
            </Card>
          </Column>

          <Column fillWidth gap="s">
            <Heading as="h2" variant="display-strong-xs">Research & technical work</Heading>
            <Row fillWidth wrap gap="8" s={{ direction: "column" }}>
              {research.map((item) => (
                <Card key={item.title} className={styles.researchCard} border="neutral-alpha-weak" radius="l" padding="s">
                  <Column fillWidth gap="8">
                    <Row fillWidth horizontal="between" gap="12" vertical="start">
                      <Column gap="4">
                        <Heading as="h3" variant="heading-strong-s">{item.title}</Heading>
                        <Text variant="body-default-xs" onBackground="neutral-weak">{item.meta}</Text>
                      </Column>
                      <Badge background="brand-alpha-weak" onBackground="brand-strong" arrow={false}>{item.value}</Badge>
                    </Row>
                    <Text className={styles.researchDescription} variant="body-default-s" onBackground="neutral-weak">
                      {item.description}
                    </Text>
                    <Button href={item.href} variant="secondary" size="s" arrowIcon>View project</Button>
                  </Column>
                </Card>
              ))}
            </Row>
          </Column>
        </Column>

        <Column flex={1} gap="m">
          <Column fillWidth gap="s">
            <Heading as="h2" variant="display-strong-xs">Carbon & climate action</Heading>
            <Card border="brand-alpha-medium" background="brand-alpha-weak" radius="l" padding="s">
              <Column gap="8">
                <Heading as="h3" variant="heading-strong-s">Carbon Calculator</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Explore transport and electricity emissions with activity-based reduction scenarios.
                </Text>
                <Row gap="8" wrap>
                  <Badge arrow={false}>Transport</Badge>
                  <Badge arrow={false}>Electricity</Badge>
                  <Badge arrow={false}>Waste</Badge>
                  <Badge arrow={false}>Action tracking</Badge>
                </Row>
                <Button href="/carbon-calculator" variant="primary" size="s" arrowIcon>Calculate footprint</Button>
              </Column>
            </Card>
          </Column>

          <Column fillWidth gap="s">
            <Heading as="h2" variant="display-strong-xs">Core capabilities</Heading>
            <Card border="neutral-alpha-weak" radius="l" padding="s">
              <Row wrap gap="8">
                {skills.map((skill) => <Badge key={skill} arrow={false}>{skill}</Badge>)}
              </Row>
            </Card>
          </Column>

          <Column fillWidth gap="m">
            <Heading as="h2" variant="display-strong-xs">Career & academic timeline</Heading>
            <Card border="neutral-alpha-weak" radius="l" padding="s">
              <Column className={styles.timeline} fillWidth>
                {timeline.map(([year, title, organization]) => (
                  <Row key={`${year}-${title}`} fillWidth gap="12" className={styles.timelineItem} vertical="start">
                    <Text className={styles.timelineYear} variant="label-default-s">{year}</Text>
                    <Column gap="2">
                      <Text variant="body-strong-s">{title}</Text>
                      <Text variant="body-default-xs" onBackground="neutral-weak">{organization}</Text>
                    </Column>
                  </Row>
                ))}
              </Column>
            </Card>
          </Column>
        </Column>
      </Row>

      <Row fillWidth horizontal="end">
        <Button href="/about" variant="secondary" arrowIcon>View full profile</Button>
      </Row>
    </Column>
  );
}
