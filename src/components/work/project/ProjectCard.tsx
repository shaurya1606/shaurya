"use client";

import { Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import {
  ProjectCTA,
  ProjectContributors,
  ProjectMedia,
  ProjectTags,
} from "@/components/work/project";
import type {
  ProjectCTAConfig,
  ProjectContributor,
  ProjectMediaItem,
} from "@/types";
import React from "react";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  title: string;
  typeLabel?: string;
  media?: ProjectMediaItem[];
  contributors?: ProjectContributor[];
  summary?: string;
  bullets?: string[];
  tags?: string[];
  cta?: ProjectCTAConfig;
  liveHref?: string;
  githubHref?: string;
  content?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  priority,
  title,
  typeLabel,
  media = [],
  contributors = [],
  summary,
  bullets = [],
  tags = [],
  cta,
  liveHref,
  githubHref,
  content,
}) => {
  const bulletList = bullets.filter(Boolean).slice(0, 5);
  const summaryText = summary?.trim();

  const caseStudyEnabled = cta?.caseStudy ?? Boolean(content?.trim());
  const liveEnabled = (cta?.live ?? Boolean(liveHref)) && Boolean(liveHref);
  const githubEnabled =
    (cta?.github ?? Boolean(githubHref)) && Boolean(githubHref);

  return (
    <Column
      fillWidth
      gap="16"
      background="surface"
      border="neutral-alpha-medium"
      padding="24"
      style={{ borderRadius: "24px" }}
    >
      <Grid
        columns={media.length ? "2" : "1"}
        s={{ columns: 1 }}
        gap="16"
        fillWidth
      >
        {media.length > 0 && (
          <Column gap="12" fillWidth>
            <ProjectMedia media={media} title={title} priority={priority} />
            {tags.length > 0 && <ProjectTags tags={tags} />}
          </Column>
        )}

        <Column gap="12" fillWidth>
          <Row horizontal="between" vertical="center" gap="8" wrap>
            <Heading as="h3" wrap="balance" variant="heading-strong-l">
              {title}
            </Heading>
            {typeLabel && (
              <Text variant="label-default-s" onBackground="neutral-weak">
                {typeLabel}
              </Text>
            )}
          </Row>

          {contributors.length > 0 && (
            <ProjectContributors contributors={contributors} />
          )}

          {summaryText && (
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                maxWidth: "64ch",
              }}
            >
              {summaryText}
            </Text>
          )}

          {bulletList.length > 0 && (
            <Column gap="8">
              {bulletList.map((item, index) => (
                <Text
                  key={`${item}-${index}`}
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  • {item}
                </Text>
              ))}
            </Column>
          )}

          {(caseStudyEnabled || liveEnabled || githubEnabled) && (
            <ProjectCTA
              cta={{
                caseStudy: caseStudyEnabled,
                live: liveEnabled,
                github: githubEnabled,
              }}
              caseStudyHref={caseStudyEnabled ? href : undefined}
              liveHref={liveEnabled ? liveHref : undefined}
              githubHref={githubEnabled ? githubHref : undefined}
            />
          )}
        </Column>
      </Grid>
    </Column>
  );
};
