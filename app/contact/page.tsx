"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactFormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const initialState: ContactFormState = {
  success: false,
};

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Liên hệ</h1>
      <p className="text-zinc-500 mb-8">Bạn có câu hỏi hoặc muốn hợp tác? Hãy gửi tin nhắn cho tôi!</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Card size="sm">
            <CardContent className="pt-3 text-sm">
              <p className="font-semibold mb-1">Email</p>
              <a href="mailto:2212471@sv.dlu.edu.vn" className="text-emerald-600 hover:underline">
                2212471@sv.dlu.edu.vn
              </a>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardContent className="pt-3 text-sm">
              <p className="font-semibold mb-1">GitHub</p>
              <a
                href="https://github.com/rio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:underline"
              >
                github.com/rio
              </a>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardContent className="pt-3 text-sm">
              <p className="font-semibold mb-1">Địa chỉ</p>
              <p>Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà Lạt</p>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          {state.success ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-green-700">Gửi thành công!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.</p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Form liên hệ</CardTitle>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ và tên</Label>
                    <Input id="name" name="name" placeholder="Nguyễn Văn A" required />
                    {state.errors?.name && <p className="text-red-500 text-sm">{state.errors.name[0]}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="email@example.com" required />
                    {state.errors?.email && (
                      <p className="text-red-500 text-sm">{state.errors.email[0]}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Tiêu đề</Label>
                    <Input id="subject" name="subject" placeholder="Chủ đề bạn muốn trao đổi" required />
                    {state.errors?.subject && (
                      <p className="text-red-500 text-sm">{state.errors.subject[0]}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nội dung</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Viết nội dung tin nhắn..."
                      rows={5}
                      required
                    />
                    {state.errors?.message && (
                      <p className="text-red-500 text-sm">{state.errors.message[0]}</p>
                    )}
                  </div>

                  <Button type="submit" disabled={isPending}>
                    {isPending ? "Đang gửi..." : "Gửi tin nhắn"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
