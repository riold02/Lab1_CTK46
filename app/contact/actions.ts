"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Họ và tên phải có ít nhất 2 ký tự")
    .max(100, "Họ và tên không được quá 100 ký tự"),
  email: z.string().trim().email("Email không hợp lệ"),
  subject: z
    .string()
    .trim()
    .min(3, "Tiêu đề phải có ít nhất 3 ký tự")
    .max(120, "Tiêu đề không được quá 120 ký tự"),
  message: z
    .string()
    .trim()
    .min(10, "Nội dung phải có ít nhất 10 ký tự")
    .max(2000, "Nội dung không được quá 2000 ký tự"),
});

export interface ContactFormState {
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(rawData);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  console.log("Tin nhắn liên hệ mới:", result.data);
  return { success: true };
}
