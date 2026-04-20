export default function CountriesLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="h-8 w-64 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="border rounded-xl p-4 space-y-3">
            <div className="h-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
            <div className="h-6 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
            <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
            <div className="h-4 w-1/2 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
