import { Button, Row } from "@once-ui-system/core";
import type { ProjectCTAConfig } from "@/types";
import React from "react";

interface ProjectCTAProps extends React.ComponentProps<typeof Row> {
  cta?: ProjectCTAConfig;
  caseStudyHref?: string;
  liveHref?: string;
  githubHref?: string;
}

export const ProjectCTA: React.FC<ProjectCTAProps> = ({
  cta,
  caseStudyHref,
  liveHref,
  githubHref,
  ...rest
}) => {
  const showCaseStudy =
    Boolean(caseStudyHref) && (cta?.caseStudy ?? Boolean(caseStudyHref));
  const showLive = Boolean(liveHref) && (cta?.live ?? Boolean(liveHref));
  const showGithub =
    Boolean(githubHref) && (cta?.github ?? Boolean(githubHref));

  if (!showCaseStudy && !showLive && !showGithub) return null;

  return (
    <Row gap="8" wrap {...rest}>
      {showCaseStudy && (
        <Button
          href={caseStudyHref}
          variant="primary"
          size="m"
          weight="strong"
          arrowIcon
          aria-label="View case study"
        >
          View Case Study
        </Button>
      )}
      {showLive && (
        <Button
          href={liveHref}
          variant="secondary"
          size="m"
          weight="default"
          aria-label="Open live demo"
          suffixIcon="arrowUpRightFromSquare"
        >
          Live Demo
        </Button>
      )}
      {showGithub && (
        <Button
          href={githubHref}
          variant="secondary"
          size="m"
          weight="default"
          aria-label="Open GitHub repository"
          prefixIcon="github"
        >
          GitHub
        </Button>
      )}
    </Row>
  );
};
