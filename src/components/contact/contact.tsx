import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Contact() {
  const contactFormSchema = z.object({
    fullname: z
      .string()
      .min(6, { message: "Must be 6 or more characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().optional(),
    comments: z
      .string()
      .min(10, { message: "Comments must be longer" })
      .optional(),
  });
  const {
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactFormSchema) });

  return (
    <article className="bg-slate-500">
      <h2 className="flex justify-center items-center pt-8 text-white text-2xl">
        Contact Agent
      </h2>
      <form className="flex flex-col p-8 gap-4">
        <input
          {...register("fullname", {
            required: "full name is required",
            minLength: 6,
          })}
          type="text"
          placeholder="Full Name"
          className="px-4 py-2 rounded"
        />
        {errors.fullname && <p>{`${errors.fullname.message}`}</p>}
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Invalid email",
            },
          })}
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="px-4 py-2 rounded"
        />
        {errors.email && <p>{`${errors.email.message}`}</p>}

        <input
          {...register("phone")}
          type="tel"
          name=""
          id=""
          placeholder="Phone"
          className="px-4 py-2 rounded"
        />
        {errors.phone && <p>{`${errors.phone.message}`}</p>}

        <textarea
          {...register("comments")}
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Comments"
          className="px-4 py-2 rounded"
        ></textarea>
        {errors.comments && <p>{`${errors.comments.message}`}</p>}
        <button className="px-4 py-2 rounded bg-cyan-600 text-white shadow hover:scale-105 active:scale-95 transition-all">
          Contact Now
        </button>
      </form>
    </article>
  );
}
