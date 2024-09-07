import classNames from 'classnames';
import { ITextField } from './TextField.types';
import { textFieldStyleConfig } from './index.config';
import { InputContainer, LabelContainer } from '../../atoms';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [truncatedPlaceholder, setTruncatedPlaceholder] = useState(placeholder);

  useEffect(() => {
    const truncatePlaceholder = () => {
      if (!placeholder) return placeholder;

      if (inputRef.current) {
        const inputElement = inputRef.current;
        const inputWidth = inputElement.offsetWidth;

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

        let truncatedText = placeholder;
        while (
          truncatedText.length > 0 &&
          measureText(truncatedText + '...') > inputWidth
        ) {
          truncatedText = truncatedText.slice(0, -1);
        }

        setTruncatedPlaceholder(
          truncatedText.length < placeholder.length
            ? truncatedText + '...'
            : truncatedText
        );
      }
    };

    truncatePlaceholder();

    const handleResize = () => truncatePlaceholder();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [placeholder]);

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
          placeholder={truncatedPlaceholder}
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
