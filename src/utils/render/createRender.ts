import { FC, ReactNode } from 'react';

export type RenderFunction<P extends {}> = (props: P) => ReactNode;
export type NextRenderFunction<P extends {}> = (props: P) => ReactNode | ((prevRender: RenderFunction<P>) => ReactNode);

export const createRender = <P extends {}>(
    render: RenderFunction<P>,
    nextRender?: NextRenderFunction<P>,
): FC<P> => {
  return (renderProps: P) => {
    if (nextRender) {
      const result = nextRender(renderProps)
      if (typeof result === 'function') {
        return result(render);
      }
      return result;
    }
    return render(renderProps);
  };
};
