import { FC } from 'react';
import { CategoryProps } from './Group/Category/Category.types';
import { FactorProps } from './Group/Category/Factor/Factor.types';
import { GroupProps } from './Group/Group.types';

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
    content?: React.ReactNode;
}
