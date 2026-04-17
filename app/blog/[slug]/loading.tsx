export default function BlogPostLoading() {
  return (
    <div>
      <div className="h-5 w-40 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-6" />
      <div className="h-6 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-4" />
      <div className="space-y-2 mb-6">
        <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
        <div className="h-4 w-4/6 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
      </div>
      <div className="h-10 w-36 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
    </div>
  );
}
