type Size = 'xs' | 'm' | 'l' | 'xl';
type LabelPosition = 'inline-left' | 'above' | 'auto';

export interface ITextField {
  id: string;
  name: string;
  size?: Size;
  label?: string;
  labelPosition?: LabelPosition;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  tip?: string;
  iconBefore?: any;
  iconAfter?: any;
  helpText?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  className?: string;
  dir?: string;
  disabled?: boolean;
  outline?: boolean;
}
