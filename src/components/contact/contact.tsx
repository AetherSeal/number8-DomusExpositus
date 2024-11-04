import { useForm } from "react-hook-form";

export default function Contact() {
  const { register } = useForm();
  return (
    <article className="bg-slate-500">
      <h2>Contact Agent</h2>
      <form className="flex flex-col p-8 gap-4">
        <input
          {...register("fullname", {
            required: "email is required",
            minLength: 6,
          })}
          type="text"
          placeholder="Full Name"
          className="px-4 py-2 rounded"
        />
        <input
          {...register("email")}
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="px-4 py-2 rounded"
        />
        <input
          {...register("phone")}
          type="tel"
          name=""
          id=""
          placeholder="Phone"
          className="px-4 py-2 rounded"
        />
        <textarea
          {...register("comments")}
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Comments"
          className="px-4 py-2 rounded"
        ></textarea>
        <button>Contact Now</button>
      </form>
    </article>
  );
}
