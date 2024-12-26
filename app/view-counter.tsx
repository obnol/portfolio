import { createClient } from "@/utils/supabase/server";

export async function ViewCounter({ slug }: { slug: string }) {
  const className = "text-xs font-mono text-gray-500";

  if (process.env.NODE_ENV === "development") {
    // Skip database interactions in development mode
    console.log(`Development mode: Skipping view count update for slug "${slug}"`);
    return <p className={className}>0 views (development mode)</p>;
  }

  const supabase = await createClient();

  // Fetch the current view count
  const { data: views, error } = await supabase.from("views").select("count").eq("slug", slug).maybeSingle();

  if (error) {
    console.error("Error fetching views:", error.message);
    return <p className={className}>Error fetching views.</p>;
  }

  // Increment the view count
  const { error: updateError } = await supabase.from("views").upsert({ slug, count: (views?.count || 0) + 1 }, { onConflict: "slug" });

  if (updateError) {
    console.error("Error incrementing views:", updateError.message);
    return <p className={className}>Error incrementing views.</p>;
  }

  return <p className={className}>{views?.count || 0} views</p>;
}
