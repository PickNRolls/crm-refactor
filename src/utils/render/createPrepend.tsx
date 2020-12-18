import React, { ComponentType, FC } from 'react'
import { connectRender } from './connectRender';
import { RenderChain, RenderFunction } from './createRender'

export const createPrepend = (renderPropName: string) => {
  const prepend = <P extends { [key: string]: any}>(render: RenderFunction<P>) => (WC: ComponentType<P>): FC<P> => {
    const Prepend: FC<P> = (props) => {
      const prependRender: RenderChain<RenderFunction<P>, P> = (parentRender) => (renderProps) => {
        return (
          <div>
            {render(renderProps)}
            {parentRender(renderProps)}
          </div>
        );
      };
  
      const renderProps = {
        [renderPropName]: connectRender(prependRender, props[renderPropName]),
      };

      return <WC {...props} {...renderProps} />;
    };
  
    return Prepend;
  };

  return prepend;
};
