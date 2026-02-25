"use client";

import { motion } from "framer-motion";
import StripeBadge from "./StripeBadge";
import Image from "next/image";

const posts = [
  {
    id: "b1",
    title: "Design Beyond Aesthetics: How Strategy Shapes Meaningful Brands",
    image: "https://images.unsplash.com/photo-1771345207864-2f0016374a0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "b2",
    title: "From Concept to Connection: Crafting Designs That Endure",
    image: "https://images.unsplash.com/photo-1771518667360-ed8fb9aaebda?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Blogs() {
  return (
    <section className="px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-12 lg:p-16"
        >
          {/* Header similar to CaseStudies */}
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
                Each post is an exploration of ideas, design thinking, and strategies that inspire smarter decisions and spark creativity—sharing lessons and stories that go beyond the work itself.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {posts.map((post) => (
              <article key={post.id} className="group relative rounded-2xl overflow-hidden bg-white">
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
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
