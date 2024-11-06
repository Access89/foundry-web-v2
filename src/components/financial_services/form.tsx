import { useFormik } from 'formik';
import TextInput from '../shared/text-input';
import CustomSelect from '../shared/custom-select';
import { countries } from '@/utils/countries';
// import SelectInput from '../shared/select-input';

const FinancialServicesForm = () => {
  const { setFieldValue, handleChange, handleBlur, ...form } = useFormik({
    initialValues: {
      business_name: '',
      industry: '',
      contact_person: '',
      email: '',
      phone_number: '',
      country: '',
      services: '',
      additional_information: '',
    },
    onSubmit(values, formikHelpers) {
      console.log(values, formikHelpers);
    },
  });
  function handleSelectChange(value: string, field: string) {
    setFieldValue(field, value);
  }

  return (
    <form action="#" className="flex flex-col gap-4 p-0 mt-4">
      <TextInput
        placeholder="Access 89"
        label="Business name"
        id="business_name"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        {...form}
      />
      <CustomSelect
        items={[{ label: 'Health', value: 'Value' }]}
        label={'Industry'}
        onChange={(value) => {
          handleSelectChange('industry', value);
        }}
        id={'industry'}
      />
      <TextInput
        placeholder="John Doe"
        label="Contact person"
        id="contact_person"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        {...form}
      />
      <TextInput
        placeholder="hello@example.com"
        label="Email"
        id="email"
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        {...form}
      />
      <TextInput
        placeholder="021231231"
        label="Phone number"
        id="phone_number"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        {...form}
      />
      <CustomSelect
        items={countries}
        label={'Country'}
        onChange={(value) => {
          handleSelectChange('country', value);
        }}
        id={'country'}
      />
      <CustomSelect
        items={[{ label: 'Health', value: 'Value' }]}
        label={'Services'}
        onChange={(value) => {
          handleSelectChange('services', value);
        }}
        id={'services'}
      />
      <button
        className="bg-foundry-primary text-white rounded-lg py-2 mt-4"
        onClick={() => {
          console.log(form.values);
        }}
      >
        Submit request
      </button>
    </form>
  );
};

export default FinancialServicesForm;
