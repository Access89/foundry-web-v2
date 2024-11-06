interface props {
  id: string;
  type?: 'text' | 'search' | 'url' | 'tel' | 'email' | 'password';
  label: string;
  variant?: 'bordered' | 'flat' | 'faded' | 'underlined';
  placeholder: string;
  onChange: any;
  onBlur: any;
  values: Record<string, string>;
  errors: Record<string, string>;
  extraClasses?: string;
}
const TextInput = ({
  type,
  id,
  label,
  // variant,
  placeholder,
  onChange,
  onBlur,
  values,
  errors,
}: // extraClasses,
props) => {
  return (
    <div>
      <label htmlFor={id} className="text-[0.9rem] font-normal">
        {label}
      </label>
      <input
        id={id}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={values[id]}
        placeholder={placeholder}
        className="mt-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        // className="shadow-sm ring-inset focus:ring-1 focus:ring-offset-2 focus:ring-foundry-primary focus:outline-foundry-primary  focus:border-foundry-primary block w-full sm:text-sm  rounded-lg p-2 mt-2"
      />
      {errors[id] && <p>Sample error message</p>}
    </div>
  );
};

export default TextInput;
