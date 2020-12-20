import { Factor } from 'components/Factors/types';
import { RenderChain } from 'utils/render/createRender';
import { FactorProps } from './Factor/Factor.types';

export interface CategoryProps {
    id: string;
    title: string;
    factors: Factor[];

    onFactorClick?: (value: {
        categoryId: string;
        factorId: string;
    }) => void;

    renderFactor?: RenderChain<FactorProps>;
}
