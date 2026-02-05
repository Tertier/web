"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Link,
} from "@heroui/react";

export default function HomePage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_280px_280px]">
      <section className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">
            Static documentation with a HeroUI backbone.
          </h2>
          <p className="text-lg text-default-500">
            This site is rendered from Markdown by a separate CLI, then exported
            as static HTML with the Next.js app router and HeroUI components.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button color="primary">Get started</Button>
          <Button variant="bordered">View templates</Button>
          <Link href="#" className="text-primary">
            Learn more about the pipeline
          </Link>
        </div>
        <Card className="bg-content2">
          <CardBody>
            <p className="text-sm text-default-600">
              Static build only. No runtime server required.
            </p>
          </CardBody>
        </Card>
      </section>
      <aside className="space-y-4">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-default-500">
              Status
            </h3>
            <Chip size="sm" color="success" variant="flat">
              Static Export
            </Chip>
          </CardHeader>
          <CardBody className="pt-0">
            <p className="text-sm text-default-600">
              All UI is built with HeroUI primitives and Tailwind theming.
            </p>
          </CardBody>
        </Card>
      </aside>
      <aside className="space-y-4">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-default-500">
              Pipeline
            </h3>
            <Chip size="sm" color="primary" variant="flat">
              Ready
            </Chip>
          </CardHeader>
          <CardBody className="pt-0">
            <p className="text-sm text-default-600">
              Content stays in Markdown while the UI stays theme-aware.
            </p>
          </CardBody>
        </Card>
      </aside>
    </div>
  );
}
