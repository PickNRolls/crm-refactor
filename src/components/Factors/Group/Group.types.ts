import { RenderProp } from 'hooks/useRenderProp';
import { RenderCategory, RenderFactor } from '../Factors.types';
import { Category } from '../types';

export interface GroupProps {
    title: string;
    id: string;
    categories: Category[];

    onFactorClick?: (value: {
        groupId: string;
        categoryId: string;
        factorId: string;
    }) => void;

    renderCategory?:  RenderProp<RenderCategory>;
    renderFactor?: RenderProp<RenderFactor>;

    className?: string;
}
