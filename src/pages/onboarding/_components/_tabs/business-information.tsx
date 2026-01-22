/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import * as Yup from 'yup';
import CustomInput from "../_form/Input";
import SelectInput from "../_form/Select-Input";
import { useDispatch, useSelector } from "react-redux";
import { updateSubscriberState } from "@/store/features/subscriber";
import { useEffect } from "react";
import { RootState } from "@/store/store";
import { use_cases_list } from "@/utils/helper";

const businessValidationSchema = Yup.object({
  business_name: Yup.string()
    .required('Business name is required')
    .min(2, 'Business name must be at least 2 characters')
    .max(100, 'Business name must not exceed 100 characters')
    .trim(),
  business_owner: Yup.string()
    .required('Your name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
    .trim(),
  location: Yup.string()
    .required('Location is required')
    .min(2, 'Location must be at least 2 characters')
    .max(100, 'Location must not exceed 100 characters')
    .trim(),
  business_type: Yup.string()
    .required('Business type is required'),
  nature_of_business: Yup.string()
    .required('Nature of business is required'),
});

const BasicInformation = () => {
  const dispatch = useDispatch();
  const {
    customer_name,
    business_location,
    business_type,
    business_owner,
    nature_of_business,
    showValidationErrors,
  } = useSelector((state: RootState) => state.subscriber);

  const form = useFormik({
    initialValues: {
      business_name: customer_name || "",
      location: business_location || "",
      business_type: business_type || "",
      business_owner: business_owner || "",
      nature_of_business: nature_of_business || "",
    },
    validationSchema: businessValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => {},
  });

  // Watch for validation trigger from continue button
  useEffect(() => {
    if (showValidationErrors) {
      form.setTouched({
        business_name: true,
        location: true,
        business_type: true,
        business_owner: true,
        nature_of_business: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showValidationErrors]);

  useEffect(() => {
    // Check if all required fields are filled and have no validation errors
    const hasAllFields =
      customer_name !== "" &&
      business_location !== "" &&
      business_owner !== "" &&
      nature_of_business !== "" &&
      business_type !== "";

    const hasNoErrors = Object.keys(form.errors).length === 0;
    const isValidationPassed = hasAllFields && hasNoErrors;

    dispatch(
      updateSubscriberState({
        safe: isValidationPassed,
      }),
    );
  }, [
    business_location,
    customer_name,
    business_type,
    business_owner,
    nature_of_business,
    form.errors,
    dispatch,
  ]);

  return (
    <div className="">
      <div>
        <h4 className="font-semibold lg:text-[1.7rem] text-[1.2rem]">
          Business Information
        </h4>
        <p className="text-[#717173] font-light lg:text-[0.9rem] text-[0.8rem]">
          Tell as more about your business?
        </p>
      </div>

      <div className="lg:pt-6 flex flex-col gap-4 pt-4">
        <CustomInput
          type={"text"}
          label={"Business name"}
          placeholder={"e.g. JD Enterprise"}
          id={"business_name"}
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          handleChange={(e: any) => {
            form.handleChange(e);
            dispatch(updateSubscriberState({ customer_name: e.target.value }));
          }}
          handleBlur={form.handleBlur}
        />
        <CustomInput
          type={"text"}
          label={"Your name"}
          placeholder={"e.g. Jane Doe"}
          id={"business_owner"}
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          handleChange={(e: any) => {
            form.handleChange(e);
            dispatch(updateSubscriberState({ business_owner: e.target.value }));
          }}
          handleBlur={form.handleBlur}
        />
        <CustomInput
          type={"text"}
          label={"Location"}
          placeholder={"e.g. Accra"}
          id={"location"}
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          handleChange={(e: any) => {
            form.handleChange(e);
            dispatch(
              updateSubscriberState({ business_location: e.target.value }),
            );
          }}
          handleBlur={form.handleBlur}
        />

        <SelectInput
          items={[
            {
              label: "Limited Liability Company",
              value: "Limited Liability Company",
            },
            { label: "Sole Proprietorship", value: "Sole Proprietorship" },
            {
              label: "Publicly Listed Company",
              value: "Publicly Listed Company",
            },
            {
              label: "Private Limited Company",
              value: "Private Limited Company",
            },

            { label: "General Partnership", value: "General Partnership" },
            { label: "Limited Partnership", value: "Limited Partnership" },
            { label: "Other", value: "Other" },
          ]}
          placeholder={"e.g. Limited Liability Company"}
          label={"Business Type"}
          id={"business_type"}
          defaultSelected={business_type}
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          handleChange={(e: any) => {
            const value = e.target.value;
            form.setFieldValue("business_type", value);
            form.setFieldTouched("business_type", true);
            dispatch(updateSubscriberState({ business_type: value }));
          }}
          handleBlur={form.handleBlur}
        />
        <SelectInput
          items={use_cases_list.map((e) => ({ label: e, value: e }))}
          label={"Nature of Business"}
          placeholder={"e.g. Fashion"}
          id={"nature_of_business"}
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          defaultSelected={nature_of_business || "Sole Proprietorship"}
          handleChange={(e: any) => {
            const value = e.target.value;
            form.setFieldValue("nature_of_business", value);
            form.setFieldTouched("nature_of_business", true);
            dispatch(
              updateSubscriberState({ nature_of_business: value }),
            );
          }}
          handleBlur={form.handleBlur}
        />
      </div>
    </div>
  );
};

export default BasicInformation;
