import React, { FC } from 'react';
import Group from './Group';
import { FactorsProps } from './Factors.types';
import './Factors.css';

const Factors: FC<FactorsProps> = props => {
    return (
        <div className="Factors">
            {props.factorGroups.map((factorGroup) => (
                <Group
                    id={factorGroup.id}
                    key={factorGroup.title}
                    title={factorGroup.title}
                    categories={factorGroup.categories}
                    className="Factors__group"
                    onFactorClick={props.onFactorClick}
                />
            ))}
            {props.append}
        </div>
    );
};

export { Factors };
