/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/react";
import { CustomButton } from "@/components/shared/shared_customs";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { mutateFn } from "@/services/mutation.api";
import { variables } from "@/utils/helper";

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email is required" }),
  phone_number: z.string().min(1, { message: "Phone number is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

const ContactPage = () => {
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  const { mutate: sendContact, isLoading } = useMutation(
    (data: z.infer<typeof contactFormSchema>) =>
      mutateFn({
        url: `${variables.base_url}/send/contact`,
        data,
      }),
    {
      onSuccess: () => {
        toast.success("Thank you for reaching out! We'll contact you shortly.");
        reset();
      },
      onError: (error: any) => {
        console.error("Error sending contact form:", error);
        toast.error("Failed to send your message. Please try again.");
      },
    }
  );

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    sendContact(data);
  };

  return (
    <div className="lg:py-10 p-6 lg:w-[700px] mx-auto">
      <div className="lg:pb-8 pb-4">
        <div
          className="flex items-center justify-start cursor-pointer lg:pb-4 pb-2"
          onClick={() => navigate("/")}
        >
          <Icon icon="fluent:arrow-left-16-filled" height={25} />
        </div>
        <h4 className="lg:text-[1.6rem] text-[1.2rem] font-semibold">
          Contact Us
        </h4>
        <p className="font-light lg:text-[0.95rem] text-[0.85rem] text-[#717173]">
          We'd love to hear from you! Fill out the form below and our team will
          respond promptly.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-4 space-y-4 lg:space-y-6"
      >
        <div>
          <Input
            label="Name"
            placeholder="e.g., John Doe"
            className="w-full"
            {...register("name")}
          />
          <span className="text-red-400 text-xs">{errors?.name?.message}</span>
        </div>
        <div>
          <Input
            label="Email"
            placeholder="e.g., john.doe@example.com"
            type="email"
            className="w-full"
            {...register("email")}
          />
          <span className="text-red-400 text-xs">{errors?.email?.message}</span>
        </div>
        <div>
          <Input
            label="Phone Number"
            placeholder="e.g., +1234567890"
            type="tel"
            className="w-full"
            {...register("phone_number")}
          />
          <span className="text-red-400 text-xs">
            {errors?.phone_number?.message}
          </span>
        </div>
        <div>
          <Input
            label="Message"
            placeholder="Enter your message here"
            className="w-full"
            {...register("message")}
          />
          <span className="text-red-400 text-xs">
            {errors?.message?.message}
          </span>
        </div>
        <div className="w-full pt-6">
          <CustomButton
            isLoading={isLoading}
            type="submit"
            className="bg-primary text-white w-full text-base"
          >
            Send Message
          </CustomButton>
        </div>
      </form>
      <div className="pt-10 text-center">
        <p className="font-light text-xs">You may also contact via</p>
        <p className="font-light text-sm">Phone: +233 54 256 0336</p>
        <p className="font-light text-sm">Email: hello@access89.com</p>
      </div>
    </div>
  );
};

export default ContactPage;
