import { Input } from "@nextui-org/react";
import type { ChangeEventHandler, FocusEventHandler } from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

type FormValues = Record<string, string>;
type FormErrors = Partial<Record<string, string>>;
type FormTouched = Partial<Record<string, boolean>>;

interface Props {
  type: string;
  label: string;
  placeholder: string;
  values: FormValues;
  errors: FormErrors;
  touched?: FormTouched;
  id: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
}
const PhoneInput = ({
  type,
  label,
  placeholder,
  errors,
  touched,
  id,
  values,
  handleChange,
  handleBlur,
}: Props) => {
  const { country_code } = useSelector((state: RootState) => state.subscriber);

  const showError = touched?.[id] && errors?.[id];

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
          id={`${id}_country_code`}
          type={type}
          label={"Country Code"}
          placeholder={placeholder}
          value={country_code || ""}
          disabled
          className="col-span-5"
          classNames={{
            inputWrapper: "h-14",
            input: "text-[16px]",
            label: "whitespace-nowrap",
          }}
        />
      </div>
      <Input
        id={id}
        type={type}
        label={label}
        placeholder={placeholder}
        errorMessage={showError || ""}
        isInvalid={!!showError}
        value={values?.[id] || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        className="col-span-5"
        classNames={{
          inputWrapper: "h-14",
          input: "text-[16px]",
        }}
      />
    </div>
  );
};

export default PhoneInput;
