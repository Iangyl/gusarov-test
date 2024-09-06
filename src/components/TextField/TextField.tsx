import classNames from 'classnames';
import { ITextField } from './TextField.types';
import { textFieldStyleConfig } from './index.config';
import { useMemo } from 'react';
import { InputContainer } from '../../atoms';
import LabelContainer from '../../atoms/LabelContainer/LabelContainer';

const TextField = ({
  id,
  tip,
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
  labelPosition = 'above',
  className: customClass,
}: ITextField) => {
  return (
    <LabelContainer
      id={id}
      label={label}
      labelPosition={labelPosition}
      required={required}
      size={size}
      tip={tip}
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
