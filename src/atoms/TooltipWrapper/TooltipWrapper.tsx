import { useEffect, useRef, useState } from 'react';
import Tooltip from '../../components/Tooltip/Tooltip';
import { ITooltipWrapper } from './TooltipWrapper.types';
import classNames from 'classnames';

const TooltipWrapper = ({ children, tip, tailPosition }: ITooltipWrapper) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipStyles, setTooltipStyles] = useState({ top: 0, left: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    if (wrapperRef.current && tooltipRef.current) {
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const top = wrapperRect.top - tooltipRect.height - 8; // 8px margin
      const left =
        wrapperRect.left + wrapperRect.width / 2 - tooltipRect.width / 2;

      setTooltipStyles({ top, left });
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <Tooltip
        tip={tip}
        ref={tooltipRef}
        tailPosition={tailPosition}
        style={{ top: tooltipStyles.top, left: tooltipStyles.left }}
        className={classNames(
          'absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2',
          isOpen ? 'block' : 'hidden'
        )}
      />
      <div
        onClick={handleOpen}
        onMouseEnter={handleOpen}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default TooltipWrapper;
