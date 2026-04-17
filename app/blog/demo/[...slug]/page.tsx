import Link from "next/link";

interface CatchAllBlogPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function CatchAllBlogPage({ params }: CatchAllBlogPageProps) {
  const { slug } = await params;

  return (
    <div className="border rounded-lg p-6 bg-zinc-50 dark:bg-zinc-900">
      <h1 className="text-2xl font-bold mb-3">Catch-all route demo</h1>
      <p className="text-zinc-600 dark:text-zinc-300 mb-3">
        Bạn vừa truy cập đường dẫn nhiều segment trong blog:
      </p>
      <code className="block rounded bg-zinc-200 dark:bg-zinc-800 px-3 py-2 mb-4 text-sm">
        /blog/demo/{slug.join("/")}
      </code>
      <Link href="/blog" className="text-emerald-600 hover:underline">
        ← Quay lại blog
      </Link>
    </div>
  );
}
