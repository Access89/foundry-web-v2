import { Select, SelectItem } from '@nextui-org/react';
import type { ChangeEventHandler, FocusEventHandler } from 'react';

type FormValues = Record<string, string>;
type FormErrors = Partial<Record<string, string>>;
type FormTouched = Partial<Record<string, boolean>>;

interface Props {
  label: string;
  placeholder: string;
  values: FormValues;
  errors: FormErrors;
  touched?: FormTouched;
  id: string;
  handleBlur: FocusEventHandler<HTMLElement>;
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  items: {
    label: string;
    value: string;
  }[];
  defaultSelected?: string;
}
const SelectInput = ({
  label,
  placeholder,
  id,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  items,
  defaultSelected,
}: Props) => {
  const showError = touched?.[id] && errors?.[id];
  const selectedValue = values[id] || defaultSelected || "";

  return (
    <Select
      id={id}
      onBlur={handleBlur}
      onChange={handleChange}
      items={items}
      label={label}
      placeholder={placeholder}
      selectedKeys={selectedValue ? [selectedValue] : []}
      errorMessage={showError || ''}
      isInvalid={!!showError}
      className="max-w-full"
    >
      {(itms) => <SelectItem key={itms.value}>{itms.label}</SelectItem>}
    </Select>
  );
};

export default SelectInput;
