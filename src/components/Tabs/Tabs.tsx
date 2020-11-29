import React, { FC } from 'react';
import cx from 'classnames';
import { TabsProps } from './Tabs.types';
import Tab from './Tab';
import './Tabs.css';

const Tabs: FC<TabsProps> = (props) => {
    const className = cx('Tabs', props.className);

    return (
        <div className={className}>
            {props.options.map((option) => (
                <Tab
                    key={option.value}
                    value={option.value}
                    onClick={props.onChange}
                    active={props.value === option.value}
                    className="Tabs__Tab"
                >
                    {option.content}
                </Tab>
            ))}
        </div>
    );
};

export default Tabs;
