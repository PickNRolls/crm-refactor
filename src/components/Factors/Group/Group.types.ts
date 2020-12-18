import { RenderChain } from 'utils/render/createRender';
import { Category } from '../types';
import { CategoryProps } from './Category/Category.types';
import { FactorProps } from './Category/Factor/Factor.types';

export interface GroupProps {
    title: string;
    id: string;
    categories: Category[];

    onFactorClick?: (value: {
        groupId: string;
        categoryId: string;
        factorId: string;
    }) => void;

    renderCategory?:  RenderChain<CategoryProps>;
    renderFactor?: RenderChain<FactorProps>;

    className?: string;
}
