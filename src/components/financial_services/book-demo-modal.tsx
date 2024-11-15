// import { Icon } from '@iconify/react/dist/iconify.js';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { blockInvalidChar } from '@/utils/helper';
import {
  CustomInputTextField,
  CustomMultiSelectField,
  CustomSelectField,
} from '../shared/custom-text-field';
import { CustomButton } from '../shared/shared_customs';
import { countries } from '@/utils/countries';
import axios from 'axios';
import { variables } from '@/utils';
const bookAFormSchema = z.object({
  business_name: z.string(),
  industry: z.string(),
  contact_person: z.string(),
  email: z.string(),
  phone_number: z.string(),
  country: z.string(),
  services: z.string(),
  additional_information: z.string().optional(),
});

const BookADemo = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    getValues,
    watch,
  } = useForm<z.infer<typeof bookAFormSchema>>({
    resolver: zodResolver(bookAFormSchema),
  });

  watch();
  console.log(variables.base_url);
  const onSubmit = async (data: z.infer<typeof bookAFormSchema>) => {
    try {
      const response = await axios({
        url: `${variables.base_url}/landing/create/prospect`,
        data,
        method: 'post',
        withCredentials: true,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      {/* <div className="bg-green-100 flex items-center text-xs justify-center gap-x-2 py-1 mt-2">
        <Icon icon="cbi:adguard" color="#077929" />
        <p>Your information is protected</p>
      </div> */}
      <div className="px-10 pt-6">
        <h4 className="font-bold text-2xl"> Book a Demo</h4>
        <p className="font-light text-[0.85rem] ">
          Fill out the form below and our team will get in touch with you
          shortly.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-3 px-10 space-y-5">
        {data.map((item, index) => {
          const fieldName = item.name as keyof z.infer<typeof bookAFormSchema>;
          return item.type === 'select' ? (
            item?.multiple ? (
              <>
                <CustomMultiSelectField
                  selectionMode="multiple"
                  multiple={item?.multiple}
                  key={index}
                  label={item.label}
                  inputProps={{
                    ...register(fieldName),
                  }}
                  error={errors[fieldName]?.message as string}
                  options={
                    item.options as
                      | string[]
                      | Array<{ label: string; value: string }>
                  }
                  value={getValues()[fieldName]}
                />
              </>
            ) : (
              <CustomSelectField
                // multiple={item?.multiple}
                key={index}
                label={item.label}
                inputProps={{
                  ...register(fieldName),
                }}
                error={errors[fieldName]?.message as string}
                options={
                  item.options as
                    | string[]
                    | Array<{ label: string; value: string }>
                }
                value={getValues()[fieldName]}
              />
            )
          ) : (
            <CustomInputTextField
              key={index}
              inputProps={{
                ...register(fieldName),
              }}
              onKeyDown={item.type === 'number' ? blockInvalidChar : undefined}
              error={errors[fieldName]?.message as string}
              label={item.label}
              type={item.type as 'number' | 'text' | undefined}
              value={getValues()[fieldName]}
            />
          );
        })}

        <div className="w-full pt-2 pb-3">
          <CustomButton
            type="submit"
            className=" bg-foundry-primary text-white w-full text-base"
          >
            Submit
          </CustomButton>
        </div>
      </form>
    </main>
  );
};

export default BookADemo;

const data = [
  {
    label: 'Business name',
    name: 'business_name',
    type: 'text',
  },
  {
    label: 'Industry',
    name: 'industry',
    type: 'select',
    options: [
      'Banking',
      'Insurance',
      'Microfinance',
      'Credit Union',
      'Investment Banking',
      'Asset Management',
      'Fund Management',
      'Payment Services',
      'Digital Banking',
      'Fintech',
      'Lending',
      'Micro Credit',
      'Savings and Loans',
      'Other Financial Services',
    ],
  },
  {
    label: 'Contact Person',
    name: 'contact_person',
    type: 'text',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Phone Number',
    name: 'phone_number',
    type: 'text',
  },
  {
    label: 'Country',
    name: 'country',
    type: 'select',
    options: Object.values(countries),
  },
  {
    label: 'Services',
    name: 'services',
    type: 'select',
    options: [
      'Financial Services',
      'Business Automation',
      'Foundry Hub',
      'Logistics & Supply Chain',
    ],
    multiple: false,
  },
  {
    label: 'Additional Information',
    name: 'additional_information',
    type: 'text',
  },
];
