import Link from "next/link";
import { notFound } from "next/navigation";
import LikeButton from "@/components/like-button";
import { getPostBySlug, posts } from "@/data/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Link
        href="/blog"
        className="text-emerald-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>
      <article>
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded">
            {post.category}
          </span>
          <span className="text-sm text-zinc-400">{post.date}</span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Tác giả: {post.author}
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
        <div className="prose max-w-none dark:prose-invert text-zinc-700 whitespace-pre-line mb-8">
          {post.content}
        </div>
        <div className="border-t pt-6">
          <LikeButton />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
