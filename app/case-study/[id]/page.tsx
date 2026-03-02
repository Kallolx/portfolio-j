import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import CaseStudyDetailsClient from "./CaseStudyDetailsClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const projectId = parseInt(resolvedParams.id, 10);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.overview,
    alternates: {
      canonical: `/case-study/${project.id}`,
    },
    openGraph: {
      title: project.title,
      description: project.overview,
      images: [{ url: project.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.overview,
      images: [project.image],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const projectId = parseInt(resolvedParams.id, 10);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <CaseStudyDetailsClient project={project} otherProjects={otherProjects} />
  );
}
