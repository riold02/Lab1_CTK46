import GuestbookForm from "@/components/guestbook-form";
import DeleteButton from "@/components/delete-button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { guestbookEntries } from "@/data/guestbook";

export default function GuestbookPage() {
  const entries = guestbookEntries;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Sổ lưu bút</h1>
      <p className="text-zinc-500 mb-8">Hãy để lại lời nhắn cho tôi nhé!</p>

      <GuestbookForm />

      <Separator className="my-8" />

      <div className="space-y-4">
        <p className="text-sm text-zinc-500">{entries.length} lời nhắn</p>

        {entries.map((entry) => (
          <Card key={entry.id}>
            <CardContent className="pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{entry.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-500">
                    {new Date(entry.createdAt).toLocaleDateString("vi-VN")}
                  </span>
                  <DeleteButton id={entry.id} />
                </div>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300">{entry.message}</p>
            </CardContent>
          </Card>
        ))}

        {entries.length === 0 && (
          <p className="text-center text-zinc-500 py-8">Chưa có lời nhắn nào. Hãy là người đầu tiên!</p>
        )}
      </div>
    </div>
  );
}
