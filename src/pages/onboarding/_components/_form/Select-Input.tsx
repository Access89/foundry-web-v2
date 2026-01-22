/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, SelectItem } from '@nextui-org/react';
interface props {
  label: string;
  placeholder: string;
  values: Record<string, string>;
  errors: Record<string, string>;
  touched?: Record<string, boolean>;
  id: string;
  handleBlur: any;
  handleChange: any;
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
}: props) => {
  const showError = touched?.[id] && errors?.[id];

  return (
    <Select
      id={id}
      onBlur={handleBlur}
      onChange={handleChange}
      items={items}
      label={label}
      placeholder={placeholder}
      value={values[id] || defaultSelected}
      defaultSelectedKeys={defaultSelected ? [defaultSelected] : undefined}
      errorMessage={showError || ''}
      isInvalid={!!showError}
      className="max-w-full"
    >
      {(itms) => <SelectItem key={itms.value}>{itms.label}</SelectItem>}
    </Select>
  );
};

export default SelectInput;
