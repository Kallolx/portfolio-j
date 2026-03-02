import type { Metadata } from "next";
import { blogPosts } from "@/data/blogs";
import { notFound } from "next/navigation";
import BlogDetailsClient from "./BlogDetailsClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.introDescription,
    alternates: {
      canonical: `/blog/${post.id}`,
    },
    openGraph: {
      title: post.title,
      description: post.introDescription,
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.introDescription,
      images: [post.image],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return <BlogDetailsClient post={post} otherPosts={otherPosts} />;
}
