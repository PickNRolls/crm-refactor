import { FC } from 'react';

export type RenderFunction<P extends {}> = FC<P>;
export type RenderChain<P extends {}> = (parentRender: RenderFunction<P>) => RenderFunction<P>;

export const createRender = <P extends {}>(
    defaultRender: RenderFunction<P>,
    propRender?: RenderChain<P>,
): RenderFunction<P> => {
    if (propRender) {
      return (renderProps) => propRender(defaultRender)(renderProps);
    }
    return defaultRender;
};
