import Link from "next/link";

export default function PostNotFound() {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold mb-4">Bài viết không tồn tại</h2>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6">
        Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa.
      </p>
      <Link
        href="/blog"
        className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors inline-block"
      >
        ← Quay lại danh sách bài viết
      </Link>
    </div>
  );
}
