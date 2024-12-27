import { createClient } from "@/utils/supabase/server";

export async function ViewCounter({ slug }: { slug: string }) {
  const className = "text-xs font-mono text-gray-500";

  if (process.env.NODE_ENV === "development") {
    // Skip database interactions in development mode
    return <p className={className}>0 views (development mode)</p>;
  }

  const supabase = await createClient();

  // Call the `update_views` db function
  const { data: views, error } = await supabase.rpc("update_views", { input_slug: slug });

  if (error) {
    return <p className={className}>Error fetching views.</p>;
  }

  return <p className={className}>{views?.count || 1} views</p>;
}
