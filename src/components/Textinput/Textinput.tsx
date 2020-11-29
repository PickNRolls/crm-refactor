import React, { CSSProperties, FC } from 'react';
import cx from 'classnames';
import Label from './Label';
import { TextinputProps } from './Textinput.types';
import './Textinput.css';

const Textinput: FC<TextinputProps> = (props) => {
  const { radius = 5, label, name, placeholder, value = '', onChange } = props;

  const className = cx('Textinput', props.className);
  const style: CSSProperties = {
    borderRadius: `${radius}px`,
  };
  const controlStyle: CSSProperties = {
    borderRadius: `${radius}px`,
  };

  return (
    <div className={className} style={style}>
      {label && (
        <Label className="Textinput-Label" name={name}>
          {label}
        </Label>
      )}
      <div className="Textinput-Box">
        <input
          value={value}
          onChange={onChange}
          className="Textinput-Control"
          style={controlStyle}
          type="text"
          name={name}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Textinput;
