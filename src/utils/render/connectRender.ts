import { RenderChain, RenderFunction } from './createRender';

const connectRender = <RF extends RenderFunction<P>, P>(
    render: RenderChain<RF, P>,
    propRender: RenderChain<RF, P>,
): RenderChain<RF, P> => {
    return ((parentRender) => (renderProps) => {
      if (propRender) {
        return propRender(render(parentRender))(renderProps);
      }
      return render(parentRender)(renderProps);
    }) as RenderChain<RF, P>;
};

export { connectRender };
