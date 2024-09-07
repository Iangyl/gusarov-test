import { Direction, Size } from '../../interfaces/atoms';

export interface IInputContainer {
  size?: Size;
  dir?: Direction;
  error?: boolean;
  outline?: boolean;
  className?: string;
  isFocused?: boolean;
  children: React.ReactNode;
  iconAfter?: React.ReactNode;
  iconBefore?: React.ReactNode;
}
