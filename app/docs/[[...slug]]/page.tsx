import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllMarkdownSlugs, getMarkdownBySlug } from "@/lib/markdown";
import DocPageClient from "./DocPageClient";

type PageProps = {
  params: {
    slug?: string[];
  };
};

export async function generateStaticParams() {
  const slugs = await getAllMarkdownSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slugParts = params.slug ?? [];
  const markdown = await getMarkdownBySlug(slugParts);
  if (!markdown) {
    return {};
  }

  const title =
    typeof markdown.frontmatter.title === "string"
      ? markdown.frontmatter.title
      : "Docs";
  const description =
    typeof markdown.frontmatter.description === "string"
      ? markdown.frontmatter.description
      : undefined;

  return {
    title,
    description,
  };
}

export default async function DocPage({ params }: PageProps) {
  const slugParts = params.slug ?? [];
  const markdown = await getMarkdownBySlug(slugParts);

  if (!markdown) {
    notFound();
  }

  const title =
    typeof markdown.frontmatter.title === "string"
      ? markdown.frontmatter.title
      : "Docs";

  return <DocPageClient title={title} html={markdown.html} />;
}
