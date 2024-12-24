import { promises as fs } from "fs";
import path from "path";

async function getWritingSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === "page.mdx")
    .map((entry) => {
      const relativePath = path.relative(dir, path.join(entry.parentPath, entry.name));
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"));
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
