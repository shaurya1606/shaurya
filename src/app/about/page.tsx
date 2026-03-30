import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";
import Link from "next/link";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    {
      title: about.projects?.title ?? "Projects",
      display: Boolean(about.projects?.display),
      items: about.projects?.items.map((item) => item.name) ?? [],
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.achievements?.title ?? "Achievements",
      display: Boolean(about.achievements?.display),
      items: about.achievements?.items.map((item) => item.title) ?? [],
    },
    {
      title: about.certifications?.title ?? "Certifications",
      display: Boolean(about.certifications?.display),
      items: about.certifications?.items.map((item) => item.name) ?? [],
    },
    {
      title: about.coCurricular?.title ?? "Co-curricular",
      display: Boolean(about.coCurricular?.display),
      items: about.coCurricular?.items.map((item) => item.title) ?? [],
    },
    {
      title: about.interests?.title ?? "Interests",
      display: Boolean(about.interests?.display),
      items: about.interests?.items ?? [],
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon
                  paddingLeft="12"
                  name="calendar"
                  onBackground="brand-weak"
                />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                  .filter((item) => item.essential)
                  .map(
                    (item) =>
                      item.link && (
                        <React.Fragment key={item.name}>
                          <Row s={{ hide: true }}>
                            <Button
                              key={item.name}
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              weight="default"
                              variant="secondary"
                            />
                          </Row>
                          <Row hide s={{ hide: false }}>
                            <IconButton
                              size="l"
                              key={`${item.name}-icon`}
                              href={item.link}
                              icon={item.icon}
                              variant="secondary"
                            />
                          </Row>
                        </React.Fragment>
                      ),
                  )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading
                as="h2"
                id={about.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column
                    key={`${experience.company}-${experience.role}-${index}`}
                    fillWidth
                  >
                    <Row
                      fillWidth
                      horizontal="between"
                      vertical="end"
                      marginBottom="4"
                    >
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text
                      variant="body-default-s"
                      onBackground="brand-weak"
                      marginBottom="m"
                    >
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row
                        fillWidth
                        paddingTop="m"
                        paddingLeft="40"
                        gap="12"
                        wrap
                      >
                        {experience.images.map((image, index) => (
                          <Row
                            key={`${experience.company}-${image.src}-${index}`}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill) => (
                  <Column key={`${skill.title}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    {skill.description && (
                      <Text
                        variant="body-default-m"
                        onBackground="neutral-weak"
                      >
                        {skill.description}
                      </Text>
                    )}
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag
                            key={`${skill.title}-${tag.name}-${tagIndex}`}
                            size="l"
                            prefixIcon={tag.icon}
                          >
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={`${skill.title}-${image.src}-${index}`}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.projects?.display && about.projects.items.length > 0 && (
            <>
              <Heading
                as="h2"
                id={about.projects.title}
                variant="display-strong-s"
                marginBottom="m"
                marginTop="40"
              >
                {about.projects.title}
              </Heading>
              <Column fillWidth gap="24" marginBottom="40">
                {about.projects.items.map((project) => (
                  <Column
                    key={project.slug}
                    data-border="rounded"
                    border="neutral-alpha-medium"
                    padding="20"
                    gap="12"
                    background="surface"
                  >
                    <Row horizontal="between" vertical="center" wrap gap="12">
                      <Heading
                        as="h3"
                        id={project.name}
                        variant="heading-strong-l"
                      >
                        <Link href={`/work/${project.slug}`}>
                          {project.name}
                        </Link>
                      </Heading>
                      {project.timeframe && (
                        <Tag size="m" onBackground="brand-weak">
                          {project.timeframe}
                        </Tag>
                      )}
                    </Row>
                    {project.techStack && (
                      <Text
                        variant="body-default-m"
                        onBackground="neutral-weak"
                      >
                        {project.techStack}
                      </Text>
                    )}
                    {project.highlights && project.highlights.length > 0 && (
                      <Column as="ul" gap="8">
                        {project.highlights.map((point, idx) => (
                          <Text as="li" key={`${project.slug}-point-${idx}`}>
                            {point}
                          </Text>
                        ))}
                      </Column>
                    )}
                    {(project.links?.github || project.links?.live) && (
                      <Row gap="12" wrap paddingTop="4">
                        {project.links.github && (
                          <Button
                            size="s"
                            variant="secondary"
                            prefixIcon="github"
                            href={project.links.github}
                          >
                            GitHub
                          </Button>
                        )}
                        {project.links.live && (
                          <Button
                            size="s"
                            variant="secondary"
                            prefixIcon="external"
                            href={project.links.live}
                          >
                            Live
                          </Button>
                        )}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading
                as="h2"
                id={about.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution) => (
                  <Column key={institution.name} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                    >
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.achievements?.display && (
            <>
              <Heading
                as="h2"
                id={about.achievements.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.achievements.title}
              </Heading>
              <Column as="ul" fillWidth gap="m" marginBottom="40">
                {about.achievements.items.map((item, index) => (
                  <Text as="li" key={`${item.title}-${index}`}>
                    {item.title}
                  </Text>
                ))}
              </Column>
            </>
          )}

          {about.certifications?.display && (
            <>
              <Heading
                as="h2"
                id={about.certifications.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.certifications.title}
              </Heading>
              <Column fillWidth gap="m" marginBottom="40">
                {about.certifications.items.map((cert, index) => (
                  <Column key={`${cert.name}-${index}`} gap="4">
                    <Text variant="heading-strong-m">{cert.name}</Text>
                    <Row gap="8" vertical="center" wrap>
                      <Text
                        variant="body-default-m"
                        onBackground="neutral-weak"
                      >
                        {cert.issuer}
                      </Text>
                      {cert.date && <Tag size="m">{cert.date}</Tag>}
                      {cert.link && <Link href={cert.link}>Verify</Link>}
                    </Row>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.coCurricular?.display && (
            <>
              <Heading
                as="h2"
                id={about.coCurricular.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.coCurricular.title}
              </Heading>
              <Column as="ul" fillWidth gap="m" marginBottom="40">
                {about.coCurricular.items.map((item, index) => (
                  <Text as="li" key={`${item.title}-${index}`}>
                    {item.title}
                  </Text>
                ))}
              </Column>
            </>
          )}

          {about.interests?.display && (
            <>
              <Heading
                as="h2"
                id={about.interests.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.interests.title}
              </Heading>
              <Row wrap gap="8" marginBottom="40">
                {about.interests.items.map((interest, index) => (
                  <Tag key={`${interest}-${index}`} size="l">
                    {interest}
                  </Tag>
                ))}
              </Row>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
