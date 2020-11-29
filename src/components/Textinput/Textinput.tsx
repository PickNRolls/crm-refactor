import React, { ChangeEvent, ComponentType, CSSProperties, FC, useCallback, useRef } from 'react';
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
    value,
    name,
    onChange,
    onFocus,
    onBlur,
    onOutsideClick,
    radius,
  } = props;
  const controlRef = useRef<HTMLInputElement>();

  Textinput.handleClickOutside = () => {
    onOutsideClick();
  }

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

  const className = cn('Textinput', props.className);
  const style: CSSProperties = {
    borderRadius: `${radius}px`,
  };

  return (
    <div className={className} style={style} onClick={handleClick}>
      {prepend}
      <input
        type="text"
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
