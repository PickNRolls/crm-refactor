import { RenderChain } from './createRender';

const connectRender = <P>(
    render: RenderChain<P>,
    propRender: RenderChain<P>,
): RenderChain<P> => {
    return ((parentRender) => (renderProps) => {
      if (propRender) {
        return propRender(render(parentRender))(renderProps);
      }
      return render(parentRender)(renderProps);
    });
};

export { connectRender };
