import { createClient } from "@/utils/supabase/server";

export async function ViewCounter({ slug }: { slug: string }) {
  const className = "text-xs font-mono text-gray-500";

  if (process.env.NODE_ENV === "development") {
    // Skip database interactions in development mode
    return <p className={className}>0 views (development mode)</p>;
  }

  const supabase = await createClient();

  // Fetch the current view count
  const { data: views, error } = await supabase.from("views").select("count").eq("slug", slug).maybeSingle();

  if (error) {
    return <p className={className}>Error fetching views.</p>;
  }

  // Increment the view count
  const { error: updateError } = await supabase.from("views").upsert({ slug, count: (views?.count || 0) + 1 }, { onConflict: "slug" });

  if (updateError) {
    return <p className={className}>Error incrementing views.</p>;
  }

  return <p className={className}>{views?.count || 0} views</p>;
}
