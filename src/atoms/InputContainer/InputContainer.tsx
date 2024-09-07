import { useCallback } from 'react';
import { IInputContainer } from './InputContainer.types';
import classNames from 'classnames';

const InputContainer = ({
  error,
  children,
  className,
  isFocused,
  iconAfter,
  iconBefore,
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

  const getFocusStyles = useCallback(() => {
    if (error) {
      return 'border-peach-blossom input-container_shadow-color_error';
    } else {
      return 'border-sky-blue input-container_shadow-color_default';
    }
  }, [isFocused]);
  return (
    <div
      className={classNames(
        'flex items-center gap-2',
        getStyles(),
        'border',
        'rounded',
        'bg-white',
        outline ? 'border-snowflake-silk' : 'border-transparent',
        error && 'border-sunset-ember',
        isFocused && getFocusStyles(),
        className
      )}
    >
      {iconBefore}
      {children}
      {iconAfter}
    </div>
  );
};

export default InputContainer;
