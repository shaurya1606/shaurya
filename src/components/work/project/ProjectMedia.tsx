"use client";

import { Carousel, Column } from "@once-ui-system/core";
import type { ProjectMediaItem } from "@/types";
import React from "react";

interface ProjectMediaProps extends React.ComponentProps<typeof Column> {
  media?: ProjectMediaItem[];
  title: string;
  priority?: boolean;
}

export const ProjectMedia: React.FC<ProjectMediaProps> = ({
  media = [],
  title,
  priority,
  ...rest
}) => {
  if (!media.length) return null;

  const items = media.map((item, idx) => {
    if (item.type === "video") {
      return {
        slide: (
          <video
            controls
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            aria-label={item.alt ?? title}
          >
            <source src={item.src} />
          </video>
        ),
        alt: item.alt ?? title,
      } as any;
    }

    return {
      slide: item.src,
      alt: item.alt ?? title,
      loading: priority && idx === 0 ? "eager" : "lazy",
    } as const;
  });

  return (
    <Column
      fillWidth
      {...rest}
      style={{
        aspectRatio: "16 / 9",
        borderRadius: "24px",
        overflow: "hidden",
        ...(rest.style || {}),
      }}
    >
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        items={items as any}
        priority={priority}
      />
    </Column>
  );
};
