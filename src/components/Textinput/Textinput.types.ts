export interface AnimateConfig {
  placeholder?: boolean;
}

export interface TextinputOuterProps {
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  animate?: AnimateConfig;
  prepend?: React.ReactNode;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onOutsideClick?: () => void;
  radius?: number;
}

export type TextinputInnerProps = Omit<TextinputOuterProps, 'animate'>;
