import classNames from 'classnames';
import { ITextField } from './TextField.types';

const TextField = ({
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
  return (
    <div>
      <input
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
  );
};

export default TextField;
