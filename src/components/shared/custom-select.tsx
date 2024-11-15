import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select-input';
interface Items {
  value: string;
  label: string;
}
interface KSelectProps {
  placeholder?: string;
  items: Items[];
  label: string;
  onChange: (value: string) => void;
  errors?: Record<string, string>;
  id: string;
  extraClassName?: string;
}
const CustomSelect = ({
  placeholder,
  items,
  label,
  onChange,
  errors,
  id,
  extraClassName = '',
}: KSelectProps) => {
  return (
    <div>
      <p className="text-[0.9rem] font-normal mb-2">{label}</p>
      <Select onValueChange={onChange}>
        <SelectTrigger className={extraClassName}>
          <SelectValue
            placeholder={placeholder ?? `Select ${label.toLocaleLowerCase()}`}
          />
        </SelectTrigger>
        <SelectContent>
          {items.map((e) => {
            return (
              <SelectItem value={e.value} key={e.label}>
                {' '}
                {e.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      {errors?.[id] && (
        <p className="font-light text-[0.75rem] text-red-500 mt-[0.15rem]">
          * {errors?.[id]}
        </p>
      )}
    </div>
  );
};

export default CustomSelect;
