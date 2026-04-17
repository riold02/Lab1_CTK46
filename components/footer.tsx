export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-zinc-500 dark:text-zinc-400 text-sm space-y-2">
        <p>
          &copy; 2026 - Nguyễn Đức Thuỷ | CTK46 - Các công nghệ mới trong PTPM
        </p>
        <p>
          <a
            href="mailto:2212471@sv.dlu.edu.vn"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            2212471@sv.dlu.edu.vn
          </a>{" "}
          •{" "}
          <a
            href="https://github.com/rio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            github.com/rio
          </a>
        </p>
      </div>
    </footer>
  );
}
