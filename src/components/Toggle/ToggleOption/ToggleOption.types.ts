import { ButtonPin } from "../../Button/Button.types";

export interface ToggleOptionProps {
  value: string;
  content: React.ReactNode;
  active?: boolean;
  pin?: ButtonPin;
  onClick: (value: string) => void;
}
