"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import 'swiper/css';
import 'swiper/css/navigation';

export default function BlogNews() {
  const posts = [
    { title: "Fuel Insights: Energy Tips and Industry Updates", date: "2024-04-21", readTime: "5 mins read", excerpt: "Stay informed with the latest trends and practical advice for optimizing your fuel services.", image: "/blog/image22.jpg", slug: "/blog/fuel-insights" },
    { title: "The Fuel Hub: Your Guide to Efficient Energy Use", date: "2024-04-21", readTime: "4 mins read", excerpt: "Public charging vs home charging. Lorem ipsume klitame antermason.", image: "/blog/image22.jpg", slug: "/blog/fuel-hub" },
    { title: "Powering Knowledge: Fuel, Safety, and Sustainability", date: "2024-04-21", readTime: "6 mins read", excerpt: "Explore our commitment to fuel delivery safety, practice, and sustainability.", image: "/blog/image22.jpg", slug: "/blog/powering-knowledge" },
    { title: "The Ultimate Guide to Fuel Delivery Services", date: "2024-04-21", readTime: "5 mins read", excerpt: "Everything you need to know about our reliable and efficient fuel delivery.", image: "/blog/image22.jpg", slug: "/blog/fuel-delivery-guide" },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="bg-primary-gradient text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">Blog</span>
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12">Blog News</h2>
        <div className="relative group">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {posts.map((post, i) => (
              <SwiperSlide key={i}>
                <Link href={post.slug}>
                  <div className="h-full flex flex-col transition transform hover:-translate-y-2">
                    <div className="w-full h-48 relative rounded-lg overflow-hidden shadow-lg"><Image src={post.image} alt={post.title} layout="fill" className="object-cover group-hover:scale-105 transition-transform duration-300" unoptimized /></div>
                    <div className="bg-white text-dark rounded-lg shadow-lg p-6 text-left flex flex-col flex-grow -mt-8 z-10">
                      <p className="text-xs text-gray-500 mb-2">{post.date} • {post.readTime}</p>
                      <h3 className="text-xl font-bold text-dark mb-3 flex-grow">{post.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev-custom absolute top-1/2 -left-20 transform -translate-y-1/2 p-3 rounded-full btn-orange-gradient text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button className="swiper-button-next-custom absolute top-1/2 -right-20 transform -translate-y-1/2 p-3 rounded-full btn-orange-gradient text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="text-center mt-12">
            <Link href="/blog"><button className="btn-orange-gradient text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition"><span>View All Blogs</span></button></Link>
        </div>
      </div>
    </section>
  );
}


