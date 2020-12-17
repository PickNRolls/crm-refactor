import React, { FC, useCallback } from 'react';
import cx from 'classnames';
import { FactorProps } from './Factor.types';
import './Factor.css';

const Factor: FC<FactorProps> = props => {
    const { onClick, id } = props;

    const className = cx('Factor', {
        Factor_active: props.active,
        Factor_disabled: props.disabled,
    });

    const handleClick = useCallback(() => {
        if (onClick) {
            onClick(id);
        }
    }, [onClick, id]);

    return (
        <div className={className}>
            <button className="Factor__button" onClick={handleClick}>
                <div className="Factor__name">
                    {props.name}
                </div>
            </button>
            {props.append}
        </div>
    );
};

export { Factor };
