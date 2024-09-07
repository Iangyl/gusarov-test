import { Direction, LabelPosition, Size } from '../../interfaces/atoms';

export interface ITextField {
  id: string;
  name: string;
  size?: Size;
  label?: string;
  labelPosition?: LabelPosition;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  tip?: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  hint?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  className?: string;
  dir?: Direction;
  disabled?: boolean;
  outline?: boolean;
}
