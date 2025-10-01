/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, SelectItem } from '@nextui-org/react';
interface props {
  label: string;
  placeholder: string;
  values: Record<string, string>;
  errors: Record<string, string>;
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
  handleBlur,
  handleChange,
  items,
  defaultSelected,
}: props) => {
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
      className="max-w-full"
    >
      {(itms) => <SelectItem key={itms.value}>{itms.label}</SelectItem>}
    </Select>
  );
};

export default SelectInput;
