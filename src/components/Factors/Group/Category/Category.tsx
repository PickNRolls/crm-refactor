import React, { FC, useCallback } from 'react';
import Factor from './Factor';
import { CategoryProps } from './Category.types';
import './Category.css';
import { RenderFactor } from 'components/Factors/Factors.types';
import { useRenderProp } from 'hooks/useRenderProp';

const Category: FC<CategoryProps> = props => {
    const { id, onFactorClick } = props;

    const handleFactorClick = useCallback((factorId: string) => {
        if (!onFactorClick) {
            return;
        }

        onFactorClick({
            categoryId: id,
            factorId,
        });
    }, [onFactorClick, id]);

    const FactorRender = useRenderProp<RenderFactor>((renderProps) => (
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
