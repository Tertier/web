"use client";

import { MarkGithubIcon } from "@primer/octicons-react";
import { Heading, Link, PageLayout, Stack, Text } from "@primer/react";

type DocPageClientProps = {
  title: string;
  html: string;
};

export default function DocPageClient({ title, html }: DocPageClientProps) {
  return (
    <PageLayout>
      <PageLayout.Header>
        <Stack direction="horizontal" align="center" gap="condensed">
          <MarkGithubIcon size={24} />
          <Heading as="h1" variant="medium">
            {title}
          </Heading>
        </Stack>
      </PageLayout.Header>
      <PageLayout.Content>
        <Stack gap="normal">
          <Text size="small">
            Rendered from <Link href="/docs">/content</Link> markdown.
          </Text>
          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
        </Stack>
      </PageLayout.Content>
    </PageLayout>
  );
}
