import React, { ComponentType, FC } from 'react';
import { connectRender } from 'utils/render/connectRender';
import { NextRenderFunction, RenderChain, RenderFunction } from 'utils/render/createRender';
import { FactorProps } from '../Group/Category/Factor/Factor.types';

interface CanRenderFactor {
    renderFactor?: RenderChain<FactorProps>;
}

const withCopyButtons = <P extends CanRenderFactor>(WC: ComponentType<P>): ComponentType<P> => {
    const ComponentWithCopyButtons: FC<P> = props => {
        const renderCopyButton: NextRenderFunction<FactorProps> = (renderProps) => (prevRender) => {
            return prevRender({
                ...renderProps,
                innerAppend: (
                    <>
                        <button onClick={() => console.log(renderProps.id)}>
                            copy1
                        </button>
                        {renderProps.innerAppend}
                    </>
                ),
            });
        };

        const renderFactor = connectRender(renderCopyButton, props.renderFactor);

        return <WC {...props} renderFactor={renderFactor} />
    };

    return ComponentWithCopyButtons;
};

export { withCopyButtons };
