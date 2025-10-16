import BlogHero from "@/components/BlogHero";
import BlogFilters from "@/components/BlogFilters";
import BlogGrid from "@/components/BlogGrid";

export default function BlogPage() {
  return (
    <div className="bg-white">
      <BlogHero />
      <BlogFilters />
      <BlogGrid />
    </div>
  );
}
