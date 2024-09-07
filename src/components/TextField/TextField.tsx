import classNames from 'classnames';
import { ITextField } from './TextField.types';
import { textFieldStyleConfig } from './index.config';
import { InputContainer } from '../../atoms';
import LabelContainer from '../../atoms/LabelContainer/LabelContainer';
import { useEffect, useMemo, useRef, useState } from 'react';

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
  iconAfter,
  iconBefore,
  size = 'm',
  dir = 'ltr',
  outline = true,
  labelPosition = 'above',
  className: customClass,
}: ITextField) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [displayValue, setDisplayValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const textTruncate = () => {
    if (inputRef.current) {
      const inputElement = inputRef.current;

      const measureText = (text: string) => {
        const span = document.createElement('span');
        span.style.visibility = 'hidden';
        span.style.whiteSpace = 'nowrap';
        span.style.position = 'absolute';
        span.style.font = window.getComputedStyle(inputElement).font || '';
        span.textContent = text;
        document.body.appendChild(span);
        const width = span.offsetWidth;
        document.body.removeChild(span);
        return width;
      };

      const truncateText = (text?: string) => {
        if (!text) return text;

        const inputWidth = inputElement.offsetWidth;
        let truncatedText = text;
        while (
          truncatedText.length > 0 &&
          measureText(truncatedText + '...') > inputWidth
        ) {
          truncatedText = truncatedText.slice(0, -1);
        }
        return truncatedText.length < text.length
          ? truncatedText + '...'
          : truncatedText;
      };

      setDisplayValue(truncateText(value));
    }
  };

  useEffect(() => {
    textTruncate();
  }, [value]);

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
        iconAfter={iconAfter}
        iconBefore={iconBefore}
        isFocused={isFocused}
      >
        <input
          id={id}
          ref={inputRef}
          name={name}
          type="text"
          placeholder={placeholder}
          dir={dir}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={displayValue}
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
