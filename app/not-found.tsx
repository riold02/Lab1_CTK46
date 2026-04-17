import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24 text-center">
      <div className="text-7xl mb-2">🧭</div>
      <h1 className="text-6xl font-bold text-zinc-300 dark:text-zinc-700 mb-4 animate-pulse">
        404
      </h1>
      <h2 className="text-2xl font-bold mb-4">Trang không tồn tại</h2>
      <p className="text-zinc-600 dark:text-zinc-300 mb-8">
        Xin lỗi, trang bạn đang tìm kiếm không có trên website này.
      </p>
      <Link
        href="/"
        className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors inline-block"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
