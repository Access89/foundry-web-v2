/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { variables } from "@/utils/helper";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { CustomButton } from "@/components/shared/shared_customs";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { mutateFn } from "@/services/mutation.api";

const becomePartnerSchema = z.object({
  sales_person_name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  services: z
    .array(z.string())
    .min(1, { message: "At least one service is required" }),
  additional_information: z.string().optional()
});

const BecomePartner = () => {
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    register,
    getValues,
    watch,
    reset,
    setValue // Fix for select input
  } = useForm<z.infer<typeof becomePartnerSchema>>({
    resolver: zodResolver(becomePartnerSchema)
  });

  watch();

  const { mutate: mutateBecomePartner, isLoading: partnerIsLoading } =
    useMutation(
      (newData: z.infer<typeof becomePartnerSchema>) =>
        mutateFn({
          url: `${variables.base_url}/create/partner`,
          data: newData
        }),
      {
        onSuccess: () => {
          toast.success("Details submitted successfully, we will be in touch!");
          reset();
          navigate(-1);
        },
        onError: (error: any) => {
          console.error("Error adding partner:", error);
          toast.error("Details were not submitted, please try again");
        }
      }
    );

  const onSubmit = async (data: z.infer<typeof becomePartnerSchema>) => {
    console.log("Submitting data:", data); // Debugging
    mutateBecomePartner(data);
  };

  return (
    <div className="lg:py-10 p-6 lg:w-[700px] mx-auto">
      <div className="lg:pb-8 pb-4">
        <div
          className="flex items-center justify-start cursor-pointer lg:pb-4 pb-2"
          onClick={(event) => {
            event.preventDefault();
            navigate("/financial-services");
          }}
        >
          <Icon icon={"fluent:arrow-left-16-filled"} height={25} />
        </div>
        <h4 className="lg:text-[1.6rem] text-[1.2rem] font-semibold">
          Become A Partner
        </h4>
        <p className="font-light lg:text-[0.95rem] text-[0.85rem] text-[#717173] ">
          Fill out the form below and our team will get in touch with you
          shortly.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-4 space-y-4 lg:space-y-6"
      >
        {data.map((item) => {
          const fieldName = item.name as keyof z.infer<
            typeof becomePartnerSchema
          >;
          switch (item.type) {
            case "text":
              return (
                <div key={item.name}>
                  <Input
                    className="w-full"
                    type={"text"}
                    label={item.label}
                    placeholder={item.placeHolder}
                    {...register(fieldName)}
                  />
                  <span className="text-red-400 text-xs">
                    {errors?.[fieldName]?.message}
                  </span>
                </div>
              );

            case "select":
              return (
                <div key={item.name}>
                  <Select
                    items={item.options}
                    label={item.label}
                    placeholder={item.placeHolder}
                    selectionMode={item?.multiple ? "multiple" : "single"}
                    selectedKeys={
                      item.multiple
                        ? (new Set(getValues()[fieldName] || []) as any) // Multi-select: store as Set
                        : new Set(
                            getValues()[fieldName]
                              ? [getValues()[fieldName]]
                              : []
                          ) // Single-select: store as single-item Set
                    }
                    onSelectionChange={(selected) => {
                      const selectedArray = Array.from(selected) as string[];

                      if (item.multiple) {
                        setValue(fieldName, selectedArray); // Multi-select case
                      } else {
                        setValue(fieldName, selectedArray[0] || ""); // Single-select case
                      }
                    }}
                  >
                    {(option) => (
                      <SelectItem key={option.value}>{option.label}</SelectItem>
                    )}
                  </Select>

                  <span className="text-red-400 text-xs">
                    {errors?.[fieldName]?.message}
                  </span>
                </div>
              );
          }
        })}

        <div className="w-full pt-6">
          <CustomButton
            isLoading={partnerIsLoading}
            type="submit"
            className=" bg-primary text-white w-full text-base"
          >
            Submit
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const data = [
  {
    label: "Name",
    name: "sales_person_name",
    type: "text",
    placeHolder: "e.g. Nana Gyamfi"
  },
  {
    label: "Email",
    name: "email",
    type: "text",
    placeHolder: "e.g. papa@example.com"
  },
  {
    label: "Phone Number",
    name: "phone",
    type: "text",
    placeHolder: "e.g. 02039298437"
  },
  {
    label: "Country",
    name: "country",
    type: "select",
    multiple: false,
    options: ["Ghana", "Nigeria", "Senegal", "Mali"].map((e) => ({
      label: e,
      value: e
    })),
    placeHolder: "e.g. Ghana"
  },
  {
    label: "Services",
    name: "services",
    type: "select",
    options: [
      "Financial Services",
      "Business Automation",
      "Foundry Hub - B2B Ecommerce",
      "Logistics & Supply Chain"
    ].map((e) => ({ label: e, value: e })),
    multiple: true,
    placeHolder: "e.g. Financial Services"
  },
  {
    label: "Additional Information",
    name: "additional_information",
    type: "text",
    placeHolder: "e.g. Can we schedule a meeting"
  }
];

export default BecomePartner;
