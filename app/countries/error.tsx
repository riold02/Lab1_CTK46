"use client";

import { Button } from "@/components/ui/button";

export default function CountriesError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-3">Không thể tải dữ liệu quốc gia</h2>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6">{error.message}</p>
      <Button onClick={() => unstable_retry()}>Thử lại</Button>
    </div>
  );
}
