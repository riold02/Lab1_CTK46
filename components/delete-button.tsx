"use client";

import { useTransition } from "react";
import { deleteGuestbookEntry } from "@/app/guestbook/actions";
import { Button } from "@/components/ui/button";

interface DeleteButtonProps {
  id: string;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      type="button"
      variant="destructive"
      size="xs"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await deleteGuestbookEntry(id);
        })
      }
    >
      {isPending ? "Đang xóa..." : "Xóa"}
    </Button>
  );
}
