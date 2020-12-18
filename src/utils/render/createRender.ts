import { FC } from 'react';

export type RenderFunction<P extends {}> = FC<P>;
export type RenderChain<RF extends RenderFunction<P>, P> = (parentRender: RF) => RF;

export const createRender = <P extends {}>(
    defaultRender: RenderFunction<P>,
    propRender?: RenderChain<typeof defaultRender, P>,
): RenderFunction<P> => {
    if (propRender) {
      return (renderProps) => propRender(defaultRender)(renderProps);
    }
    return defaultRender;
};
