import { z } from "zod";

export const contactFormSchema = z.object({
  fullname: z.string().min(6, { message: "Your name Should be longer!" }),
  email: z.string().email({ message: "Invalid email" }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  comments: z.string().min(10, { message: "Comments must be longer" }),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
