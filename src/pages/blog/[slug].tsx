import Head from "next/head";
import type { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";

// Helper: Formats a WordPress date string (e.g., "2024-08-12T10:00:00")
// into a human-readable form like "August 12, 2024" using the en-US locale.
function formatDate(dateString: string): string {
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return dateString;
  }
}

type WPPost = {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt?: { rendered: string };
  _embedded?: any;
};

type Props = {
  post: WPPost;
  category: string | null;
  featuredImage: string | null;
  firstParagraph: string | null;
  learnBullets: string[];
  nextPosts: WPPost[];
};

export default function BlogPostPage({ post, category, featuredImage, firstParagraph, learnBullets, nextPosts }: Props) {
  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{stripHtml(post.title.rendered)} | Blog</title>
        <meta name="description" content={stripHtml(post.excerpt?.rendered || post.title.rendered)} />
        <meta property="og:title" content={stripHtml(post.title.rendered)} />
        <meta property="og:type" content="article" />
      </Head>

      <main className="min-h-screen bg-white">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-6">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-700">← Back to Blog</Link>
          </div>

          {/* Featured image */}
          <div className="w-full">
            <Image
              src={featuredImage || "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1920&auto=format&fit=crop"}
              alt={stripHtml(post.title.rendered)}
              width={1200}
              height={480}
              className="w-full h-64 object-cover rounded-md"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            {stripHtml(post.title.rendered)}
          </h1>

          {/* Description (excerpt or first paragraph) */}
          <p className="text-lg text-gray-700 mt-2">
            {stripHtml(post.excerpt?.rendered || firstParagraph || "")}
          </p>

          {/* Full content */}
          <article className="prose prose-gray max-w-3xl mx-auto prose-p:leading-7 sm:prose-lg mt-6">
            <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: sanitizeAllowed(post.content.rendered) }} />
          </article>

          {/* Read Our Next Article */}
          {nextPosts && nextPosts.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Read Our Next Article</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {nextPosts.map((p) => {
                  const img = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1200&auto=format&fit=crop";
                  const cat = extractPrimaryCategory(p) || "";
                  return (
                    <Link key={p.id} href={`/blog/${p.slug}`} className="block group">
                      <div className="w-full h-40 overflow-hidden rounded-md bg-gray-100">
                        <Image src={img} alt={stripHtml(p.title.rendered)} width={600} height={160} className="w-full h-40 object-cover rounded-md" />
                      </div>
                      {cat && (
                        <div className="text-xs font-semibold text-indigo-600 uppercase mt-2">{cat}</div>
                      )}
                      <div className="text-lg font-medium text-gray-800 mt-1 group-hover:underline">
                        {stripHtml(p.title.rendered)}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const slug = String(context.params?.slug || "");
  const base = process.env.NEXT_PUBLIC_WP_URL || "http://localhost:8080";
  // Fetch post by slug with embedded data (featured image, terms)
  const res = await fetch(`${base}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=1`, { cache: "no-store" });
  if (!res.ok) {
    return { notFound: true };
  }
  const arr: WPPost[] = await res.json();
  if (!arr || !arr.length) {
    return { notFound: true };
  }
  const post = arr[0];

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
  const category = extractPrimaryCategory(post) || null;
  const firstParagraph = extractFirstParagraph(post.content?.rendered || null);
  const learnBullets = deriveLearnBullets(post) || [];

  // Fetch next articles (exclude current)
  const nextRes = await fetch(`${base}/wp-json/wp/v2/posts?_embed=1&per_page=5`, { cache: "no-store" });
  let nextPosts: WPPost[] = [];
  if (nextRes.ok) {
    const list: WPPost[] = await nextRes.json();
    nextPosts = list.filter((p) => p.id !== post.id).slice(0, 4);
  }

  return {
    props: { post, category, featuredImage, firstParagraph, learnBullets, nextPosts },
  };
};

// Helpers
function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

function sanitizeAllowed(html: string): string {
  // Keep basic tags; very light sanitizer for demo. For production, use a robust sanitizer.
  if (!html) return "";
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/on\w+="[^"]*"/g, "");
}

function extractFirstParagraph(html: string | null): string | null {
  if (!html) return null;
  const match = html.match(/<p>([\s\S]*?)<\/p>/i);
  if (!match) return stripHtml(html).split(". ").slice(0, 2).join(". ");
  return stripHtml(match[1]);
}

function extractPrimaryCategory(post: WPPost): string | null {
  const terms = post._embedded?.["wp:term"]?.[0];
  if (Array.isArray(terms) && terms.length) {
    const cat = terms.find((t: any) => t?.taxonomy === "category") || terms[0];
    return cat?.name || null;
  }
  return null;
}

function deriveLearnBullets(post: WPPost): string[] {
  // Prefer list items from content; fallback to sentences from excerpt/content
  const html = post.content?.rendered || "";
  const liMatches = [...html.matchAll(/<li>([\s\S]*?)<\/li>/gi)].map((m) => stripHtml(m[1])).filter(Boolean);
  if (liMatches.length >= 3) return liMatches.slice(0, 7);
  const base = stripHtml(post.excerpt?.rendered || html);
  return base.split(/\.(\s|$)/).map((s) => s.trim()).filter(Boolean).slice(0, 7);
}


