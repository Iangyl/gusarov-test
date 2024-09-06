import { useCallback } from 'react';
import { IInputContainer } from './InputContainer.types';
import classNames from 'classnames';

const InputContainer = ({
  children,
  className,
  size = 'm',
  dir = 'ltr',
  outline = true,
}: IInputContainer) => {
  const getStyles = useCallback(() => {
    switch (size) {
      case 'xs':
        return 'input-container_size_xs';
      case 'm':
        return 'input-container_size_m';
      case 'l':
        return `input-container_size_l ${dir === 'ltr' ? 'input-container_size_l-xl_dir_ltr' : 'input-container_size_l-xl_dir_rtl'}`;
      case 'xl':
        return `input-container_size_xl ${dir === 'ltr' ? 'input-container_size_l-xl_dir_ltr' : 'input-container_size_l-xl_dir_rtl'}`;
    }
  }, [dir, size]);
  return (
    <div
      className={classNames(
        getStyles(),
        'border',
        'rounded',
        'bg-white',
        outline ? 'border-snowflake-silk' : 'border-transparent',
        className
      )}
    >
      {children}
    </div>
  );
};

export default InputContainer;
