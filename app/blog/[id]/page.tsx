"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs";
import Contact from "@/components/Contact";
import StripeBadge from "@/components/StripeBadge";
import { motion } from "framer-motion";
import { use } from "react";

export default function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const post = blogPosts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    notFound();
  }

  // Get other posts for "Latest Blogs" (max 2)
  const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="bg-background min-h-screen text-primary pt-24 md:pt-32 pb-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl pb-12 md:pb-18 tracking-tight max-w-4xl pt-8 md:pt-14 leading-[1.1]"
        >
          {post.title}
        </motion.h1>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/3] md:aspect-[21/16] rounded-2xl overflow-hidden mb-12 md:mb-16"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Top Border */}
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-[1px] bg-primary/20 mb-8"
        />

        {/* Meta Info Grid & Intro */}
        <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_2fr] gap-x-4 gap-y-8 mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm tracking-wider text-[#0046FF] uppercase mb-2">
              Date
            </p>
            <p className="font-mono font-medium">{post.date}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-mono text-sm tracking-wider text-[#0046FF] uppercase mb-2">
              Category
            </p>
            <p className="font-mono font-medium">{post.category}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2 md:col-span-1 md:pl-4"
          >
            <p className="font-mono text-base md:text-md leading-relaxed text-[#0046FF]">
              {post.introDescription}
            </p>
          </motion.div>
        </div>

        {/* Dynamic Sections Part 1 */}
        {post.sectionsPart1.map((section, index) => (
          <motion.div
            key={`p1-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 mb-12 md:mb-24 items-start"
          >
            <div className="md:col-span-1">
              <h2 className="font-mono text-md uppercase text-[#0046FF] font-medium tracking-wide">
                {section.heading}
              </h2>
            </div>
            <div className="md:col-span-3">
              <p className="font-mono text-base md:text-lg leading-relaxed">
                {section.text}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Author Quote Section */}
        <div className="w-full mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24 items-start"
          >
            {/* Author Box */}
            <div className="flex flex-col gap-4">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-[#0046FF]/10">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover opacity-90 transition-opacity hover:opacity-100 mix-blend-multiply"
                  style={{
                    filter:
                      "grayscale(100%) contrast(120%) sepia(100%) hue-rotate(190deg) saturate(300%)",
                  }} // Stylized blue filter
                  onError={(e) => {
                    // Fallback to a solid blue color box if the image is missing
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.classList.add(
                      "bg-[#0046FF]",
                    );
                  }}
                />
              </div>
              <div>
                <p className="font-serif text-2xl text-[#0046FF] mb-1">
                  {post.author.name}
                </p>
                <p className="font-mono text-md text-[#0046FF]/70 tracking-tight whitespace-nowrap">
                  {post.author.role}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative pt-2 md:pt-0">
              {/* Minimalist SVG Quote Mark */}
              <div className="opacity-70 pointer-events-none text-[#0046FF] mb-6">
                <svg
                  aria-hidden
                  width="80"
                  height="64"
                  viewBox="0 0 80 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-40 flex-shrink-0"
                >
                  <path
                    d="M18 28C18 18 24 10 36 8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 28H36V52H18V28Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M44 28C44 18 50 10 62 8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M44 28H62V52H44V28Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-serif text-3xl md:text-4xl text-[#0046FF] leading-tight relative z-10">
                {post.author.quote}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Second Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/3] md:aspect-[21/16] rounded-2xl overflow-hidden mb-12 md:mb-24"
        >
          <Image
            src={post.secondImage}
            alt={`${post.title} detail`}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Dynamic Sections Part 2 */}
        {post.sectionsPart2.map((section, index) => (
          <motion.div
            key={`p2-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start ${index === post.sectionsPart2.length - 1 ? "mb-16 md:mb-32" : "mb-12 md:mb-24"}`}
          >
            <div className="md:col-span-1">
              <h2 className="font-mono text-md uppercase text-[#0046FF] font-medium tracking-wide">
                {section.heading}
              </h2>
            </div>
            <div className="md:col-span-3">
              <p className="font-mono text-base md:text-lg leading-relaxed">
                {section.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Latest Blogs Section */}
      <section className="py-12 md:py-16 px-3 md:px-6 lg:px-12 mx-0 md:mx-4 lg:mx-8 mb-12 max-w-6xl xl:mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-start gap-3 mb-4">
            <StripeBadge
              color="#002fb1"
              opacity={1}
              gap={2.5}
              strokeWidth={1.5}
              className="w-24 h-1.5"
            />
            <span className="-mt-2 text-md font-mono font-medium tracking-tight text-[#0046FF] uppercase">
              Latest Blogs
            </span>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherPosts.map((p) => (
            <Link href={`/blog/${p.id}`} key={p.id} className="group block">
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={720}
                    height={480}
                    className="w-full h-[250px] md:h-[480px] object-cover rounded-2xl transition duration-500 group-hover:blur-[1px] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <span className="color-cycle pointer-events-auto text-md font-mono rounded-full opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-20">
                      Read Article
                    </span>
                  </div>
                </div>
                <h3 className="mt-6 font-serif text-2xl lg:text-3xl text-primary group-hover:text-[#0046FF] transition-colors line-clamp-2">
                  {p.title}
                </h3>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Component */}
      <div className="max-w-6xl mx-auto">
        <Contact showHeader={true} isFullPage={false} isTransparent={true} />
      </div>
    </div>
  );
}
