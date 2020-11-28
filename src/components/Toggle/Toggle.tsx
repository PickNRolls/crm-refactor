import React, { FC, useCallback } from 'react';
import cn from 'classnames';
import { ToggleProps } from './Toggle.types';
import ToggleOption from './ToggleOption';
import './Toggle.css';
import { ButtonPin } from '../Button/Button.types';

const calculatePin = (length: number, index: number): ButtonPin | undefined => {
  if (!length || length === 1) {
    return undefined;
  }

  if (index === 0) {
    return 'round-brick';
  }

  if (index === length - 1) {
    return 'brick-round';
  }

  return 'brick-brick';
};

const Toggle: FC<ToggleProps> = props => {
  const { value, options, onChange } = props;

  const handleChange = useCallback((value: string) => {
    if (onChange) {
      onChange(value);
    }
  }, [onChange]);

  const className = cn('Toggle', props.className);
  const length = options.length;
  return (
    <div className={className}>
      {options.map((option, index) => (
        <ToggleOption
          {...option}
          key={option.value}
          active={option.value === value}
          pin={calculatePin(length, index)}
          onClick={handleChange}
        />
      ))}
    </div>
  );
};

export default Toggle;
