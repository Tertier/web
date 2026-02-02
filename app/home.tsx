"use client";

import {
  Button,
  Flash,
  Heading,
  Label,
  Link,
  PageLayout,
  Stack,
  Text,
} from "@primer/react";
import { MarkGithubIcon } from "@primer/octicons-react";

export default function Home() {
  return (
    <PageLayout>
      <PageLayout.Header>
        <Stack direction="horizontal" align="center" gap="condensed">
          <MarkGithubIcon size={24} />
          <Heading as="h1" variant="medium">
            Tertier Docs
          </Heading>
        </Stack>
      </PageLayout.Header>
      <PageLayout.Content>
        <Stack gap="normal">
          <Heading as="h2" variant="large">
            Static documentation that feels like GitHub.
          </Heading>
          <Text size="large">
            This site is rendered from Markdown by a separate CLI, then exported
            as static HTML with the Next.js app router and GitHub Primer
            components.
          </Text>
          <Stack
            direction="horizontal"
            align="center"
            gap="normal"
            wrap="wrap"
          >
            <Button variant="primary">Get started</Button>
            <Button variant="default">View templates</Button>
            <Link href="#">Learn more about the pipeline</Link>
          </Stack>
          <Flash variant="default">
            Static build only. No runtime server required.
          </Flash>
        </Stack>
      </PageLayout.Content>
      <PageLayout.Pane position="end">
        <Stack gap="condensed">
          <Heading as="h3" variant="small">
            Status
          </Heading>
          <Label variant="accent">Static Export</Label>
          <Text size="small">
            All UI uses GitHub Primer as-is to match the GitHub design system.
          </Text>
        </Stack>
      </PageLayout.Pane>
    </PageLayout>
  );
}
