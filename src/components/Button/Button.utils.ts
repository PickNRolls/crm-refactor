import { getMod } from 'utils/getMod';
import { ButtonPin, ButtonView } from './Button.types';

const getButtonMod = (modName: string, value?: string): Record<string, boolean> => {
  return getMod('Button', modName, value);
};

export const getViewMod = (view?: ButtonView): Record<string, boolean> => {
  return getButtonMod('view', view);
};

export const getPinMod = (pin?: ButtonPin): Record<string, boolean> => {
  return getButtonMod('pin', pin);
};

export const getBlockMod = (block?: boolean): Record<string, boolean> => {
  return getButtonMod('block');
};
