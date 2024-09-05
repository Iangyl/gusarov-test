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
  outline = true,
  labelPosition = 'auto',
  className: customClass,
}: ITextField) => {

  // the code upside down is bullshit. I should set-up several font classes and just use it (LOL, not only font classes)
  // i should create it in index.css

  const stylesDependsOnSize = useMemo(() => {
    switch (size) {
      case 'xs':
        return {
          input: 'w-[216px] h-5 font_size_xs',
          inputContainer: 'py-0.5 px-3',
          label: 'font-medium font_size_xs',
          labelM: 'mb-1',
        };
      case 'm':
        return {
          input: 'w-[216px] h-5 font_size_xs',
          inputContainer: 'py-2 px-3',
          label: 'font-medium font_size_xs',
          labelM: 'mb-1',
        };
      case 'l':
        return {
          input: 'w-[212px] h-6 text-sm leading-6',
          inputContainer: `py-2 ${dir === 'rtl' ? 'pr-4 pl-3' : 'pr-3 pl-4'}`,
          label: '',
          labelM: 'mb-1.5',
        };
      case 'xl':
        return {
          input: 'w-[212px] h-6 text-sm leading-6',
          inputContainer: `py-3 ${dir === 'rtl' ? 'pr-4 pl-3' : 'pr-3 pl-4'}`,
          label: '',
          labelM: 'mb-1.5',
        };
    }
  }, [size]);

  return (
    <div
      className={classNames(
        labelPosition === 'inline-left'
          ? 'flex justify-between content-center'
          : stylesDependsOnSize.labelM
      )}
    >
      {label ?? <label htmlFor={id}></label>}
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
