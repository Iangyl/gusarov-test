import { ITooltip } from '../../components/Tooltip/Tooltip.types';

export interface ITooltipWrapper extends ITooltip {
  children: React.ReactNode;
}
