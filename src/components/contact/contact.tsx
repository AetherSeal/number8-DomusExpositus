import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { ContactForm, contactFormSchema } from "../../schemas/contactSchema";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactForm>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <article className="shadow-xl col-span-3 lg:col-span-1">
      <h2 className="flex justify-center items-center pt-8 text-3xl text-cyan-600 font-thin">
        Contact Agent
      </h2>
      <form
        className="flex flex-col p-8 gap-4 transition-all"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("fullname")}
          placeholder="Full Name"
          className="px-4 py-2 rounded border shadow-inner bg-gray-50/10"
        />
        {errors.fullname && (
          <ContactFormError>{`${errors.fullname.message}`}</ContactFormError>
        )}
        <input
          {...register("email")}
          placeholder="Email"
          className="px-4 py-2 rounded border shadow-inner bg-gray-50/10"
        />
        {errors.email && (
          <ContactFormError>{`${errors.email.message}`}</ContactFormError>
        )}

        <input
          {...register("phone")}
          placeholder="Phone"
          type="tel"
          className="px-4 py-2 rounded border shadow-inner bg-gray-50/10"
        />
        {errors.phone && (
          <ContactFormError>{`${errors.phone.message}`}</ContactFormError>
        )}

        <textarea
          {...register("comments")}
          cols={30}
          rows={10}
          placeholder="Comments"
          className="px-4 py-2 rounded border shadow-inner bg-gray-50/10"
        ></textarea>
        {errors.comments && (
          <ContactFormError>{`${errors.comments.message}`}</ContactFormError>
        )}
        <button className="px-4 py-2 rounded bg-cyan-600 text-white shadow hover:scale-105 active:scale-95 transition-all">
          Contact Now
        </button>
        {isSubmitSuccessful && (
          <ContactFormSuccess>Message sent!</ContactFormSuccess>
        )}
      </form>
    </article>
  );
}
export const ContactFormSuccess = ({ children }: { children: string }) => {
  return (
    <p className="text-green-500 text-md font-thin text-center">{children}</p>
  );
};

export const ContactFormError = ({ children }: { children: string }) => {
  return <p className="text-red-500 text-sm">{children}</p>;
};
