type TailPosition = 'left' | 'right' | 'top' | 'bottom';

export interface ITooltip {
  tip: string;
  ref?: React.RefObject<HTMLDivElement>;
  style?: React.CSSProperties;
  className?: string;
  tailPosition?: TailPosition;
}
