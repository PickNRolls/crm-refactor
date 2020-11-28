import React, { ChangeEvent, ComponentType, FC, useCallback, useRef } from 'react';
import cn from 'classnames';
import { TextinputInnerProps, TextinputOuterProps } from './Textinput.types';
import onClickOutside from 'react-onclickoutside';
import { withAnimation } from './withAnimation';
import './Textinput.css';

interface OutsideClickInjection {
  handleClickOutside?: () => void;
}

const Textinput: FC<TextinputInnerProps> & OutsideClickInjection = props => {
  const {
    placeholder,
    prepend = null,
    className,
    value,
    name,
    onChange,
    onFocus,
    onBlur,
    onOutsideClick
  } = props;
  const controlRef = useRef<HTMLInputElement>();

  Textinput.handleClickOutside = () => onOutsideClick();

  const handleClick = useCallback(() => {
    controlRef.current.focus();
    if (onFocus) {
      onFocus();
    }
  }, [onFocus, controlRef]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  }, [onChange]);

  return (
    <div className={cn('Textinput', className)} onClick={handleClick}>
      {prepend}
      <input
        type="text"
        key={name}
        name={name}
        className="Textinput__Control"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        ref={controlRef}
      />
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => Textinput.handleClickOutside
};

export default withAnimation(onClickOutside(Textinput, clickOutsideConfig)) as ComponentType<TextinputOuterProps>;
