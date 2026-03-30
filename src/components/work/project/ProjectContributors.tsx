import { Avatar, Row } from "@once-ui-system/core";
import type { ProjectContributor } from "@/types";
import React from "react";

interface ProjectContributorsProps extends React.ComponentProps<typeof Row> {
  contributors?: ProjectContributor[];
}

export const ProjectContributors: React.FC<ProjectContributorsProps> = ({
  contributors = [],
  ...rest
}) => {
  if (!contributors.length) return null;

  return (
    <Row gap="8" vertical="center" {...rest}>
      {contributors.map((contributor, index) => (
        <Avatar
          key={`${contributor.name}-${index}`}
          src={contributor.avatar}
          size="s"
          style={{ marginLeft: index === 0 ? 0 : -8 }}
          title={contributor.name}
          aria-label={contributor.name}
        />
      ))}
    </Row>
  );
};
