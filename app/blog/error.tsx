"use client";

export default function BlogError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Đã xảy ra lỗi!</h2>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6">
        {error.message || "Không thể tải nội dung blog. Vui lòng thử lại."}
      </p>
      <button
        onClick={() => unstable_retry()}
        className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
      >
        Thử lại
      </button>
    </div>
  );
}
