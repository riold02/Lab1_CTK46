import Link from "next/link";
import { notFound } from "next/navigation";
import LikeButton from "@/components/like-button";
import type { Post, User } from "@/types/post";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return null;
  }

  const data = (await res.json()) as Post;
  if (!data?.id) {
    return null;
  }

  return data;
}

async function getUser(userId: number): Promise<User | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  const author = await getUser(post.userId);

  return (
    <div>
      <Link
        href="/blog"
        className="text-emerald-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>
      <article>
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">Bài #{post.id}</Badge>
          <Badge variant="outline">Tác giả #{post.userId}</Badge>
        </div>
        <h1 className="text-3xl font-bold mb-4 capitalize">{post.title}</h1>
        <div className="prose max-w-none dark:prose-invert text-zinc-700 whitespace-pre-line mb-8">
          {post.body}
        </div>
        {author && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Về tác giả</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
              <p>
                <strong>{author.name}</strong> (@{author.username})
              </p>
              <p>
                {author.email} • {author.website}
              </p>
              <p>
                {author.company.name} — {author.company.catchPhrase}
              </p>
            </CardContent>
          </Card>
        )}
        <div className="border-t pt-6">
          <LikeButton />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return Array.from({ length: 10 }, (_, index) => ({ id: `${index + 1}` }));
}
