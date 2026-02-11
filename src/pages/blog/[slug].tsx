// pages/blog/[slug].tsx
import Head from "next/head";
import type { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ClockIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
// ADDED: import the sanitizer (create lib/sanitize.ts per previous instructions)
import { sanitizeHTML } from "@/lib/sanitize";

type WPEmbeddedMedia = { source_url?: string };
type WPTerm = { taxonomy?: string; name?: string };
type WPAuthor = {
  name?: string;
  avatar_urls?: Record<string, string>;
};

type WPPost = {
  id: number;
  date?: string;
  slug?: string;
  title?: { rendered?: string };
  content?: { rendered?: string };
  excerpt?: { rendered?: string };
  _embedded?: {
    "wp:featuredmedia"?: WPEmbeddedMedia[];
    "wp:term"?: WPTerm[][];
    author?: WPAuthor[];
  };
};

type Props = {
  post: WPPost | null;
  category: string | null;
  featuredImage: string | null;
  firstParagraph: string | null;
  learnBullets: string[];
  nextPosts: WPPost[];
  safeHtmlFromServer: string;
  error?: boolean;
};

export default function BlogPostPage({
  post,
  category,
  featuredImage,
  firstParagraph,
  learnBullets,
  nextPosts,
  safeHtmlFromServer,
  error,
}: Props) {
  if (error || !post) {
    return (
      <div className="bg-white min-h-screen w-full">
        <Head>
          <title>Post not found | Blog</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Navbar />
        <main className="min-h-[60vh] w-full flex items-center justify-center px-4">
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 max-w-md w-full text-center">
            <p className="text-red-600 font-semibold text-lg mb-2">Failed to Load Post</p>
            <p className="text-red-500 text-sm">Unable to load the blog post. Please check the URL or try again later.</p>
            <Link href="/blog" className="inline-block mt-4 text-red-600 hover:text-red-800 underline text-sm">← Back to Blog</Link>
          </div>
        </main>
        <FooterSection />
      </div>
    );
  }

  // Safe accessors with fallbacks
  const titleText = stripHtml(post.title?.rendered || "");
  const excerptHtml = post.excerpt?.rendered || "";
  const contentHtml = post.content?.rendered || "";
  const description = stripHtml(excerptHtml || firstParagraph || "");
  const contentText = stripHtml(contentHtml || "");
  const isDuplicate =
    description &&
    contentText.toLowerCase().startsWith(description.toLowerCase().substring(0, 50));
  const contentThumbnail =
    featuredImage ||
    "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1200&auto=format&fit=crop";
  const authorName = post._embedded?.author?.[0]?.name || "LaMa Fuel Team";
  const authorAvatar =
    post._embedded?.author?.[0]?.avatar_urls?.["96"] ||
    post._embedded?.author?.[0]?.avatar_urls?.["48"] ||
    "/default-avatar.png";
  const publishedDate = post.date ? formatDate(post.date) : null;

  // Heuristic detection of WP layout HTML in raw content (dev-only)
  const layoutDetected =
    /<(header|footer|nav|main|aside|section)/i.test(contentHtml || "") ||
    /(header|footer|nav|site|theme|wrapper|widget|sidebar|wp-block-group|wp-block-columns)/i.test(contentHtml || "");

  const isDev = process.env.NODE_ENV === "development";
  if (layoutDetected && isDev) {
    console.warn("[Layout Detection] WordPress layout HTML detected in post content. The sanitizer will strip it.");
  }

  // Client-only flag to avoid server/client markup mismatch for the dev preview
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-white min-h-screen w-full">
      <Head>
        <title>{`${(titleText && String(titleText)) || "Blog post"} | Blog`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description || titleText || ""} />
        <meta property="og:title" content={titleText} />
        <meta property="og:type" content="article" />
        {featuredImage && <meta property="og:image" content={featuredImage} />}
        {featuredImage && (
          <link rel="preload" as="image" href={featuredImage} />
        )}
      </Head>

      <Navbar />

      <main className="w-full min-h-screen">
        <section className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh]">
          <Image
            src={contentThumbnail}
            alt={titleText ? `${titleText} hero image` : "Blog hero image"}
            fill
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">{titleText}</h1>
              <div className="flex flex-wrap items-center gap-3 text-gray-200 lg:justify-end">
                <Image
                  src={authorAvatar}
                  alt={`${authorName} avatar`}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col text-sm">
                  <span className="font-semibold">{authorName}</span>
                  {publishedDate && post?.date ? (
                    <span className="text-xs opacity-80">
                      <time dateTime={post.date}>{publishedDate}</time>
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full">
          <div className="site-container py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-4xl">
              {isDev && layoutDetected && (
                <div className="mb-4 rounded bg-red-100 p-3 text-red-700">
                  <p className="text-sm font-semibold">Warning: WordPress layout HTML detected — sanitized before render.</p>
                  <p className="text-xs mt-1">Check server logs for raw content sample.</p>
                </div>
              )}

              <div className="mb-8">
                <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700">
                  ← Back to Blog
                </Link>
              </div>

              <section className="relative isolate">
                <article className="prose blog-article isolate max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: safeHtmlFromServer || "" }} />
                </article>
              </section>

              {nextPosts && nextPosts.length > 0 && (
                <div className="mt-16 border-t border-gray-200 pt-8 lg:mt-24 lg:pt-12">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Read Our Next Article</h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {nextPosts.map((p) => {
                      const img =
                        p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                        "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1200&auto=format&fit=crop";
                      const cat = extractPrimaryCategory(p) || "";
                      return (
                        <Link key={p.id} href={`/blog/${p.slug || ""}`} className="group block">
                          <div className="mb-3 h-40 w-full overflow-hidden rounded-md bg-gray-100">
                            <Image
                              src={img}
                              alt={stripHtml(p.title?.rendered || "")}
                              width={600}
                              height={160}
                              className="h-40 w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          {cat && <div className="text-xs font-semibold uppercase text-indigo-600 mb-2">{cat}</div>}
                          <div className="text-lg font-medium text-gray-800 group-hover:underline">{stripHtml(p.title?.rendered || "")}</div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}

/**
 * Server-side: fetch the WP post and sanitize content before returning to client.
 * CHANGED: import sanitizeHTML at top, call sanitizeHTML immediately after `const post = arr[0];`
 */
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const slug = String(context.params?.slug || "");
  const base = process.env.WP_URL || "http://localhost:8080";
  const apiUrl = `${base}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=1`;

  console.log("[WP API endpoint]", apiUrl);

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });

    if (!res.ok) {
      console.error("[WP API Error]", res.status, res.statusText);
      return {
        props: {
          post: null,
          category: null,
          featuredImage: null,
          firstParagraph: null,
          learnBullets: [],
          nextPosts: [],
          safeHtmlFromServer: "",
          error: true,
        },
      };
    }

    const arr: WPPost[] = await res.json();
    if (!arr || !arr.length) {
      console.warn("[WP API] No post found for slug:", slug);
      return {
        props: {
          post: null,
          category: null,
          featuredImage: null,
          firstParagraph: null,
          learnBullets: [],
          nextPosts: [],
          safeHtmlFromServer: "",
          error: true,
        },
      };
    }

    const post = arr[0];

    // ADDED: server-side sanitize the post content to remove theme HTML/CSS
    const cleanedHtml = sanitizeHTML(post.content?.rendered || "");

    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
    const category = extractPrimaryCategory(post) || null;
    const firstParagraph = extractFirstParagraph(post.content?.rendered || null);
    const learnBullets = deriveLearnBullets(post) || [];

    let nextPosts: WPPost[] = [];
    try {
      const nextRes = await fetch(`${base}/wp-json/wp/v2/posts?_embed=1&per_page=5`, { cache: "no-store" });
      if (nextRes.ok) {
        const list: WPPost[] = await nextRes.json();
        nextPosts = list.filter((p) => p.id !== post.id).slice(0, 4);
      }
    } catch (err) {
      console.error("Error fetching next posts:", err);
    }

    return {
      props: {
        post,
        category,
        featuredImage,
        firstParagraph,
        learnBullets,
        nextPosts,
        error: false,
        // ADDED: include sanitized HTML in returned props
        safeHtmlFromServer: cleanedHtml,
      },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      props: {
        post: null,
        category: null,
        featuredImage: null,
        firstParagraph: null,
        learnBullets: [],
        nextPosts: [],
        safeHtmlFromServer: "",
        error: true,
      },
    };
  }
};

// Helpers
function stripHtml(html: string | undefined | null): string {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
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
  const html = post.content?.rendered || "";
  const liRegex = /<li>([\s\S]*?)<\/li>/gi;
  const liMatches: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = liRegex.exec(html)) !== null) {
    liMatches.push(stripHtml(match[1]));
  }
  const filtered = liMatches.filter(Boolean);
  if (filtered.length >= 3) return filtered.slice(0, 7);
  const base = stripHtml(post.excerpt?.rendered || html);
  return base
    .split(/\.\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 7);
}

function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}
