/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import CustomInput from "../_form/Input";
import SelectInput from "../_form/Select-Input";
import { useDispatch, useSelector } from "react-redux";
import { updateSubscriberState } from "@/store/features/subscriber";
import { useEffect } from "react";
import { RootState } from "@/store/store";

const BasicInformation = () => {
  const dispatch = useDispatch();
  const { customer_name, business_location, business_type } = useSelector(
    (state: RootState) => state.subscriber
  );

  useEffect(() => {
    if (
      customer_name !== "" &&
      business_location !== "" &&
      business_type !== ""
    ) {
      dispatch(
        updateSubscriberState({
          safe: true,
        })
      );
    }
  }, [business_location, customer_name, business_type, dispatch]);

  const { ...form } = useFormik({
    initialValues: {
      business_name: "",
      location: "",
      business_type: "",
    },
    onSubmit: () => {},
  });

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
          placeholder={"e.g. Cepodek"}
          id={"email"}
          {...form}
          handleChange={(e: any) => {
            dispatch(updateSubscriberState({ customer_name: e.target.value }));
          }}
        />
        <CustomInput
          type={"text"}
          label={"Location"}
          placeholder={"e.g. Oyarifa - Teiman"}
          id={"email"}
          {...form}
          handleChange={(e: any) => {
            dispatch(
              updateSubscriberState({ business_location: e.target.value })
            );
          }}
        />
        <SelectInput
          items={[
            { label: "Limited Liability", value: "Limited Liability" },
            { label: "Sole Proprietorship", value: "Sole Proprietorship" },
          ]}
          label={"Nature of Business"}
          placeholder={"e.g. Limited Liability"}
          id={"email"}
          {...form}
          handleChange={(e: any) => {
            dispatch(
              updateSubscriberState({ nature_of_business: e.target.value })
            );
          }}
        />
        <SelectInput
          items={[
            // { label: 'Hospital', value: 'Hospital' },
            { label: "Retail", value: "Retail" },
            // { label: 'School', value: 'School' },
            { label: "Wholesale", value: "Wholesale" },
            { label: "Micro Finance", value: "Micro Finance" },
            { label: "Micro Credit", value: "Micro Credit" },
            { label: "Restaurant", value: "Restaurant" },
            { label: "Savings and Loans", value: "Savings and Loans" },
            { label: "Fund Management", value: "Fund Management" },
          ]}
          label={"Business Type"}
          placeholder={"e.g. Retail"}
          id={"email"}
          {...form}
          handleChange={(e: any) => {
            dispatch(updateSubscriberState({ business_type: e.target.value }));
          }}
        />
      </div>
    </div>
  );
};

export default BasicInformation;
