import classNames from 'classnames';
import { ITextField } from './TextField.types';
import { useMemo } from 'react';

const TextField = ({
  id,
  name,
  placeholder,
  required,
  onChange,
  value,
  label,
  disabled,
  size = 'm',
  dir = 'ltr',
  labelPosition = 'auto',
  className: customClass,
}: ITextField) => {
  const stylesDependsOnSize = useMemo(() => {
    switch (size) {
      case 'xs':
        return {
          input: 'w-[216px] h-5 text-xs leading-5',
          inputContainer: 'py-0.5 px-3',
        };
      case 'm':
        return {
          input: 'w-[216px] h-5 text-xs leading-5',
          inputContainer: 'py-2 px-3',
        };
      case 'l':
        return {
          input: 'w-[212px] h-6 text-sm leading-6',
          inputContainer: `py-2 ${dir === 'rtl' ? 'pr-4 pl-3' : 'pr-3 pl-4'}`,
        };
      case 'xl':
        return {
          input: 'w-[212px] h-6 text-sm leading-6',
          inputContainer: `py-3 ${dir === 'rtl' ? 'pr-4 pl-3' : 'pr-3 pl-4'}`,
        };
    }
  }, [size]);

  return (
    <div>
      {label ?? <label></label>}
      <div>
        <input
          id={id}
          name={name}
          type="text"
          placeholder={placeholder}
          dir={dir}
          onChange={onChange}
          value={value}
          className={classNames(customClass)}
          required={required}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default TextField;
