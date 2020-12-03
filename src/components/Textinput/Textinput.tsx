import React, { CSSProperties, FC } from 'react';
import cx from 'classnames';
import Label from './Label';
import Error from './Error';
import { TextinputProps } from './Textinput.types';
import './Textinput.css';

const Textinput: FC<TextinputProps> = (props) => {
  const { radius = 5, label, name, placeholder, value = '', onChange, type = 'text', error } = props;

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
        <Label className="Textinput__Label" name={name}>
          {label}
        </Label>
      )}
      <div className="Textinput__Box">
        <input
          value={value}
          onChange={onChange}
          className="Textinput__Control"
          style={controlStyle}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </div>
      {error && (
        <Error className="Textinput__Error">{error}</Error>
      )}
    </div>
  );
};

export default Textinput;
