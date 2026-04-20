export default function BlogLoading() {
  return (
    <div>
      <div className="h-8 w-48 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-6" />
      <div className="space-y-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6"
          >
            <div className="flex gap-3 mb-3">
              <div className="h-5 w-20 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
              <div className="h-5 w-24 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
            </div>
            <div className="h-6 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-2" />
            <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mt-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
