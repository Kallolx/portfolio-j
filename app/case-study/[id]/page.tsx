"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Contact from "@/components/Contact";
import StripeBadge from "@/components/StripeBadge";
import { motion } from "framer-motion";
import { use } from "react";

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const projectId = parseInt(resolvedParams.id, 10);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  // Get other projects for "Latest Projects" (max 2)
  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="bg-background min-h-screen text-primary pt-24 md:pt-32 pb-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl pb-12 md:pb-18 tracking-tight max-w-3xl pt-8 md:pt-14"
        >
          {project.title}
        </motion.h1>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[16/12] md:aspect-[21/16] rounded-2xl overflow-hidden mb-12 md:mb-16"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Bottom Border */}
        <div className="border-b border-primary/20 mb-8"></div>

        {/* Meta Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8"
        >
          <div>
            <p className="font-mono text-md uppercase mb-2 opacity-60">Year</p>
            <p className="font-mono font-medium">{project.year}</p>
          </div>
          <div>
            <p className="font-mono text-md uppercase mb-2 opacity-60">
              Client
            </p>
            <p className="font-mono font-medium">{project.client}</p>
          </div>
          <div>
            <p className="font-mono text-md uppercase mb-2 opacity-60">
              Project Type
            </p>
            <p className="font-mono font-medium">{project.projectType}</p>
          </div>
        </motion.div>

        {/* Bottom Border */}
        <div className="border-b border-primary/20 mb-12"></div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-24"
        >
          <div className="md:col-span-1">
            <h2 className="font-mono text-md uppercase text-[#0046FF] tracking-wider font-medium">
              Overview
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="font-mono text-base md:text-lg leading-relaxed">
              {project.overview}
            </p>
          </div>
        </motion.div>

        {/* Second Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[16/12] md:aspect-[21/16] rounded-2xl overflow-hidden mb-12 md:mb-24"
        >
          <Image
            src={project.image}
            alt={`${project.title} detail`}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-24"
        >
          <div className="md:col-span-1">
            <h2 className="font-mono text-md uppercase text-[#0046FF] tracking-wider font-medium">
              The Approach
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="font-mono text-base md:text-lg leading-relaxed">
              {project.approach}
            </p>
          </div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-24"
        >
          <div className="md:col-span-1">
            <h2 className="font-mono text-md uppercase text-[#0046FF] tracking-wider font-medium">
              The Solution
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="font-mono text-base md:text-lg leading-relaxed">
              {project.solution}
            </p>
          </div>
        </motion.div>

        {/* Third Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[16/12] md:aspect-[21/16] rounded-2xl overflow-hidden mb-12 md:mb-24"
        >
          <Image
            src={project.image}
            alt={`${project.title} result detail`}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Result Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-32"
        >
          <div className="md:col-span-1">
            <h2 className="font-mono text-md uppercase text-[#0046FF] tracking-wider font-medium">
              Result
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="font-mono text-base md:text-lg leading-relaxed">
              {project.result}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Latest Projects Section */}
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
              Latest Projects
            </span>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((p, index) => (
            <Link
              href={`/case-study/${p.id}`}
              key={p.id}
              className="group block"
            >
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-2xl overflow-hidden ${
                  index % 2 === 0 ? "bg-primary" : "bg-[#ff7a18]"
                } p-2 md:p-3`}
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-500 group-hover:blur-[1px] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <span className="color-cycle pointer-events-auto text-sm font-mono rounded-full opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-20">
                      View Project
                    </span>
                  </div>
                </div>
              </motion.article>
              <h3 className="mt-6 font-serif text-2xl lg:text-3xl text-primary group-hover:text-[#0046FF] transition-colors">
                {p.title}
              </h3>
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
