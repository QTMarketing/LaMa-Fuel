"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type WPPost = {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    [key: string]: any;
  };
};

const API_URL = "/api/wp-posts";

export default function BlogGrid() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Failed to load posts: ${res.status}`);
        const data: WPPost[] = await res.json();
        setPosts(data);
      } catch (e: any) {
        setError(e.message || "Failed to load posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const getFeaturedImage = (post: WPPost): string | null => {
    const media = post._embedded?.["wp:featuredmedia"]?.[0];
    return media?.source_url || null;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {loading && <p className="text-sm text-gray-500">Loading posts…</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const img = getFeaturedImage(post) || "/blog/image101.jpg";
              const cleanExcerpt = post.excerpt?.rendered
                ? post.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 140) + "…"
                : "";
              const date = new Date(post.date).toISOString().slice(0, 10);
              return (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <div className="group bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden h-full flex flex-col transition transform hover:-translate-y-2 hover:shadow-xl">
                    <div className="w-full h-48 relative bg-gray-200">
                      <Image src={img} alt={post.title.rendered} layout="fill" className="object-cover" unoptimized />
                    </div>
                    <div className="p-6 text-left flex flex-col flex-grow">
                      <span className="text-xs font-semibold text-primary-gradient mb-2">Blog</span>
                      <p className="text-xs text-gray-400 mb-2">{date}</p>
                      <h3 className="text-xl font-bold text-dark mb-3 flex-grow group-hover:text-primary-gradient transition-colors" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      <p className="text-gray-600 text-sm leading-relaxed">{cleanExcerpt}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
