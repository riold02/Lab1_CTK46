import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CountryNotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl font-bold mb-3">Không tìm thấy quốc gia</h2>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6">
        Mã quốc gia không hợp lệ hoặc dữ liệu hiện không khả dụng.
      </p>
      <Link href="/countries">
        <Button>Quay lại danh sách quốc gia</Button>
      </Link>
    </div>
  );
}
