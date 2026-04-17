import Link from "next/link";
import Counter from "@/components/counter";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/40 rounded-full mx-auto mb-6 flex items-center justify-center shadow-sm ring-1 ring-emerald-200 dark:ring-emerald-800">
          <span className="text-3xl font-bold text-emerald-700 dark:text-emerald-300">
            T
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Xin chào! Tôi là <span className="text-emerald-600">Nguyễn Đức Thuỷ</span>
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-2">
          Sinh viên Công nghệ Thông tin - Đại học Đà Lạt
        </p>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-8">MSSV: 2212471</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/projects"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg shadow hover:bg-emerald-700 transition-colors"
          >
            Xem dự án
          </Link>
          <Link
            href="/contact"
            className="border border-zinc-300 dark:border-zinc-700 px-6 py-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            Liên hệ
          </Link>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Kỹ năng</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Git",
            "SQL",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 text-center border border-zinc-200 dark:border-zinc-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 text-center border border-emerald-100 dark:border-emerald-900">
        <h2 className="text-2xl font-bold mb-3">Demo Client Component</h2>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4">
          Bộ đếm bên dưới dùng state phía client với &quot;use client&quot;
        </p>
        <div className="flex justify-center mb-4">
          <Counter />
        </div>
        <Link href="/blog" className="text-emerald-600 font-semibold hover:underline">
          Xem blog →
        </Link>
      </div>
    </div>
  );
}
