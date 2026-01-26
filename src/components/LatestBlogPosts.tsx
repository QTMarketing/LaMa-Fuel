"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import 'swiper/css';
import 'swiper/css/navigation';

type WPPost = {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  _embedded?: {
    [key: string]: any;
    author?: Array<{ name: string }>;
  };
};

const API_URL = "/api/wp-posts";

export default function LatestBlogPosts() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Failed to load posts: ${res.status}`);
        const data: WPPost[] = await res.json();
        setPosts(data.slice(0, 6)); // Get first 6 posts
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

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const cleanExcerpt = (html: string, maxLength: number = 120): string => {
    const text = html.replace(/<[^>]+>/g, "");
    return text.length > maxLength ? text.slice(0, maxLength) + "…" : text;
  };

  const getAuthorName = (post: WPPost): string => {
    const author = post._embedded?.author?.[0];
    return author?.name || "LaMa Fuel";
  };

  const calculateReadingTime = (content: string): string => {
    const text = content.replace(/<[^>]+>/g, "");
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const readingTime = Math.ceil(words.length / 200); // Average 200 words per minute
    return `${readingTime} min${readingTime !== 1 ? 's' : ''} read`;
  };

  // Use all posts for carousel
  const displayPosts = posts.slice(0, 6);

  if (loading) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-gray-500">Loading posts…</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[0.06em] leading-tight mb-4 sm:mb-0">
            Our Latest Blog Posts
          </h2>
          <Link
            href="/blog"
            className="btn-orange-gradient text-white px-6 py-3 rounded-md font-semibold shadow-sm hover:opacity-90 active:scale-95 transition"
          >
            <span>See All Blog Posts</span>
          </Link>
        </div>

        {/* Blog Posts Carousel */}
        {posts.length === 0 ? (
          <p className="text-sm text-gray-500">No blog posts available.</p>
        ) : (
          <div className="relative px-12">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-blog',
                prevEl: '.swiper-button-prev-blog',
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="!pb-12"
            >
              {displayPosts.map((post) => {
                const img = getFeaturedImage(post) || "/blog/image22.jpg";
                const cleanExcerptText = cleanExcerpt(
                  post.excerpt?.rendered || "",
                  140
                );
                const formattedDate = formatDate(post.date);
                const authorName = getAuthorName(post);
                const readingTime = calculateReadingTime(post.content?.rendered || post.excerpt?.rendered || "");

                return (
                  <SwiperSlide key={post.id}>
                    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                      {/* Image */}
                      <Link href={`/blog/${post.slug}`}>
                        <div className="relative w-full h-48 bg-gray-200">
                          <Image
                            src={img}
                            alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            unoptimized
                          />
                        </div>
                      </Link>
                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                          <span>{authorName}</span>
                          <span>•</span>
                          <span>{formattedDate}</span>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <h3
                            className="font-heading font-bold text-xl md:text-2xl tracking-wider mb-3 line-clamp-2 group-hover:text-primary-gradient transition-colors"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                          {cleanExcerptText}
                        </p>
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                        >
                          Read more
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            
            {/* Navigation Arrows */}
            <button className="swiper-button-prev-blog absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
            </button>
            <button className="swiper-button-next-blog absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ChevronRightIcon className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
