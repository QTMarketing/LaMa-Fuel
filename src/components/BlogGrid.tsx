"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogGrid() {
  const posts = [
    { title: "Fuel Insights: Energy Tips and Industry Updates", date: "2024-04-21", readTime: "5 mins read", excerpt: "Stay informed with the latest trends and practical advice for optimizing your fuel services.", image: "/blog/image101.jpg", slug: "/blog/fuel-insights", category: "Fuel Tips" },
    { title: "The Fuel Hub: Your Guide to Efficient Energy Use", date: "2024-04-21", readTime: "4 mins read", excerpt: "Public charging vs home charging. Lorem ipsume klitame antermason.", image: "/blog/image101.jpg", slug: "/blog/fuel-hub", category: "Industry News" },
    { title: "Powering Knowledge: Fuel, Safety, and Sustainability", date: "2024-04-21", readTime: "6 mins read", excerpt: "Explore our commitment to fuel delivery safety, practice, and sustainability.", image: "/blog/image101.jpg", slug: "/blog/powering-knowledge", category: "Safety" },
    { title: "The Ultimate Guide to Fuel Delivery Services", date: "2024-04-21", readTime: "5 mins read", excerpt: "Everything you need to know about our reliable and efficient fuel delivery.", image: "/blog/image101.jpg", slug: "/blog/fuel-delivery-guide", category: "Sustainability" },
    { title: "Diesel Maintenance Best Practices for Fleet Managers", date: "2024-04-15", readTime: "7 mins read", excerpt: "Learn how to maintain your diesel fleet for optimal performance and longevity.", image: "/blog/image101.jpg", slug: "/blog/diesel-maintenance", category: "Fuel Tips" },
    { title: "Understanding E85: Benefits and Considerations", date: "2024-04-10", readTime: "6 mins read", excerpt: "Discover the environmental and economic benefits of using E85 fuel in your operations.", image: "/blog/image101.jpg", slug: "/blog/understanding-e85", category: "Sustainability" },
    { title: "Fuel Safety Protocols Every Business Should Know", date: "2024-04-05", readTime: "8 mins read", excerpt: "Essential safety protocols for handling and storing fuel at your business location.", image: "/blog/image101.jpg", slug: "/blog/fuel-safety-protocols", category: "Safety" },
    { title: "The Future of Fuel: Trends Shaping the Industry", date: "2024-03-28", readTime: "5 mins read", excerpt: "Explore the latest trends and innovations transforming the fuel distribution industry.", image: "/blog/image101.jpg", slug: "/blog/future-of-fuel", category: "Industry News" },
    { title: "Cost-Effective Fuel Management Strategies", date: "2024-03-20", readTime: "6 mins read", excerpt: "Practical strategies to reduce fuel costs and improve operational efficiency.", image: "/blog/image101.jpg", slug: "/blog/cost-effective-strategies", category: "Fuel Tips" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link href={post.slug} key={i}>
              <div className="group bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden h-full flex flex-col transition transform hover:-translate-y-2 hover:shadow-xl">
                <div className="w-full h-48 relative bg-gray-200">
                  <Image src={post.image} alt={post.title} layout="fill" className="object-cover" unoptimized />
                </div>
                <div className="p-6 text-left flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-primary-gradient mb-2">{post.category}</span>
                  <p className="text-xs text-gray-400 mb-2">{post.date} • {post.readTime}</p>
                  <h3 className="text-xl font-bold text-dark mb-3 flex-grow group-hover:text-primary-gradient transition-colors">{post.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
