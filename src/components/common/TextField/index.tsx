import { ChangeEvent, useCallback, useState } from 'react';

interface TextFieldProps {
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  minLength = 0,
  maxLength = 10,
  required = true,
  onChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState<string>('');

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.length > maxLength) {
        event.target.value = value;
        return;
      }

      if (onChange) onChange(event);
      setValue(() => event.target.value);
    },
    [maxLength, onChange, value],
  );

  return (
    <div className="flex w-full gap-1 rounded-xl border border-black p-3">
      <input
        className="w-full outline-none"
        pattern={`.{${minLength}, ${maxLength}}`}
        onChange={handleOnChange}
        value={value}
        {...props}
      />
      <span
        className={`${
          value.length < maxLength ? 'text-neutral-400' : 'text-red-500'
        }`}
      >{`${value.length}/${maxLength}`}</span>
    </div>
  );
};

export default TextField;
