import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

export type MarkdownContent = {
  slug: string[];
  content: string;
  html: string;
  frontmatter: Record<string, unknown>;
};

const CONTENT_DIR = process.env.DOCS_CONTENT_DIR
  ? path.resolve(process.env.DOCS_CONTENT_DIR)
  : path.join(process.cwd(), "content");

async function fileExists(filePath: string) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectMarkdownFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(entryPath)));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(entryPath);
    }
  }

  return files;
}

export async function getAllMarkdownSlugs(): Promise<string[][]> {
  const contentDirExists = await fileExists(CONTENT_DIR);
  if (!contentDirExists) {
    return [];
  }

  const files = await collectMarkdownFiles(CONTENT_DIR);

  return files.map((filePath) => {
    const relativePath = path.relative(CONTENT_DIR, filePath);
    const withoutExt = relativePath.replace(/\.md$/, "");
    const parts = withoutExt.split(path.sep).filter(Boolean);
    if (parts.length === 1 && parts[0] === "index") {
      return [];
    }
    if (parts[parts.length - 1] === "index") {
      parts.pop();
    }
    return parts;
  });
}

export async function getMarkdownBySlug(
  slugParts: string[],
): Promise<MarkdownContent | null> {
  const directPath =
    slugParts.length === 0
      ? null
      : path.join(CONTENT_DIR, ...slugParts) + ".md";
  const indexPath = path.join(CONTENT_DIR, ...slugParts, "index.md");

  let filePath: string | null = null;
  if (directPath && (await fileExists(directPath))) {
    filePath = directPath;
  } else if (await fileExists(indexPath)) {
    filePath = indexPath;
  }

  if (!filePath) {
    return null;
  }

  const raw = await fs.readFile(filePath, "utf-8");
  const parsed = matter(raw);
  const processed = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(parsed.content);

  return {
    slug: slugParts,
    content: parsed.content,
    html: processed.toString(),
    frontmatter: parsed.data ?? {},
  };
}
