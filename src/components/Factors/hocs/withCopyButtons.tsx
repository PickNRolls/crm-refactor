import React, { ComponentType, FC } from 'react';
import { RenderProp, useRenderProp } from 'hooks/useRenderProp';
import { RenderFactor } from '../Factors.types';

interface CanRenderFactor {
    renderFactor?: RenderProp<RenderFactor>;
}

const withCopyButtons = <P extends CanRenderFactor>(WC: ComponentType<P>): ComponentType<P> => {
    const ComponentWithCopyButtons: FC<P> = props => {
        const renderFactor: RenderProp<RenderFactor> = (defaultRender) => (renderProps) => {
            return defaultRender({
                ...renderProps,
                append: (
                    <button onClick={() => console.log(renderProps.id)}>
                        copy
                    </button>
                ),
            });
        };

        return <WC {...props} renderFactor={renderFactor} />
    };

    return ComponentWithCopyButtons;
};

export { withCopyButtons };
