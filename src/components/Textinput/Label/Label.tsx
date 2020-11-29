import React, { FC } from 'react';
import { LabelProps } from './Label.types';

const Label: FC<LabelProps> = (props) => {
    return (
        <label htmlFor={props.name} className={props.className}>
            {props.children}
        </label>
    );
};

export default Label;
