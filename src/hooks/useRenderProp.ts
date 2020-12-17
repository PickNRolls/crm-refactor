import { FC } from 'react';

export type RenderProp<TRender> = (defaultRender: TRender) => TRender;

const useRenderProp = <TRender extends FC>(defaultRender: TRender, renderProp?: RenderProp<TRender>): TRender => {
    if (renderProp) {
        return renderProp(defaultRender);
    }
    return defaultRender;
};

export { useRenderProp };
