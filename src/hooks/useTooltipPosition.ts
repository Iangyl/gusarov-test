import { useState } from 'react';

const useTooltipPosition = () => {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const showTooltip = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setTooltipPosition({ x: clientX, y: clientY });
    setIsTooltipVisible(true);
  };

  const hideTooltip = () => {
    setIsTooltipVisible(false);
  };

  return {
    tooltipPosition,
    isTooltipVisible,
    showTooltip,
    hideTooltip,
  };
};

export default useTooltipPosition;
