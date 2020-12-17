import React, { FC } from 'react';
import cx from 'classnames';
import { SpinProps } from './Spin.types';
import './Spin.css';

const Spin: FC<SpinProps> = props => {
    const { hasTransition = true } = props;

    const className = cx('Spin', {
        Spin_hasTransition: hasTransition,
        Spin_visible: props.visible,
    });

    return (
        <div className={className} />
    );
};

export { Spin };
