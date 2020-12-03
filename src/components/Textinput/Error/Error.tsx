import React, { FC } from 'react';
import { ErrorProps } from './Error.types';

const Error: FC<ErrorProps> = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default Error;
