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
  role: "Undergraduate Student",
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
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Shaurya Srivastava | Software Engineer",
  description:
    "Portfolio showcasing my work in AI, backend systems, and scalable applications",
  headline: <>Building scalable AI-driven systems</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Project</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          LetsKraack
        </Text>
      </Row>
    ),
    href: "https://letskraack.dev",
  },
  subline: (
    <>
      I'm Shaurya, a final-year Computer Science student focused on{" "}
      <Text as="span" size="xl" weight="strong">
        AI + Backend Engineering
      </Text>
      . I build scalable systems, LLM-powered applications, and
      performance-focused full-stack products.
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
    title: "Introduction",
    description: (
      <>
        I'm Shaurya Srivastava, a final-year Computer Science student focused on
        building scalable backend systems and AI-powered applications. My work
        spans LLM-driven platforms, computer vision pipelines, and full-stack
        products designed with performance and system-level thinking in mind. I
        enjoy solving complex engineering problems and turning them into
        production-ready solutions.
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
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Pranveer Singh Institute of Technology, Kanpur",
        description: (
          <>
            B.Tech, Computer Science & Engineering (Cybersecurity) (2023 – 2027)
            <br />
            CGPA: 7.64 <br /> Percentage: 75.7%
          </>
        ),
      },
      {
        name: "Maharshi Patanjali Vidya Mandir, Prayagraj",
        description: (
          <>
            Class XII: 83.2% (2023)
            <br />
            Class X: 85.45% (2021)
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: (
          <>
            Strong foundation in problem solving, data structures, and
            system-level programming.
          </>
        ),
        tags: [
          { name: "C++", icon: "" },
          { name: "Python", icon: "" },
          { name: "JavaScript", icon: "" },
          { name: "TypeScript", icon: "" },
          { name: "Java", icon: "" },
        ],
        images: [],
      },
      {
        title: "Frontend Development",
        description: (
          <>
            Building responsive and performant UI using modern React-based
            frameworks.
          </>
        ),
        tags: [
          { name: "React", icon: "" },
          { name: "Next.js", icon: "" },
          { name: "TypeScript", icon: "" },
          { name: "Tailwind", icon: "" },
        ],
        images: [],
      },
      {
        title: "Backend & APIs",
        description: (
          <>
            Designing scalable REST APIs and microservice-oriented backend
            systems.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "" },
          { name: "Express", icon: "" },
          { name: "FastAPI", icon: "" },
          { name: "REST", icon: "" },
        ],
        images: [],
      },
      {
        title: "Databases",
        description: (
          <>
            Working with relational and NoSQL databases for production-ready
            applications.
          </>
        ),
        tags: [
          { name: "PostgreSQL", icon: "" },
          { name: "MySQL", icon: "" },
          { name: "MongoDB", icon: "" },
        ],
        images: [],
      },
      {
        title: "AI / Machine Learning",
        description: (
          <>
            Developing LLM-powered apps, NLP pipelines, and computer vision
            systems.
          </>
        ),
        tags: [
          { name: "TensorFlow", icon: "" },
          { name: "Scikit-learn", icon: "" },
          { name: "NumPy", icon: "" },
          { name: "Pandas", icon: "" },
          { name: "LLMs", icon: "" },
        ],
        images: [],
      },
      {
        title: "Core Computer Science",
        description: (
          <>
            Strong understanding of fundamentals required for scalable system
            design.
          </>
        ),
        tags: [
          { name: "DSA", icon: "" },
          { name: "OOP", icon: "" },
          { name: "DBMS", icon: "" },
          { name: "System Design", icon: "" },
          { name: "Computer Networks", icon: "" },
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
