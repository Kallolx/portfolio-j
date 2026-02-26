"use client";

import { motion } from "framer-motion";
import StripeBadge from "./StripeBadge";
import Image from "next/image";

import { blogPosts } from "@/data/blogs";

export default function Blogs({
  showHeader = true,
  isFullPage = false,
  limit,
}: {
  showHeader?: boolean;
  isFullPage?: boolean;
  limit?: number;
}) {
  const displayedPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section className={`px-6 lg:px-8 ${isFullPage ? "py-0" : "py-8"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={isFullPage ? "" : "bg-white rounded-3xl p-12 lg:p-16"}
        >
          {/* Header similar to CaseStudies */}
          {showHeader && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-8 mb-4">
              <div className="flex items-start gap-3">
                <StripeBadge
                  color="#002fb1"
                  opacity={1}
                  gap={2.5}
                  strokeWidth={1.5}
                  className="w-24 h-1.5"
                />
                <h2 className="-mt-2 text-md font-mono font-medium tracking-tight text-[#0046FF] uppercase">
                  BLOG & INSIGHTS
                </h2>
              </div>

              <div className="font-mono text-md leading-relaxed text-primary lg:col-span-2 -mt-2">
                <p>
                  Each post is an exploration of ideas, design thinking, and
                  strategies that inspire smarter decisions and spark
                  creativity—sharing lessons and stories that go beyond the work
                  itself.
                </p>
              </div>
            </div>
          )}

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {displayedPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={720}
                    height={480}
                    className="w-full h-[480px] object-cover rounded-2xl transition duration-300 group-hover:blur-[1px] group-hover:scale-105"
                  />

                  {/* overlay button center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button
                      aria-hidden
                      className="color-cycle pointer-events-auto text-md font-mono rounded-full opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-20"
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Title row */}
                <h3 className="mt-4 font-serif text-3xl text-primary transition-colors duration-300 group-hover:text-orange-500">
                  {post.title}
                </h3>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
