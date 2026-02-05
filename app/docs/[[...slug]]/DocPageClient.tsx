"use client";

import { Card, CardBody, CardHeader, Divider, Link } from "@heroui/react";

type DocPageClientProps = {
  title: string;
  html: string;
};

export default function DocPageClient({ title, html }: DocPageClientProps) {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-default-500">
            Documentation
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="text-sm text-default-500">
            Rendered from <Link href="/docs">/content</Link> markdown.
          </p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div
            className="markdown-body prose prose-slate dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </CardBody>
      </Card>
    </div>
  );
}
