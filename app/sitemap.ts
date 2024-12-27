import { promises as fs } from "fs";
import path from "path";

async function getWritingSlugs(dir: string) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const slugs: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const subSlugs = await getWritingSlugs(fullPath);
      slugs.push(...subSlugs);
    } else if (entry.isFile() && entry.name === "page.mdx") {
      const relativePath = path.relative(process.cwd(), fullPath);
      const slug = path.dirname(relativePath).replace(/\\/g, "/");
      slugs.push(slug);
    }
  }

  return slugs;
}

export default async function sitemap() {
  const writingDirectory = path.join(process.cwd(), "app", "writing");
  const slugs = await getWritingSlugs(writingDirectory);

  const notes = slugs.map((slug) => ({
    url: `https://obnol.com/writing/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  return notes;
}
