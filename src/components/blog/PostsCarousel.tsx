"use client";

import React, { useRef } from "react";
import { Column, Row, Heading, Button } from "@once-ui-system/core";
import Post from "./Post";

type PostItem = {
  slug: string;
  metadata: any;
  content?: string;
};

interface PostsCarouselProps {
  posts: PostItem[];
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  showCta?: boolean;
}

export function PostsCarousel({
  posts,
  heading,
  ctaLabel,
  ctaHref,
  showCta = true,
}: PostsCarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const firstCard = rail.firstElementChild as HTMLElement | null;
    const step = firstCard?.clientWidth ? firstCard.clientWidth + 16 : 320;
    rail.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  if (!posts.length) return null;

  return (
    <Column
      fillWidth
      gap="16"
      padding="12"
      style={{ background: "var(--overlay)", borderRadius: "24px" }}
    >
      <Column fillWidth align="center" gap="8">
        <Heading
          as="h2"
          variant="display-strong-s"
          wrap="balance"
          align="center"
        >
          {heading}
        </Heading>
      </Column>

      <Row
        ref={railRef}
        gap="16"
        fillWidth
        style={{
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          padding: "8px 4px 12px",
        }}
      >
        {posts.map((post) => (
          <Column
            key={post.slug}
            style={{
              minWidth: "320px",
              flex: "0 0 320px",
              scrollSnapAlign: "start",
              background: "var(--surface)",
              border: "1px solid var(--neutral-alpha-medium)",
              borderRadius: "20px",
              padding: "8px",
            }}
          >
            <Post post={post} thumbnail direction="column" />
          </Column>
        ))}
      </Row>

      <Row horizontal="center" paddingTop="8">
        <Row gap="8" vertical="center" horizontal="center">
          <Button
            size="s"
            variant="tertiary"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous posts"
          >
            {"<"}
          </Button>
          <Button
            size="s"
            variant="tertiary"
            onClick={() => scrollByCard(1)}
            aria-label="Next posts"
          >
            {">"}
          </Button>
        </Row>
      </Row>
      {showCta && (
        <Row horizontal="center">
          <Button
            href={ctaHref}
            variant="primary"
            size="m"
            weight="default"
            arrowIcon
          >
            {ctaLabel}
          </Button>
        </Row>
      )}
    </Column>
  );
}
