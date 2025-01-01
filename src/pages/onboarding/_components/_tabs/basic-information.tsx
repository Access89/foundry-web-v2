/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import CustomInput from "../_form/Input";
import PhoneInput from "../_form/phone-input";
import { useDispatch, useSelector } from "react-redux";
import { updateSubscriberState } from "@/store/features/subscriber";
import { RootState } from "@/store/store";
import { useEffect } from "react";

const BasicInformation = () => {
  const dispatch = useDispatch();
  const { email, mobile } = useSelector((state: RootState) => state.subscriber);

  useEffect(() => {
    if (email !== "" && mobile !== "") {
      dispatch(
        updateSubscriberState({
          safe: true,
        })
      );
    }
  }, [dispatch, email, mobile]);

  useEffect(() => {
    if (email !== "" && mobile !== "") {
      dispatch(
        updateSubscriberState({
          safe: true,
        })
      );
    }
  }, [dispatch, email, mobile]);

  const form = useFormik({
    initialValues: {
      email: "",
      phone: "",
    },
    onSubmit: () => {},
  });

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
        <CustomInput
          type="email"
          label="Email"
          placeholder="john@foundry.com"
          id="email"
          values={form.values}
          errors={form.errors}
          handleChange={(e: any) => {
            form.handleChange(e); // Update formik state
            dispatch(updateSubscriberState({ email: e.target.value })); // Update Redux state
          }}
          handleBlur={form.handleBlur}
        />
        <PhoneInput
          type="text"
          label="Phone Number"
          placeholder="23984392"
          id="phone"
          values={form.values}
          errors={form.errors}
          handleChange={(e: any) => {
            form.handleChange(e); // Update formik state
            dispatch(updateSubscriberState({ mobile: e.target.value })); // Update Redux state
          }}
          handleBlur={form.handleBlur}
        />
      </div>
    </div>
  );
};

export default BasicInformation;
