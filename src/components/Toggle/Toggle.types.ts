export interface Option {
  value: string;
  content: React.ReactNode;
}

export interface ToggleProps {
  className?: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}