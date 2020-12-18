import React, { FC } from 'react';
import { FactorsProps } from './Factors.types';
import './Factors.css';

const Factors: FC<FactorsProps> = props => {
    return (
        <div className="Factors">
            {props.content}
        </div>
    );
};

export { Factors };
