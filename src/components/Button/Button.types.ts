export type ButtonView = 'default' | 'active' | 'action';

export type ButtonPin = 'round-brick' | 'brick-brick' | 'brick-round';

export interface ButtonProps {
  className?: string;
  view?: ButtonView;
  pin?: ButtonPin;
  onClick?: (event: React.MouseEvent) => void;
}
