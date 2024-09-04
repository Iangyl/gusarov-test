type Size = 'xs' | 'm' | 'l' | 'xl';
type LabelPosition = 'inline-left' | 'above' | 'auto';
type PropsToOmit = 'size' | 'label' | 'type';

type CustomHTMLInput = Omit<HTMLInputElement, PropsToOmit>;

export interface ITextField extends CustomHTMLInput {
  size?: Size;
  label?: string;
  labelPosition?: LabelPosition;
  onChange?: (event: React.ChangeEvent) => void;
  errorMessage?: string;
  tip?: string; // string but in the future we could make possibility to make custom tip
  iconBefore?: any;
  iconAfter?: any;
  helpText?: string;
}
