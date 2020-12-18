import React, { ComponentType, FC } from 'react';
import NoContent from '../NoContent';

interface CanShowContent {
    content?: React.ReactNode;
}

type WCProps = CanShowContent;

const withNoContentTooltip = <P extends WCProps>(WC: ComponentType<P>): ComponentType<P> => {
    const ComponentWithNoContent: FC<P> = props => {
        const { content, ...rest } = props;

        return <WC {...rest as P} content={content ? content : <NoContent />} />
    };

    return ComponentWithNoContent;
};

export { withNoContentTooltip };
