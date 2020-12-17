import React, { ComponentType, FC } from 'react';
import Overlay from '../Overlay';

interface CanAppend {
    append?: React.ReactNode;
}

type WithOverlayProps<P extends {}> = P & {
    isOverlayVisible?: boolean;
};

const withOverlay = <P extends CanAppend>(WC: ComponentType<P>): ComponentType<WithOverlayProps<P>> => {
    const ComponentWithOverlay: FC<WithOverlayProps<P>> = props => {
        const { isOverlayVisible, append } = props;

        const appendContent = (
            <>
                <Overlay visible={isOverlayVisible} />
                {append}
            </>
        );

        return <WC {...props} append={appendContent} />
    };

    return ComponentWithOverlay;
};

export { withOverlay };
