import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Shaurya",
  lastName: "Srivastava",
  name: `Shaurya Srivastava`,
  role: "Software Development Engineer | Backend & AI Systems",
  avatar: "/images/my.jpg",
  email: "shaurya0616@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/shaurya1606",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shaurya1606",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/once_ui/",
  //   essential: false,
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: false,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Location",
    icon: "globe",
    link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(person.location)}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Software Development Engineer | Backend & AI Systems",
  description:
    "Portfolio showcasing my work in AI, backend systems, and scalable applications",
  headline: <> I'm Shaurya Srivastava</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Resume</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          View or download (PDF)
        </Text>
      </Row>
    ),
    href: "/resume",
  },
  workSection: {
    title: "Featured Engineering Work",
    featuredSlugs: ["letskraack", "sarion", "authcore"],
  },
  blogSection: {
    title: "Latest from the blog",
    count: 3,
    ctaLabel: "View more",
  },
  subline: (
    <>
      <Text as="span" weight="strong" className="role-highlight">
        Computer Science Undergraduate
      </Text>
      <br />
      <Text as="span" size="xl" weight="strong">
        Experience in developing scalable APIs, real-time AI inference
        pipelines, and LLM-powered applications.
      </Text>
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "#",
  },
  intro: {
    display: true,
    title: "Summary",
    description: (
      <>
        Computer Science undergraduate focused on backend engineering,
        distributed systems, and AI-driven applications. Experienced in building
        scalable platforms, optimizing low-latency services, and deploying ML
        pipelines. Strong foundation in Data Structures, Object-Oriented
        Programming, System Design, and database architecture with hands-on
        experience in Next.js, FastAPI, and PostgreSQL. Seeking Software
        Development Engineer roles.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          "Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.",
          "Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.",
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          "Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.",
          "Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.",
        ],
        images: [],
      },
    ],
  },
  projects: {
    display: true,
    title: "Projects",
    items: [
      {
        slug: "letskraack",
        name: "LetsKraack — Distributed AI Coaching Platform",
        timeframe: "Sep 2025 – Dec 2025",
        techStack:
          "Next.js, TypeScript, PostgreSQL, AWS Polly, AssemblyAI, NeonDB, Drizzle ORM, Putter.js",
        highlights: [
          "Designed parallel AI course-generation pipeline on a normalized 5-table PostgreSQL schema, cutting multi-chapter generation time by ~40%.",
          "Built real-time voice AI interview system (500–2000 ms latency) with sliding window of 4 messages and integrated DSA IDE + AI editorial, reaching ~700 ms evaluation latency.",
          "Implemented 9 stateless REST APIs with persistent conversation tracking for low-latency, scalable backend architecture.",
        ],
        links: {
          github: "https://github.com/shaurya1606/letskraack",
          live: "https://letskraack.com",
        },
      },
      {
        slug: "sarion",
        name: "Sarion — Multi-Drone AI Disaster Response System",
        timeframe: "May 2025 – Jul 2025",
        techStack:
          "Python, FastAPI, YOLO, OpenCV, SQLite, NumPy, PyTorch, Uvicorn, A* search",
        highlights: [
          "Trained YOLO (50 epochs) to 44.7% mAP@50 and 65.8% precision; removed inference lag via multi-threaded pipeline hitting 20 FPS with spatial deduplication.",
          "Built custom A* pathfinding with spatial deduplication, reducing redundant telemetry by ~30% in dense simulations.",
          "Engineered high-concurrency FastAPI backend with 8 REST endpoints sustaining 1-second telemetry polling across multiple agents via async I/O.",
        ],
        links: {
          github: "https://github.com/shaurya1606/sarion",
        },
      },
      {
        slug: "authcore",
        name: "AuthCore — Scalable Authentication & RBAC System",
        timeframe: "Jan 2025 – Mar 2025",
        techStack: "Next.js, TypeScript, PostgreSQL, JWT, OAuth, bcrypt",
        highlights: [
          "Architected multi-provider auth with RBAC on a normalized 6-table schema, isolating permissions across 6 JWT-protected microservices.",
          "Mitigated session-fixation via dual-token strategy (JWT + refresh) with sliding-window revalidation and 10-round bcrypt hashing.",
          "Built automated transactional email pipeline for TOTP-based 2FA maintaining sub-second latency for security-critical flows.",
        ],
        links: {
          github: "https://github.com/shaurya1606/authcore",
          live: "https://authcore.app",
        },
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Pranveer Singh Institute of Technology, Kanpur",
        description: (
          <>
            B.Tech, Computer Science & Engineering (Cybersecurity) (2023 – 2027)
            <br /> CGPA: 7.64 — Percentage: 75.7%
            <br />
            <strong>Relevant coursework:</strong> Operating Systems, Computer
            Networks, Database Management Systems, Algorithms & Data Structures,
            System Design, Cloud Computing
          </>
        ),
      },
      {
        name: "Maharshi Patanjali Vidya Mandir, Prayagraj",
        description: (
          <>
            <strong>Class XII (Science):</strong> 83.2%
            <br />
            <strong>Relevant coursework:</strong> Physics, Chemistry,
            Mathematics, Computer Science, English, Physical Education
            <br />
            <br />
            <strong>Class X:</strong> 85.45%
            <br />
            <strong>Relevant coursework:</strong> Mathematics, Science, Social
            Science, English, Computer Applications, Hindi
          </>
        ),
      },
    ],
  },
  achievements: {
    display: true,
    title: "Achievements",
    items: [
      {
        title:
          "Codeforces Specialist (Rating: 1546); solved 300+ problems across LeetCode and Codeforces",
      },
      {
        title:
          "Ranked Top 5% in college coding assessment; shortlisted for elite coding batch",
      },
      {
        title:
          "1st place in Smart India Hackathon college-level shortlisting (2024) for drone-based precision farming",
      },
      {
        title:
          "Shortlisted for YUKTI Innovation Challenge 2025 for disaster response drone delivery system; represented college at IIC regional meet",
      },
      {
        title:
          "Won two technical exhibition awards (2024, 2025) for AI-powered fire detection and email spam detection",
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        name: "Introduction to Data Science",
        issuer: "Cisco Networking Academy",
        date: "2026",
      },
      {
        name: "Structured Query Language",
        issuer: "HackerRank",
        date: "2026",
      },
      {
        name: "JavaScript Algorithms and Data Structures",
        issuer: "FreeCodeCamp",
        date: "2025",
      },
      {
        name: "Programming Fundamentals using Python",
        issuer: "Infosys Springboard",
        date: "2024",
      },
    ],
  },
  coCurricular: {
    display: false,
    title: "Co-curricular",
    items: [],
  },
  interests: {
    display: false,
    title: "Interests",
    items: [],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Core CS",
        tags: [
          { name: "Data Structures & Algorithms", icon: "" },
          { name: "OOP", icon: "" },
          { name: "DBMS", icon: "" },
          { name: "Computer Networks", icon: "" },
          { name: "System Design", icon: "" },
        ],
        images: [],
      },
      {
        title: "Languages",
        tags: [
          { name: "C++", icon: "" },
          { name: "Python", icon: "" },
          { name: "JavaScript", icon: "" },
          { name: "TypeScript", icon: "" },
          { name: "SQL", icon: "" },
          { name: "Java", icon: "" },
        ],
        images: [],
      },
      {
        title: "Backend",
        tags: [
          { name: "Node.js", icon: "" },
          { name: "Express.js", icon: "" },
          { name: "FastAPI", icon: "" },
          { name: "REST APIs", icon: "" },
        ],
        images: [],
      },
      {
        title: "Frontend",
        tags: [
          { name: "HTML", icon: "" },
          { name: "CSS", icon: "" },
          { name: "React.js", icon: "" },
          { name: "Next.js", icon: "" },
          { name: "TypeScript", icon: "" },
        ],
        images: [],
      },
      {
        title: "Databases",
        tags: [
          { name: "PostgreSQL", icon: "" },
          { name: "MySQL", icon: "" },
          { name: "MongoDB", icon: "" },
          { name: "Redis", icon: "" },
        ],
        images: [],
      },
      {
        title: "Cloud",
        tags: [
          { name: "AWS EC2", icon: "" },
          { name: "AWS S3", icon: "" },
        ],
        images: [],
      },
      {
        title: "AI / ML",
        tags: [
          { name: "NumPy", icon: "" },
          { name: "Pandas", icon: "" },
          { name: "Scikit-learn", icon: "" },
          { name: "PyTorch", icon: "" },
          { name: "NLP", icon: "" },
        ],
        images: [],
      },
      {
        title: "Tools",
        tags: [
          { name: "Git", icon: "" },
          { name: "GitHub", icon: "" },
          { name: "Postman", icon: "" },
          { name: "Drizzle ORM", icon: "" },
          { name: "Linux", icon: "" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    // add your images here whatever you want to show in the gallery, or leave the array empty to hide the gallery section
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
