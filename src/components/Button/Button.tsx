import React, { FC, useCallback } from 'react';
import cn from 'classnames';
import { ButtonProps } from './Button.types';
import { getPinMod, getViewMod } from './Button.utils';
import './Button.css';

const Button: FC<ButtonProps> = props => {
  const { onClick, view = 'default', pin } = props;

  const className = cn('Button', props.className, {
    ...getViewMod(view),
    ...getPinMod(pin),
  });

  const handleClick = useCallback((event: React.MouseEvent) => {
    if (onClick) {
      onClick(event);
    }
  }, [onClick]);

  return (
    <button className={className} onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
