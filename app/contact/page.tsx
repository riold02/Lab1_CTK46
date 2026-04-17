export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Liên hệ</h1>
      <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 space-y-3 border border-zinc-200 dark:border-zinc-800">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:2212471@sv.dlu.edu.vn"
              className="text-emerald-600 hover:underline"
            >
              2212471@sv.dlu.edu.vn
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/rio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              github.com/rio
            </a>
          </p>
          <p>
            <strong>Địa chỉ:</strong> Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà
            Lạt
          </p>
        </div>
      </div>
    </div>
  );
}
