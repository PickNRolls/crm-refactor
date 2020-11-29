import React, { FC, useCallback } from 'react';
import cx from 'classnames';
import { TabProps } from './Tab.types';
import './Tab.css';

const Tab: FC<TabProps> = (props) => {
    const { value, onClick, active } = props;

    const handleClick = useCallback(() => {
        if (onClick) {
            onClick(value);
        }
    }, [value, onClick]);

    const className = cx('Tab', props.className, {
        Tab_active: active,
    });

    return (
        <button className={className} onClick={handleClick}>
            {props.children}
        </button>
    );
};

export default Tab;
