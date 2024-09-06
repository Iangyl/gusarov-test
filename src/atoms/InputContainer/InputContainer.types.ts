import { Direction, Size } from '../../interfaces/atoms';

export interface IInputContainer {
  size?: Size;
  dir?: Direction;
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
}
