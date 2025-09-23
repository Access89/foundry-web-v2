/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import CustomInput from '../_form/Input';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetSubscriber,
  SubscriberStateType,
  updateSubscriberState,
} from '@/store/features/subscriber';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
// import { variables } from '@/utils/helper';
import { mutateFn } from '@/services/mutation.api';
import { useMutation } from 'react-query';
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
    // business_type,
    // nature_of_business,
    password,
    country_code,
    business_owner,
  } = useSelector((state: RootState) => state.subscriber);

  // State to track which plan's button is loading

  const pos_api_base_url = 'https://api.access89.com/pos-api/v1';
  // const pos_api_base_url = variables.pos_api_base_url;

  const { mutate: mutateSubscriber, isLoading } = useMutation(
    (newData: SubscriberStateType) =>
      mutateFn({
        url: `${pos_api_base_url}/setup/create/setup`,
        data: newData,
      }),
    {
      onSuccess: () => {
        console.log('Subscriber created successfully');
        dispatch(resetSubscriber());
        navigate('/onboarding/download-apps-and-other-offers');

        // toast.success(
        //   'Details submitted for verification! Redirecting to Foundry Platform...',
        // );
        // window.location.href = variables.redirectUrl;
      },
      onError: (error: any) => {
        console.error('Error creating subscriber:', error);
        toast.error('Details were not submitted, please try again');
      },
    },
  );

  const onSubmit = async () => {
    // dispatch(updateSubscriberState({ subscription_plan: plan }));

    const payload = {
      company_name: customer_name,
      email: email,
      phone: country_code + mobile,
      country: country,
      password: password,
      user_name: business_owner,
      business_location: business_location,
      // business_type: business_type,
      // nature_of_business: nature_of_business,
    };

    mutateSubscriber(payload as any);

    // mutateSubscriber({
    //   customer_name,
    //   country,
    //   email,
    //   mobile: country_code + mobile,
    //   business_owner: business_owner,
    //   // subscription_plan:
    //   //   plan === "Free Tier" ? "free_tier" : plan.toLocaleLowerCase(),
    //   business_location,
    //   // business_type,
    //   // nature_of_business,
    //   password,
    // });
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
        isLoading={isLoading}
        onPress={() => onSubmit()}
      >
        Submit
      </CustomButton>
    </div>
  );
};

export default PasswordSetting;
