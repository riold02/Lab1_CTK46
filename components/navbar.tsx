"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/skills", label: "Kỹ năng" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Dự án" },
  { href: "/guestbook", label: "Lưu bút" },
  { href: "/countries", label: "Quốc gia API" },
  { href: "/contact", label: "Liên hệ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-zinc-900 shadow-sm border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            Nguyễn Đức Thuỷ
          </Link>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Mở menu"
            aria-expanded={open}
          >
            ☰
          </button>

          <div className="hidden md:flex flex-wrap gap-4 sm:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-4 grid gap-2 border-t border-zinc-200 dark:border-zinc-800 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
