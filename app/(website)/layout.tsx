"use client";

import {
  Button,
  Flash,
  Heading,
  Label,
  Link,
  PageHeader,
  PageLayout,
  Stack,
  Text,
} from "@primer/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout>
      <PageLayout.Header>
        <PageHeader hasBorder>
          <PageHeader.TitleArea>
            <PageHeader.LeadingVisual>
              🐶
            </PageHeader.LeadingVisual>
            <PageHeader.Title>
              Tertier
            </PageHeader.Title>
            <PageHeader.TrailingVisual>
              <Label>Beta</Label>
            </PageHeader.TrailingVisual>
          </PageHeader.TitleArea>
        </PageHeader>
      </PageLayout.Header>
      {children}
    </PageLayout>
  );
}
