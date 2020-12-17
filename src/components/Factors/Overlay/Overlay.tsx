import React, { FC } from 'react';
import Spin from 'components/Spin';
import cx from 'classnames';
import { OverlayProps } from './Overlay.types';
import './Overlay.css';

const Overlay: FC<OverlayProps> = props => {
    const { visible } = props;

    const className = cx('Overlay', {
        Overlay_visible: visible,
    });

    return (
        <div className={className}>
            <Spin hasTransition={false} visible />
        </div>
    );
};

export { Overlay };
