import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  Column,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
  Avatar,
  Line,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";
import { Projects } from "@/components/work/Projects";
import { ProjectTags } from "@/components/work/project";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image:
      post.metadata.images?.[0] ||
      `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  let post = getPosts(["src", "app", "work", "projects"]).find(
    (post) => post.slug === slugPath,
  );

  if (!post) {
    notFound();
  }

  const heroImage =
    post.metadata.images?.[0] ||
    post.metadata.media?.find((item) => item.type === "image")?.src ||
    "";

  const publishedLabel = post.metadata.publishedAt
    ? `Published: ${formatDate(post.metadata.publishedAt)}`
    : undefined;

  const timeframeLabel =
    post.metadata.startDate && post.metadata.endDate
      ? `Timeline: ${formatDate(post.metadata.startDate)} – ${formatDate(post.metadata.endDate)}`
      : post.metadata.startDate
        ? `Timeline: ${formatDate(post.metadata.startDate)}`
        : undefined;

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.images?.[0] ||
          `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href="/work">
          <Text variant="label-strong-m">Projects</Text>
        </SmartLink>
        <Heading variant="display-strong-m" align="center">
          {post.metadata.title}
        </Heading>
        {(publishedLabel || timeframeLabel) && (
          <Column gap="4" align="center" marginBottom="4">
            {publishedLabel && (
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {publishedLabel}
              </Text>
            )}
            {timeframeLabel && (
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {timeframeLabel}
              </Text>
            )}
          </Column>
        )}
        {post.metadata.tags?.length ? (
          <Column gap="8" align="center">
            <Text variant="label-strong-m">Tech stack</Text>
            <ProjectTags tags={post.metadata.tags} />
          </Column>
        ) : null}
        {post.metadata.team?.length ? (
          <Column gap="8" align="center">
            <Text variant="label-strong-m">Contributors</Text>
            <Row gap="12" wrap horizontal="center">
              {post.metadata.team.map((member, idx) => (
                <Row key={`${member.name}-${idx}`} gap="8" vertical="center">
                  {member.avatar && (
                    <Avatar
                      src={member.avatar}
                      size="s"
                      aria-label={member.name}
                    />
                  )}
                  <Text variant="label-default-s" onBackground="brand-weak">
                    <SmartLink href={member.linkedIn}>{member.name}</SmartLink>
                  </Text>
                </Row>
              ))}
            </Row>
          </Column>
        ) : null}
      </Column>
      <Row marginBottom="16" />
      {heroImage && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt={post.metadata.title}
          src={heroImage}
        />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <CustomMDX source={post.content} />
      </Column>
      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          Related projects
        </Heading>
        <Projects exclude={[post.slug]} range={[2]} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
