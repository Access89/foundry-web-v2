/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@nextui-org/react";
// import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
// import { countries } from "../../_utils/misc";
// import { Icon } from "@iconify/react/dist/iconify.js";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
interface props {
  type: string;
  label: string;
  placeholder: string;
  values: Record<string, string>;
  errors: Record<string, string>;
  id: string;
  handleChange: any;
  handleBlur: any;
}
const PhoneInput = ({
  type,
  label,
  placeholder,
  errors,
  id,
  values,
  handleChange,
  handleBlur,
}: props) => {
  // const reordered_counties = [
  //   ...countries.map((c) => c).sort((a, b) => a.name.localeCompare(b.name)),
  // ];
  const { country_code } = useSelector((state: RootState) => state.subscriber);

  return (
    <div className="grid grid-cols-7 gap-3">
      <div className="h-14 col-span-2">
        {/* <Autocomplete
          label="Country code"
          className="max-w-xs "
          defaultItems={reordered_counties}
        >
          {(country) => (
            <AutocompleteItem
              key={country.name}
              textValue={country.phoneCode || country_code}
            >
              <div className="flex items-center gap-3">
                <Icon icon={country.icon} />
                <p>{country.phoneCode || country_code}</p>
              </div>
            </AutocompleteItem>
          )}
        </Autocomplete> */}
        <Input
          id={id}
          type={type}
          label={'Country Code'}
          placeholder={placeholder}
          errorMessage={errors[id]}
          value={country_code}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled
          className="col-span-5"
          classNames={{
            inputWrapper: 'h-14',
            input: 'text-[16px]',
            label: "whitespace-nowrap"
          }}
        />
      </div>
      <Input
        id={id}
        type={type}
        label={label}
        placeholder={placeholder}
        errorMessage={errors[id]}
        value={values[id]}
        onChange={handleChange}
        onBlur={handleBlur}
        className="col-span-5"
        classNames={{
          inputWrapper: 'h-14',
          input: 'text-[16px]',
        }}
      />
    </div>
  );
};

export default PhoneInput;
