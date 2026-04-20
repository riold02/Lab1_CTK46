"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { guestbookEntries } from "@/data/guestbook";

const guestbookSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(50, "Tên không được quá 50 ký tự"),
  message: z
    .string()
    .trim()
    .min(1, "Lời nhắn không được để trống")
    .max(500, "Lời nhắn không được quá 500 ký tự"),
});

export interface ActionState {
  success: boolean;
  errors?: {
    name?: string[];
    message?: string[];
    form?: string[];
  };
}

export async function createGuestbookEntry(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const rawData = {
    name: formData.get("name"),
    message: formData.get("message"),
  };

  const result = guestbookSchema.safeParse(rawData);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  guestbookEntries.unshift({
    id: Date.now().toString(),
    name: result.data.name,
    message: result.data.message,
    createdAt: new Date().toISOString(),
  });

  revalidatePath("/guestbook");
  return { success: true };
}

export async function deleteGuestbookEntry(id: string): Promise<ActionState> {
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return { success: false, errors: { form: ["Không tìm thấy lời nhắn"] } };
  }

  guestbookEntries.splice(index, 1);
  revalidatePath("/guestbook");
  return { success: true };
}
