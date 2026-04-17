export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export const posts: Post[] = [
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.js - Framework React phổ biến",
    excerpt: "Vì sao Next.js phù hợp để phát triển web hiện đại.",
    content: `Next.js là framework React mạnh mẽ được phát triển bởi Vercel.
Nó hỗ trợ App Router, Server Components, và tối ưu hiệu năng mặc định.

Một số điểm nổi bật:
- Routing tự động theo cấu trúc thư mục
- Tối ưu hoá ảnh, font, bundle
- Hỗ trợ SEO và prerendering tốt`,
    date: "2026-03-10",
    category: "Công nghệ",
    author: "Nguyễn Đức Thuỷ",
  },
  {
    slug: "hoc-tailwind-css",
    title: "Tailwind CSS và cách tăng tốc làm UI",
    excerpt: "Cách dùng utility classes để xây layout nhanh và nhất quán.",
    content: `Tailwind CSS giúp viết giao diện ngay trong JSX với các class tiện ích.
Bạn có thể kiểm soát spacing, màu sắc, typograpy và responsive trực tiếp.

Khi project lớn dần, Tailwind giúp chuẩn hoá style và giảm CSS rời rạc.`,
    date: "2026-03-18",
    category: "Frontend",
    author: "Nguyễn Đức Thuỷ",
  },
  {
    slug: "kinh-nghiem-tu-hoc-lap-trinh",
    title: "Kinh nghiệm tự học lập trình hiệu quả",
    excerpt: "Ba thói quen giúp học lập trình bền vững trong đại học.",
    content: `Học lập trình cần đều đặn, thực hành liên tục và có dự án thực tế.
Đừng chỉ xem video - hãy code, sửa lỗi và viết lại.

Ba thói quen hữu ích:
1. Mỗi ngày code một chút.
2. Ghi chú lỗi đã gặp và cách xử lý.
3. Public sản phẩm lên GitHub để nhận phản hồi.`,
    date: "2026-03-27",
    category: "Học tập",
    author: "Nguyễn Đức Thuỷ",
  },
  {
    slug: "xay-dung-thoi-quen-doc-docs",
    title: "Xây dựng thói quen đọc tài liệu kỹ thuật",
    excerpt: "Cách đọc docs nhanh, đúng trọng tâm và áp dụng ngay vào code.",
    content: `Đọc tài liệu là kỹ năng quan trọng để phát triển bền vững.
Thay vì đọc toàn bộ từ đầu đến cuối, hãy bắt đầu từ vấn đề bạn đang gặp.

Một cách hiệu quả:
1. Đọc mục API liên quan trực tiếp.
2. Chạy thử ví dụ tối thiểu.
3. Ghi chú lại các lưu ý/deprecation trong phiên bản đang dùng.`,
    date: "2026-04-02",
    category: "Học tập",
    author: "Nguyễn Đức Thuỷ",
  },
  {
    slug: "toi-uu-hieu-nang-nextjs-co-ban",
    title: "Tối ưu hiệu năng Next.js ở mức cơ bản",
    excerpt: "Những điểm tối ưu dễ áp dụng cho dự án môn học.",
    content: `Bạn có thể bắt đầu tối ưu từ những phần đơn giản:
- Dùng Link cho điều hướng nội bộ.
- Giữ component tương tác ở phạm vi nhỏ.
- Tận dụng static generation cho nội dung ít thay đổi.

Các bước này thường đã giúp website mượt hơn đáng kể.`,
    date: "2026-04-08",
    category: "Công nghệ",
    author: "Nguyễn Đức Thuỷ",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
