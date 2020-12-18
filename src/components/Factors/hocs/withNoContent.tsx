import React, { ComponentType, FC } from 'react';
import Overlay from '../Overlay';

interface CanInnerAppend {
    innerAppend?: React.ReactNode;
}

type WithOverlayProps<P extends {}> = P & {
    isOverlayVisible?: boolean;
};

const withOverlay = <P extends CanInnerAppend>(WC: ComponentType<P>): ComponentType<WithOverlayProps<P>> => {
    const ComponentWithOverlay: FC<WithOverlayProps<P>> = props => {
        const { isOverlayVisible, innerAppend } = props;

        const appendContent = (
            <>
                <Overlay visible={isOverlayVisible} />
                {innerAppend}
            </>
        );

        return <WC {...props} innerAppend={appendContent} />
    };

    return ComponentWithOverlay;
};

export { withOverlay };
