import React, { FC, useCallback } from 'react';
import Factor from './Factor';
import { CategoryProps } from './Category.types';
import './Category.css';

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

    return (
        <div className="Category">
            <div className="Category__title">
                {props.title}
            </div>
            <div className="Category__factors">
                {props.factors.map((factor) => (
                    <Factor
                        key={factor.id}
                        name={factor.name}
                        id={factor.id}
                        onClick={handleFactorClick}
                    />
                ))}
            </div>
        </div>
    );
};

export { Category };
