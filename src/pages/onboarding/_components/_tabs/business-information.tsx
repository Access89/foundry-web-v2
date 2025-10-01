/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import CustomInput from '../_form/Input';
import SelectInput from '../_form/Select-Input';
import { useDispatch, useSelector } from 'react-redux';
import { updateSubscriberState } from '@/store/features/subscriber';
import { useEffect } from 'react';
import { RootState } from '@/store/store';
import { use_cases_list } from '@/utils/helper';

const BasicInformation = () => {
  const dispatch = useDispatch();
  const {
    customer_name,
    business_location,
    business_type,
    business_owner,
    nature_of_business,
  } = useSelector((state: RootState) => state.subscriber);

  useEffect(() => {
    if (
      customer_name !== '' &&
      business_location !== '' &&
      business_type !== '' &&
      business_owner !== '' &&
      nature_of_business !== ''
    ) {
      dispatch(
        updateSubscriberState({
          safe: true,
        }),
      );
    }
  }, [
    business_location,
    customer_name,
    business_type,
    business_owner,
    nature_of_business,
    dispatch,
  ]);

  const form = useFormik({
    initialValues: {
      business_name: customer_name || '',
      location: business_location || '',
      business_type: business_type || '',
      business_owner: business_owner || '',
      nature_of_business: nature_of_business || '',
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
          type={'text'}
          label={'Business name'}
          placeholder={'e.g. Jane Doe Business'}
          id={'business_name'}
          {...form}
          handleChange={(e: any) => {
            form.handleChange(e);
            dispatch(updateSubscriberState({ customer_name: e.target.value }));
          }}
        />
        <CustomInput
          type={'text'}
          label={'Your name'}
          placeholder={'e.g. Jane Doe Business'}
          id={'business_owner'}
          {...form}
          handleChange={(e: any) => {
            form.handleChange(e);
            dispatch(updateSubscriberState({ business_owner: e.target.value }));
          }}
        />
        <CustomInput
          type={'text'}
          label={'Location'}
          placeholder={'e.g. Oyarifa - Teiman'}
          id={'location'}
          {...form}
          handleChange={(e: any) => {
            form.handleChange(e);
            dispatch(
              updateSubscriberState({ business_location: e.target.value }),
            );
          }}
        />
        <SelectInput
          items={[
            {
              label: 'Limited Liability Company',
              value: 'Limited Liability Company',
            },
            { label: 'Sole Proprietorship', value: 'Sole Proprietorship' },
            {
              label: 'Publicly Listed Company',
              value: 'Publicly Listed Company',
            },
            {
              label: 'Private Limited Company',
              value: 'Private Limited Company',
            },

            { label: 'General Partnership', value: 'General Partnership' },
            { label: 'Limited Partnership', value: 'Limited Partnership' },
            { label: 'Other', value: 'Other' },
          ]}
          label={'Nature of Business'}
          placeholder={'e.g. Limited Liability Company'}
          id={'nature_of_business'}
          {...form}
          defaultSelected={'Sole Proprietorship'}
          handleChange={(e: any) => {
            dispatch(
              updateSubscriberState({ nature_of_business: e.target.value }),
            );
          }}
        />
        {nature_of_business === 'Sole Proprietorship' && (
          <SelectInput
            // items={[
            //   // { label: 'Hospital', value: 'Hospital' },
            //   { label: 'Retail', value: 'Retail' },
            //   { label: 'Financial Services', value: 'Financial Services' },
            //   {
            //     label: 'Electric Vehicle Charging Station',
            //     value: 'Electric Vehicle Charging Station',
            //   },
            //   { label: 'Fund Management', value: 'Fund Management' },
            //   { label: 'Restaurant', value: 'Restaurant' },
            //   {
            //     label: 'Logistics & Supply Chain',
            //     value: 'Logistics & Supply Chain',
            //   },
            //   { label: 'Manufacturing', value: 'Manufacturing' },
            //   { label: 'Fintech', value: 'Fintech' },
            //   { label: 'Other', value: 'Other' },
            // ]}
            items={use_cases_list.map((e) => ({ label: e, value: e }))}
            label={'Business Type'}
            placeholder={'e.g. Fashion'}
            id={'business_type'}
            {...form}
            handleChange={(e: any) => {
              dispatch(
                updateSubscriberState({ business_type: e.target.value }),
              );
            }}
          />
        )}
      </div>
    </div>
  );
};

export default BasicInformation;
