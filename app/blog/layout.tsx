export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">{children}</div>
        <aside className="lg:w-64 shrink-0">
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-semibold mb-3">Danh mục</h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <li className="hover:text-emerald-600">Công nghệ</li>
              <li className="hover:text-emerald-600">Frontend</li>
              <li className="hover:text-emerald-600">Học tập</li>
              <li className="hover:text-emerald-600">Dự án cá nhân</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
