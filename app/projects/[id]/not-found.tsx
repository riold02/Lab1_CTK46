import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl font-bold mb-3">Dự án không tồn tại</h2>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6">
        Không tìm thấy dự án theo mã bạn yêu cầu.
      </p>
      <Link
        href="/projects"
        className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors inline-block"
      >
        Về trang dự án
      </Link>
    </div>
  );
}
