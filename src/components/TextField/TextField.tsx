import classNames from 'classnames';
import { ITextField } from './TextField.types';
import { textFieldStyleConfig } from './index.config';
import { InputContainer } from '../../atoms';
import LabelContainer from '../../atoms/LabelContainer/LabelContainer';
import { useMemo, useState } from 'react';

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
  error,
  disabled,
  size = 'm',
  dir = 'ltr',
  outline = true,
  labelPosition = 'above',
  className: customClass,
}: ITextField) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const isError = useMemo(
    () => (error && error?.length > 1 ? true : false),
    [error]
  );

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

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
      error={error}
    >
      <InputContainer
        size={size}
        dir={dir}
        outline={outline}
        error={isError}
        isFocused={isFocused}
      >
        <input
          id={id}
          name={name}
          type="text"
          placeholder={placeholder}
          dir={dir}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
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
