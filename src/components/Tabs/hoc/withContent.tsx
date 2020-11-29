import React, { FC } from 'react';
import cx from 'classnames';
import Tabs from '../Tabs';
import { Content, WithContentOuterProps } from './withContent.types';

const getContent = (content: Content, value: string | number): React.ReactNode => {
    if (content[value]) {
        return content[value];
    }

    return null;
};

const withContent = (tabs: typeof Tabs): FC<WithContentOuterProps> => (props) => {
    const { options, value, onChange, content } = props;

    const className = cx(props.className, 'Tabs@withContent');

    return (
        <div className={className}>
            <Tabs options={options} value={value} onChange={onChange} />
            <div className="Tabs@withContent__content">
                {getContent(content, value)}
            </div>
        </div>
    );
};

export { withContent };
