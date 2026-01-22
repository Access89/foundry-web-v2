/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import CustomInput from "../_form/Input";
import { useDispatch, useSelector } from "react-redux";
import { updateSubscriberState } from "@/store/features/subscriber";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { CustomButton } from "@/components/shared/shared_customs";
import { cn } from "@nextui-org/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const PasswordSetting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const {
    customer_name,
    country,
    email,
    mobile,
    business_location,
    business_type,
    nature_of_business,
    password,
    country_code,
    business_owner,
    plan_id,
    showValidationErrors,
  } = useSelector((state: RootState) => state.subscriber);

  // Read plan_id from URL search params and update Redux state
  useEffect(() => {
    const planIdFromUrl = searchParams.get("plan_id");
    if (planIdFromUrl && !plan_id) {
      dispatch(
        updateSubscriberState({
          plan_id: parseInt(planIdFromUrl, 10),
        }),
      );
    }
  }, [searchParams, plan_id, dispatch]);

  const validate = (values: any) => {
    const errors: any = {};

    // Password validation
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(values.password)) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(values.password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/[^A-Za-z0-9]/.test(values.password)) {
      errors.password = "Password must contain at least one special character";
    }

    // Confirm password validation
    if (!values.confirm_password) {
      errors.confirm_password = "Please confirm your password";
    } else if (values.password !== values.confirm_password) {
      errors.confirm_password = "Passwords must match";
    }

    return errors;
  };

  const { ...form } = useFormik({
    initialValues: {
      password: password || "",
      confirm_password: "",
    },
    validate,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => {},
  });

  // Watch for validation trigger from continue button
  useEffect(() => {
    if (showValidationErrors) {
      form.setTouched({
        password: true,
        confirm_password: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showValidationErrors]);

  useEffect(() => {
    if (
      form.values.password &&
      form.values.confirm_password &&
      !form.errors.password &&
      !form.errors.confirm_password
    ) {
      dispatch(
        updateSubscriberState({
          safe: true,
        }),
      );
    } else {
      dispatch(
        updateSubscriberState({
          safe: false,
        }),
      );
    }
  }, [
    form.values.password,
    form.values.confirm_password,
    form.errors,
    dispatch,
  ]);

  const onSubmit = async () => {
    const payload = {
      company_name: customer_name,
      email: email,
      phone: country_code + mobile,
      country: country,
      password: password,
      user_name: business_owner,
      business_location: business_location,
      business_type: business_type,
      nature_of_business: nature_of_business,
      plan_id: plan_id, // Include plan_id from Redux state
    };

    const planIdParam = plan_id ? `?plan_id=${plan_id}` : "";
    navigate(`/onboarding/download-apps-and-other-offers${planIdParam}`, {
      state: {
        payload: {
          payload_data: payload,
        },
      },
    });
  };

  return (
    <div className="lg:w-[700px] w-full h-full lg:pt-12 lg:px-6 mx-auto font-sans flex flex-col justify-between lg:pb-12 px-6 py-6">
      <div>
        <div>
          <h4 className="font-semibold lg:text-[1.7rem] text-[1.2rem]">
            Set Password
          </h4>
          <p className="text-[#717173] font-light lg:text-[0.9rem] text-[0.8rem]">
            Enter a password to continue
          </p>
        </div>

        <div className="lg:pt-6 flex flex-col gap-4 pt-4">
          <CustomInput
            type={"password"}
            label={"Password"}
            placeholder={""}
            id={"password"}
            values={form.values}
            errors={form.errors as any}
            touched={form.touched as any}
            handleChange={(e: any) => {
              form.setFieldValue("password", e.target.value);
              dispatch(updateSubscriberState({ password: e.target.value }));
              form.setFieldTouched("password", true, false);
            }}
            handleBlur={form.handleBlur}
          />
          <CustomInput
            type={"password"}
            label={"Confirm Password"}
            placeholder={""}
            id={"confirm_password"}
            values={form.values}
            errors={form.errors as any}
            touched={form.touched as any}
            handleChange={(e: any) => {
              form.setFieldValue("confirm_password", e.target.value);
              form.setFieldTouched("confirm_password", true, false);
            }}
            handleBlur={form.handleBlur}
          />
        </div>
      </div>

      <CustomButton
        className="bg-primary text-white font-medium w-full mt-2 py-2 lg:py-4 lg:text-[0.9rem]"
        onPress={() => {
          // Validate all fields
          const hasErrors = Object.keys(form.errors).length > 0;
          const hasEmptyFields = !form.values.password || !form.values.confirm_password;
          const passwordsMismatch = form.values.password !== form.values.confirm_password;

          if (hasErrors || hasEmptyFields || passwordsMismatch) {
            // Mark all fields as touched to show errors
            form.setTouched({
              password: true,
              confirm_password: true,
            });
            toast.error("Please fill in all required fields correctly");
            return;
          }

          // If validation passes, submit
          onSubmit();
        }}
      >
        Submit
      </CustomButton>
    </div>
  );
};

export default PasswordSetting;
