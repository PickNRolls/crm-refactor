import { FC } from 'react';
import { RenderChain } from 'utils/render/createRender';
import { CategoryProps } from './Group/Category/Category.types';
import { FactorProps } from './Group/Category/Factor/Factor.types';
import { GroupProps } from './Group/Group.types';
import { Group } from './types';

export type FactorClickValue = {
    groupId: string;
    categoryId: string;
    factorId: string;
}

export type FactorClickHandler = (value: FactorClickValue) => void;

export type RenderGroup = FC<GroupProps>;
export type RenderCategory = FC<CategoryProps>;
export type RenderFactor = FC<FactorProps>;
export interface FactorsProps {
    factorGroups: Group[];

    onFactorClick?: FactorClickHandler;

    renderGroup?: RenderChain<GroupProps>;
    renderCategory?: RenderChain<CategoryProps>;
    renderFactor?: RenderChain<FactorProps>;

    innerAppend?: React.ReactNode;
}
