export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Giới thiệu</h1>
      <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
        <p>
          Xin chào! Tôi là <strong>Nguyễn Đức Thuỷ</strong>, sinh viên ngành Công nghệ
          Thông tin tại Đại học Đà Lạt.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Kỹ năng</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>JavaScript / TypeScript</li>
          <li>React & Next.js</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Học vấn</h2>
        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800">
          <p className="font-medium">Đại học Đà Lạt</p>
          <p className="text-zinc-500 dark:text-zinc-400">Cử nhân Công nghệ Thông tin</p>
        </div>
      </div>
    </div>
  );
}
