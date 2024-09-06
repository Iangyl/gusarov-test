import classNames from 'classnames';
import { ITextField } from './TextField.types';
import { textFieldStyleConfig } from './index.config';
import { InputContainer } from '../../atoms';
import LabelContainer from '../../atoms/LabelContainer/LabelContainer';

const TextField = ({
  id,
  tip,
  name,
  placeholder,
  required,
  onChange,
  hint,
  value,
  label,
  disabled,
  size = 'm',
  dir = 'ltr',
  outline = true,
  labelPosition = 'above',
  className: customClass,
}: ITextField) => {
  return (
    <LabelContainer
      id={id}
      label={label}
      labelPosition={labelPosition}
      required={required}
      disabled={disabled}
      size={size}
      tip={tip}
      hint={hint}
    >
      <InputContainer size={size} dir={dir} outline={outline}>
        <input
          id={id}
          name={name}
          type="text"
          placeholder={placeholder}
          dir={dir}
          onChange={onChange}
          value={value}
          className={classNames(
            textFieldStyleConfig.font[size],
            textFieldStyleConfig.textfield.size[size],
            disabled && 'cursor-not-allowed',
            customClass
          )}
          required={required}
          disabled={disabled}
        />
      </InputContainer>
    </LabelContainer>
  );
};

export default TextField;
