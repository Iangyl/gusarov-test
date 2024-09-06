import { ReactNode } from 'react';
import { LabelPosition, Size } from '../../interfaces/atoms';

export interface ILabelContainer {
  id: string;
  size?: Size;
  tip?: string;
  label?: string;
  required?: boolean;
  children: ReactNode;
  labelPosition?: LabelPosition;
}
