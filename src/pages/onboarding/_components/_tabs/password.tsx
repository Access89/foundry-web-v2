/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import CustomInput from '../_form/Input';
import { useDispatch, useSelector } from 'react-redux';
import { updateSubscriberState } from '@/store/features/subscriber';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { CustomButton } from '@/components/shared/shared_customs';
import { cn } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const PasswordSetting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  } = useSelector((state: RootState) => state.subscriber);

  // State to track which plan's button is loading

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
    };

    navigate('/onboarding/download-apps-and-other-offers', {
      state: {
        payload: {
          payload_data: payload,
        },
      },
    });
  };

  const { ...form } = useFormik({
    initialValues: {
      password: password || '',
      confirm_password: '',
    },
    onSubmit: () => {},
  });

  useEffect(() => {
    if (
      form.values.confirm_password === form.values.password &&
      form.values.password !== ''
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
  }, [form.values.confirm_password, form.values.password, dispatch]);

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
            type={'password'}
            label={'Password'}
            placeholder={''}
            id={'password'}
            {...form}
            // value={form.values.password}
            handleChange={(e: any) => {
              form.setFieldValue('password', e.target.value);
              dispatch(updateSubscriberState({ password: e.target.value }));
            }}
          />
          <CustomInput
            type={'password'}
            label={'Confirm Password'}
            placeholder={''}
            id={'confirm_password'}
            {...form}
            handleChange={(e: any) => {
              form.setFieldValue('confirm_password', e.target.value); // Correct usage
            }}
          />
        </div>
      </div>

      <CustomButton
        className={cn(
          'bg-primary text-white font-medium w-full mt-2 py-2 lg:py-4 lg:text-[0.9rem]',
        )}
        onPress={() => onSubmit()}
      >
        Submit
      </CustomButton>
    </div>
  );
};

export default PasswordSetting;
