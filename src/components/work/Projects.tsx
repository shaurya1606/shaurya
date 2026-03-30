import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import type { ProjectMediaItem, ProjectContributor } from "@/types";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  featuredSlugs?: string[];
}

export function Projects({ range, exclude, featuredSlugs }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const featuredProjects = (featuredSlugs || [])
    .map((slug) => sortedProjects.find((post) => post.slug === slug))
    .filter(Boolean) as typeof sortedProjects;

  const displayedProjects = featuredProjects.length
    ? featuredProjects
    : range
      ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
      : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => {
        const media: ProjectMediaItem[] =
          (Array.isArray(post.metadata.media)
            ? (post.metadata.media as ProjectMediaItem[]).filter(
                (item) => item.type && item.src,
              )
            : undefined) ||
          (post.metadata.images || []).map((src) => ({
            type: "image",
            src,
            alt: post.metadata.title,
          }));

        const contributors =
          post.metadata.contributors ||
          post.metadata.team?.map(
            (member) =>
              ({
                name: member.name,
                avatar: member.avatar,
                link: member.linkedIn,
              }) as ProjectContributor,
          ) ||
          [];

        const tags = post.metadata.tags || [];

        return (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`/work/${post.slug}`}
            title={post.metadata.title}
            typeLabel={post.metadata.subtitle}
            media={media}
            contributors={contributors}
            summary={post.metadata.summary}
            bullets={post.metadata.bullets || []}
            tags={tags}
            cta={post.metadata.cta}
            liveHref={post.metadata.links?.live}
            githubHref={post.metadata.links?.github}
            content={post.content}
          />
        );
      })}
    </Column>
  );
}
