import React, { ComponentType, useCallback, useState } from 'react';
import cn from 'classnames';
import { TextinputInnerProps, TextinputOuterProps } from '../Textinput.types';

export const withPlaceholderAnimation = (Textinput: ComponentType<TextinputInnerProps>) => (props: TextinputOuterProps) => {
  const { prepend = null, animate, placeholder, onFocus, onOutsideClick, value = '' } = props;
  const forwardProps = { ...props };
  delete forwardProps.animate;

  const [visible, setVisible] = useState(true);
  const [raised, setRaised] = useState(value && Boolean(value.length));

  const handleFocus = useCallback(() => {
    setVisible(true);
    setRaised(true);
    if (onFocus) {
      onFocus();
    }
  }, [onFocus]);

  const handleOutsideClick = useCallback(() => {
    if (!value || !value.length) {
      setRaised(false);
    } else {
      setVisible(false);
    }

    if (onOutsideClick) {
      onOutsideClick();
    }
  }, [setRaised, setVisible, onOutsideClick, value]);

  let prependAddon: React.ReactNode = prepend;
  if (animate && animate.placeholder) {
    const className = cn('Textinput__Placeholder', {
      Textinput__Placeholder_raised: raised,
      Textinput__Placeholder_visible: visible,
    });

    prependAddon = animate && animate.placeholder && (
      <>
        {prepend}
        <span className={className}>
          {placeholder}
        </span>
      </>
    );

    delete forwardProps.placeholder;
  }

  return (
    <Textinput
      {...forwardProps}
      prepend={prependAddon}
      onFocus={handleFocus}
      onOutsideClick={handleOutsideClick}
    />
  );
};
