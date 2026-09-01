import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "I Putu",
  lastName: "Arisgunarta",
  name: "Putu Aris",
  role: "Climate Learner",
  avatar: "/images/avatar.jpg",
  email: "putuaris.g@gmail.com",
  location: "Asia/Jakarta",
  languages: ["Bahasa Indonesia", "English"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter</>,
  description: <>Climate, data, and environmental solutions.</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/putuaris/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Climate Learner`,
  description: `Portfolio of ${person.name}, a climate and air quality professional working across climate education, environmental programs, data analysis, and research.`,
  headline: <>Welcome Wanderer!</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Climate Action</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">Featured project</Text>
      </Row>
    ),
    href: "/work/carbon-vlogger-workshop-challenge",
  },
  subline: (
    <>
      I&apos;m {person.name}, a climate and air quality professional with experience in project management,
      environmental education, data analysis, and community-based climate action.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `${person.name} – Climate Analyst | Climate Action | Air Quality | Environmental Programs`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: false, link: "" },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Early-career climate professional with hands-on experience in project coordination,
        data management, environmental program implementation, climate education and community-based initiatives climate action. 
        Experienced in data analysis, climate modeling, Internet of Things embed system,  stakeholder engagement,
        and evidence-based environmental climate smart solutions.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "PT. Suryo Riset Indonesia",
        timeframe: "July 2026 – Present",
        role: "RnD Developer",
        achievements: [
          <>Design and development of several IoT device including Greenhouse Gases (GhG) and soil measurement device 7 in 1 </>,
          <>Modeling, calibrating, and conecting the sensor to database and web system</>,
          <>Analyze, visualize, and check factor eror and corelation to standarize device</>,
        ],
      },
      {
        company: "Carbonaddons (Carbon Academy Vol. 3)",
        timeframe: "Apr 2026 – Present",
        role: "Part-Time Facilitator – Climate Education Program",
        achievements: [
          <>Facilitated online sessions and supported program delivery and coordination.</>,
          <>Managed attendance tracking, session documentation, and reporting.</>,
          <>Assisted in participant engagement and activity implementation.</>,
        ],
      },
      {
        company: "MyCarbonSteps x Carbon Academy",
        timeframe: "Feb 2025 – Jun 2025",
        role: "Project Leader – Carbon Vlogger Workshop & Challenge",
        achievements: [
          <>Led end-to-end implementation of a national climate education project involving 30+ participants across Indonesia.</>,
          <>Managed project timeline, deliverables, and coordination with partners and stakeholders.</>,
          <>Conducted monitoring and evaluation using pre- and post-assessment tools, with measurable improvement in participants’ climate literacy.</>,
          <>Prepared project reports, documentation, and impact summaries.</>,
          <>Coordinated digital campaign outputs, reaching 20,000+ users and 30,000+ impressions.</>,
          <>Supported funding acquisition and project continuation planning.</>,
        ],
      },
      {
        company: "Rinjani Geopark x UNESCO Collaboration",
        timeframe: "Sept 2024 – Nov 2024",
        role: "Training & Program Support – Disaster Education Program",
        achievements: [
          <>Supported implementation of disaster education and training programs for 100+ students.</>,
          <>Managed logistics, documentation, attendance tracking, and reporting.</>,
          <>Coordinated with facilitators, schools, and program stakeholders.</>,
          <>Prepared activity reports and ensured proper documentation of outcomes.</>,
        ],
      },
      {
        company: "Yaksa Pelestari Bumi Berkelanjutan",
        timeframe: "Dec 2022 – Feb 2023",
        role: "Development & Planning Staff",
        achievements: [
          <>Supported Zero Waste City Program through research and policy analysis.</>,
          <>Developed planning documents and environmental assessments.</>,
          <>Produced written reports and educational materials for public awareness.</>,
        ],
      },
      {
        company: "IPB University – Climatology Lab",
        timeframe: "Apr 2018 – Sept 2019",
        role: "Air Quality Researcher – PM2.5 Monitoring Project",
        achievements: [
          <>Designed and assembled an IoT-based PM2.5 monitoring device for real-time air quality data collection and system integration.</>,
          <>Managed end-to-end data processes, database management, data analysis, technical reports, and documentation.</>,
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Academic Engagement",
    institutions: [
      {
        name: "IPB University",
        description: <>Master of Applied Climatology (Final year) · Expected December 2026 · GPA 3.90</>,
      },
      {
        name: "IPB University",
        description: <>Bachelor of Science in Applied Meteorology · Graduated July 2021</>,
      },
      {
      name: "Academic Engagement",
      description:(
          <ul style={{ margin: 0, paddingLeft: "35px" }}>
              <li>Oral Presenter, International Young Environmental Scientists Conference (WRI Indonesia, 2025).</li> 
              <li>Participant, Asia Hub & CIAERA Anual Summit (WEF Nexus) 2025.</li> 
              <li>Presenter, Climate Policy Conference – Institut Hijau Indonesia 2025</li>
          </ul>
        ),
      },
      {
      name: "Leadership & Achievements",
      description: (
        <ul style={{ margin: 0, paddingLeft: "35px" }}>
            <li>Best Position Paper – UNDP (Climate Action), International Model United Nations 2021.</li>
            <li>Team Leader, achieve 2nd Best Group Presenter at International Summer Course 2025, IPB University.</li>
            <li>2nd Best Poster Design Competition at FMIPA art competition with theme Climate Action.</li>
        </ul>
       ),
      },
      {
        name: "Certifications & Training",
        description: (
          <ul style={{ margin: 0, paddingLeft: "35px" }}>
            <li>Strengthening Climate Adaptation & Resilience – UN CC: Learn (2024);</li>
            <li>Google Data Analytics with R Programming – Coursera (2023);</li>
            <li>Global Environmental Management – Technical University of Denmark – Coursera (2021); </li>
            <li>Fullstack Developer – KOMINFO (2022).</li>
          </ul>
        )
      },
    ],
  },
  technical: {
    display: true,
    title: "Key Skills",
    skills: [
      {
        title: "Project & Coordination",
        description: <>Project implementation support, timeline and deliverable tracking, stakeholder coordination, and event/workshop organization.</>,
      },
      {
        title: "Monitoring, Evaluation & Data",
        description: <>Basic MEL, data collection, cleaning and analysis, reporting, bi-monthly updates, and summaries.</>,
        tags: [{ name: "Data Analysis", icon: "document" }],
      },
      {
        title: "Climate & Environmental Research",
        description: <>Air quality monitoring (PM2.5), climate data analytics, environmental program implementation, and community-based climate action.</>,
        tags: [{ name: "PM2.5", icon: "globe" }, { name: "Climate", icon: "globe" }],
      },
      {
        title: "Technical",
        description: <>ArcGIS, Python, IoT (Arduino), Keras, NumPy, Pandas, Matplotlib, HTML/CSS/JS, SQL, and ESP32-based environmental sensing.</>,
        tags: [{ name: "Python", icon: "document" }, { name: "ArcGIS", icon: "globe" }, { name: "IoT", icon: "rocket" }],
      },
      {
        title: "Communication",
        description: <>Report writing in English and Bahasa Indonesia, presentation, stakeholder communication, and climate storytelling.</>,
      },
      {
        title: "Languages",
        description: <>Bahasa Indonesia – Native · English – Professional (TOEFL ITP 520).</>,
      },
    ],
  },
};


const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Writing – ${person.name}`,
  description: `Writing and notes by ${person.name} on climate, data, and environmental work`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Climate, environmental data, research, and community projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Photo gallery of ${person.name}'s work`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "Project image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "Project image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "Project image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "Project image", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "Project image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "Project image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "Project image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-3.jpg", alt: "Project image", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
