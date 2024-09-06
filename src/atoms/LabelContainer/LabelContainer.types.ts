import { ReactNode } from 'react';
import { LabelPosition, Size } from '../../interfaces/atoms';

export interface ILabelContainer {
  id: string;
  size?: Size;
  tip?: string;
  hint?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  children: ReactNode;
  labelPosition?: LabelPosition;
}
