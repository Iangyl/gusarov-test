type TailPosition = 'left' | 'right' | 'top' | 'bottom';

export interface ITooltip {
  tip: string;
  tailPosition?: TailPosition;
}
