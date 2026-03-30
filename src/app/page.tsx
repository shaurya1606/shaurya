import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  IconButton,
} from "@once-ui-system/core";
import {
  home,
  about,
  person,
  baseURL,
  routes,
  work,
  blog,
  social,
} from "@/resources";
import { Mailchimp, PostsCarousel } from "@/components";
import { Projects } from "@/components/work/Projects";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  const blogHeading = home.blogSection?.title ?? "Latest from the blog";
  const blogCount = home.blogSection?.count ?? 3;
  const allBlogs = getPosts(["src", "app", "blog", "posts"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );
  const blogs = allBlogs.slice(0, blogCount);
  const totalBlogs = allBlogs.length;
  const blogCtaLabel = home.blogSection?.ctaLabel ?? "View more";
  const totalProjects = getPosts(["src", "app", "work", "projects"]).length;
  const projectsHref = work.path ?? "/work";
  const blogHref = blog.path ?? "/blog";

  const workHeading = home.workSection?.title ?? "Work";
  const featuredWork = home.workSection?.featuredSlugs;

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx
            translateY="4"
            fillWidth
            horizontal="center"
            paddingBottom="16"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="center"
            paddingBottom="32"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx
            paddingTop="12"
            delay={0.4}
            horizontal="center"
            paddingLeft="12"
          >
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
        <RevealFx
          translateY="2"
          delay={0.05}
          fillWidth
          horizontal="center"
          paddingBottom="12"
        >
          <Row gap="16">
            {social.map(
              (item) =>
                item.link && (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    tooltip={item.name}
                    size="s"
                    variant="ghost"
                  />
                ),
            )}
          </Row>
        </RevealFx>
      </Column>
      <Line />
      <RevealFx translateY="16" delay={0.6}>
        <Column gap="12" fillWidth>
          <Heading
            as="h2"
            variant="display-strong-xs"
            wrap="balance"
            align="center"
          >
            {workHeading}
          </Heading>
          <Projects featuredSlugs={featuredWork} />
          {totalProjects > 3 && (
            <Row horizontal="center">
              <Button
                href={projectsHref}
                variant="primary"
                size="m"
                weight="default"
                arrowIcon
              >
                View all work
              </Button>
            </Row>
          )}
        </Column>
      </RevealFx>
      <Line />
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <PostsCarousel
            posts={blogs}
            heading={blogHeading}
            ctaLabel={blogCtaLabel}
            ctaHref={blogHref}
            showCta={totalBlogs > 3}
          />
        </Column>
      )}
      {routes["/blog"] && <Line />}
      <Mailchimp />
      <Line />
    </Column>
  );
}
