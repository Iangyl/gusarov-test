import { useMemo } from 'react';
import { ITooltip } from './Tooltip.types';
import classNames from 'classnames';

const Tooltip = ({ tip, tailPosition = 'bottom' }: ITooltip) => {
  const tailPositionStyles = useMemo(() => {
    switch (tailPosition) {
      case 'left':
        return 'tooltip__after_pos_left';
      case 'right':
        return 'tooltip__after_pos_right';
      case 'top':
        return 'tooltip__after_pos_top';
      case 'bottom':
        return 'tooltip__after_pos_bottom';
    }
  }, [tailPosition]);

  return (
    <div
      className={classNames(
        'relative max-w-[150px] text-wrap break-words bg-midnight-moss py-2 px-3 rounded-lg',
        tailPositionStyles
      )}
    >
      <p className={classNames('font_size_xs font-semibold text-white')}>
        {tip}
      </p>
    </div>
  );
};

export default Tooltip;
