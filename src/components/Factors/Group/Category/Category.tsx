import React, { FC } from 'react';
import Factor from './Factor';
import { CategoryProps } from './Category.types';
import { createRender } from 'utils/render/createRender';
import { FactorProps } from './Factor/Factor.types';
import './Category.css';

const Category: FC<CategoryProps> = props => {
    const { id, onFactorClick } = props;

    const handleFactorClick = (factorId: string) => {
        if (!onFactorClick) {
            return;
        }

        onFactorClick({
            categoryId: id,
            factorId,
        });
    };

    const FactorRender = createRender<FactorProps>((renderProps) => (
        <Factor {...renderProps} />
    ), props.renderFactor);

    return (
        <div className="Category">
            <div className="Category__title">
                {props.title}
            </div>
            <div className="Category__factors">
                {props.factors.map((factor) => (
                    <FactorRender
                        key={factor.id}
                        id={factor.id}
                        name={factor.name}
                        active={factor.active}
                        disabled={factor.disabled}
                        onClick={handleFactorClick}
                    />
                ))}
            </div>
        </div>
    );
};

export { Category };
