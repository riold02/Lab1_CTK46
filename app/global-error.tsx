"use client";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex items-center justify-center bg-zinc-100 p-6">
        <div className="max-w-lg w-full rounded-xl bg-white shadow p-6 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-3">Ứng dụng gặp lỗi</h1>
          <p className="text-zinc-600 mb-2">
            Đã xảy ra lỗi không mong muốn ở mức toàn cục.
          </p>
          <p className="text-sm text-zinc-400 mb-6">
            {error.digest ? `Mã lỗi: ${error.digest}` : "Vui lòng thử lại sau."}
          </p>
          <button
            onClick={() => unstable_retry()}
            className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Thử tải lại
          </button>
        </div>
      </body>
    </html>
  );
}
