import { RenderFactor } from 'components/Factors/Factors.types';
import { Factor } from 'components/Factors/types';
import { RenderProp } from 'hooks/useRenderProp';

export interface CategoryProps {
    id: string;
    title: string;
    factors: Factor[];

    onFactorClick?: (value: {
        categoryId: string;
        factorId: string;
    }) => void;

    renderFactor?: RenderProp<RenderFactor>;
}
