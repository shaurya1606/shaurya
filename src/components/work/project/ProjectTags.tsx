import { Row, Text } from "@once-ui-system/core";
import React from "react";

interface ProjectTagsProps extends React.ComponentProps<typeof Row> {
  tags?: string[];
}

export const ProjectTags: React.FC<ProjectTagsProps> = ({
  tags = [],
  ...rest
}) => {
  if (!tags.length) return null;

  return (
    <Row gap="8" wrap {...rest}>
      {tags.map((tag) => (
        <Text
          key={tag}
          variant="label-default-s"
          onBackground="neutral-weak"
          paddingX="8"
          paddingY="4"
          style={{
            borderRadius: "999px",
            border: "1px solid var(--neutral-alpha-medium)",
            background: "var(--surface)",
          }}
        >
          {tag}
        </Text>
      ))}
    </Row>
  );
};
