/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "../_form/Input";
import PhoneInput from "../_form/phone-input";
import { useDispatch, useSelector } from "react-redux";
import { updateSubscriberState } from "@/store/features/subscriber";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { mutateFn } from "@/services/mutation.api";
import { variables } from "@/utils/helper";
import { useMutation } from "react-query";
import { Icon } from "@iconify/react/dist/iconify.js";

const phoneValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(7, "Phone number must be at least 7 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .test("no-spaces", "Phone number cannot contain spaces", (value) => {
      return value ? !/\s/.test(value) : true;
    }),
});

const BasicInformation = () => {
  const dispatch = useDispatch();
  const { email, mobile, showValidationErrors } = useSelector((state: RootState) => state.subscriber);

  useEffect(() => {
    const isPhoneValid =
      mobile !== "" && /^[0-9]{7,15}$/.test(mobile) && !/\s/.test(mobile);
    const isEmailValid =
      email !== "" && email.includes("@") && email.includes(".");
    const isValidationPassed = isEmailValid && isPhoneValid;

    dispatch(
      updateSubscriberState({
        safe: isValidationPassed,
      }),
    );
  }, [dispatch, email, mobile]);

  const form = useFormik({
    initialValues: {
      email: email || "",
      phone: mobile || "",
    },
    validationSchema: phoneValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => {},
  });

  // Watch for validation trigger from continue button
  useEffect(() => {
    if (showValidationErrors) {
      form.setTouched({
        email: true,
        phone: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showValidationErrors]);

  const pos_api_base_url = variables.pos_api_base_url;

  const { mutate: mutateCheckEmail, isLoading: isLoadingCheckEmail } =
    useMutation(
      (newData: string) =>
        mutateFn({
          url: `${pos_api_base_url}/setup/create/check-email`,
          data: {
            email: newData,
          },
        }),
      {
        onSuccess: (data) => {
          // If response length > 0, email already exists
          if (data?.data?.response.length > 0) {
            toast.error("Email already exists");
            dispatch(updateSubscriberState({ safe: false }));
          } else {
            // Email is available (response.length === 0)
            dispatch(updateSubscriberState({ safe: true }));
          }
        },
        onError: () => {
          // console.error('Error creating subscriber:', error);
          // toast.error('Details were not submitted, please try again');
        },
      },
    );

  return (
    <div>
      <div>
        <h4 className="font-semibold lg:text-[1.7rem] text-[1.2rem]">
          Basic Information
        </h4>
        <p className="text-[#717173] font-light lg:text-[0.9rem] text-[0.8rem]">
          What is your phone number and email address?
        </p>
      </div>

      <div className="lg:pt-6 pt-2 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="w-full">
            <CustomInput
              type="email"
              label="Email"
              placeholder="john@foundry.com"
              id="email"
              values={form.values}
              errors={form.errors}
              touched={form.touched}
              handleChange={(e: any) => {
                form.handleChange(e); // Update formik state
                dispatch(updateSubscriberState({ email: e.target.value })); // Update Redux state

                // Check if email is valid format and not empty before checking availability
                const emailValue = e.target.value;
                if (
                  emailValue &&
                  emailValue.includes("@") &&
                  emailValue.includes(".") &&
                  emailValue.endsWith(".com")
                ) {
                  // Debounce the email check
                  setTimeout(() => {
                    if (emailValue === e.target.value) {
                      // Ensure value hasn't changed
                      mutateCheckEmail(emailValue);
                    }
                  }, 500);
                }
              }}
              handleBlur={form.handleBlur}
              // disabled={isLoadingCheckEmail}
            />
          </div>
          {isLoadingCheckEmail && (
            <Icon icon="eos-icons:loading" className="text-[25px]" />
          )}
        </div>
        <PhoneInput
          type="text"
          label="Phone Number"
          placeholder="23984392"
          id="phone"
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          handleChange={(e: any) => {
            const value = e.target.value;
            const numericValue = value.replace(/[^0-9]/g, "");
            e.target.value = numericValue;
            form.handleChange(e);
            const isValid =
              numericValue !== "" &&
              /^[0-9]{7,15}$/.test(numericValue) &&
              !/\s/.test(numericValue);

            dispatch(updateSubscriberState({ mobile: numericValue }));

            // Show validation error immediately if invalid
            if (numericValue && !isValid) {
              if (numericValue.length < 7) {
                form.setFieldError(
                  "phone",
                  "Phone number must be at least 7 digits",
                );
              } else if (numericValue.length > 15) {
                form.setFieldError(
                  "phone",
                  "Phone number must not exceed 15 digits",
                );
              }
            }
          }}
          handleBlur={(e: any) => {
            form.handleBlur(e);

            // Validate on blur
            const value = e.target.value;
            if (value && !/^[0-9]{7,15}$/.test(value)) {
              dispatch(updateSubscriberState({ safe: false }));
            }
          }}
        />
      </div>
    </div>
  );
};

export default BasicInformation;
