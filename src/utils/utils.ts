import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn?: string;
};

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

type Contributor = {
  name: string;
  avatar: string;
  link?: string;
};

type CTAConfig = {
  caseStudy?: boolean;
  live?: boolean;
  github?: boolean;
};

type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  startDate?: string;
  endDate?: string;
  summary: string;
  images?: string[];
  media?: MediaItem[];
  tags?: string[];
  team: Team[];
  contributors?: Contributor[];
  bullets?: string[];
  cta?: CTAConfig;
  links?: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt,
    startDate: data.startDate,
    endDate: data.endDate,
    summary: data.summary || "",
    images: data.images || [],
    media: data.media,
    tags: data.tags,
    team: data.team || data.contributors || [],
    contributors: data.contributors,
    bullets: data.bullets,
    cta: data.cta,
    links: data.links,
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}
