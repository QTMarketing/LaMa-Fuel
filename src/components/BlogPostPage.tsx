"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ClockIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function stripHtml(html: string | null | undefined): string {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

function sanitizeHtml(html: string | null | undefined): string {
  if (!html) return "";
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/on\w+="[^"]*"/g, "");
}

export interface BlogPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt?: { rendered: string };
  date?: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
    "wp:term"?: Array<Array<{ name: string; taxonomy: string }>>;
    author?: Array<{ name?: string }>;
  };
}

export interface NextPost {
  id: number;
  slug: string;
  title: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
    "wp:term"?: Array<Array<{ name: string; taxonomy: string }>>;
  };
}

export interface BlogPostPageProps {
  post: BlogPost;
  featuredImage: string | null;
  category: string | null;
  firstParagraph: string | null;
  nextPosts: NextPost[];
}

export default function BlogPostPage({
  post,
  featuredImage,
  category,
  firstParagraph,
  nextPosts,
}: BlogPostPageProps) {
  const getPostCategory = (post: NextPost): string | null => {
    const terms = post._embedded?.["wp:term"]?.[0];
    if (Array.isArray(terms) && terms.length) {
      const cat = terms.find((t) => t?.taxonomy === "category") || terms[0];
      return cat?.name || null;
    }
    return null;
  };

  const getPostImage = (post: NextPost): string => {
    return (
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1200&auto=format&fit=crop"
    );
  };

  const description = stripHtml(post.excerpt?.rendered || firstParagraph || "");
  const contentText = stripHtml(post.content.rendered || "");
  const isDuplicate = contentText.startsWith(description);
  const contentThumbnail =
    featuredImage ||
    "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1200&auto=format&fit=crop";
  const authorName = post._embedded?.author?.[0]?.name || "LaMa Fuel Team";
  const publishedDate = post.date ? formatDate(post.date) : null;

  return (
    <>
      {featuredImage && (
        <Head>
          <link rel="preload" as="image" href={featuredImage} />
        </Head>
      )}
      <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-6">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              ← Back to Blog
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            {stripHtml(post.title.rendered)}
          </h1>

          {contentThumbnail && (
            <div className="w-full mb-3">
              <Image
                src={contentThumbnail}
                alt={`${stripHtml(post.title.rendered)} thumbnail`}
                width={1200}
                height={400}
                className="w-full h-64 sm:h-80 object-cover rounded-md"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1">
              <UserCircleIcon className="h-4 w-4 text-gray-400" />
              <span>{authorName}</span>
            </span>
            {publishedDate && post.date ? (
              <span className="inline-flex items-center gap-1">
                <ClockIcon className="h-4 w-4 text-gray-400" />
                <time dateTime={post.date}>{publishedDate}</time>
              </span>
            ) : null}
          </div>

          {!isDuplicate && (
            <p className="mt-4 text-lg text-gray-700">{description}</p>
          )}

          <article className="prose prose-gray max-w-3xl mx-auto prose-p:leading-7 sm:prose-lg mt-6 prose-h1:text-3xl prose-h2:text-2xl prose-img:rounded-md">
            <div
              className="text-gray-800"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content.rendered) }}
            />
          </article>

          {nextPosts && nextPosts.length > 0 && (
            <>
              <hr className="my-12 border-gray-200" />
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Read Our Next Article</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {nextPosts.map((nextPost) => {
                    const postImage = getPostImage(nextPost);
                    const postCategory = getPostCategory(nextPost);

                    return (
                      <Link key={nextPost.id} href={`/blog/${nextPost.slug}`} className="block group">
                        <div className="w-full h-40 overflow-hidden rounded-md bg-gray-100">
                          <Image
                            src={postImage}
                            alt={stripHtml(nextPost.title.rendered)}
                            width={600}
                            height={160}
                            className="w-full h-40 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        {postCategory && (
                          <div className="text-xs font-semibold text-indigo-600 uppercase mt-2">
                            {postCategory}
                          </div>
                        )}
                        <div className="text-lg font-medium text-gray-800 mt-1 group-hover:underline">
                          {stripHtml(nextPost.title.rendered)}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            </>
          )}
        </div>
      </main>
      <FooterSection />
      </div>
    </>
  );
}


