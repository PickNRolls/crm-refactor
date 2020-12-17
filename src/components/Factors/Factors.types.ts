export interface Group {
    id: string;
    title: string;
    categories: Category[];
}

export interface Category {
    id: string;
    title: string;
    factors: Factor[];
}

export interface Factor {
    name: string;
    id: string;
}

export type FactorClickValue = {
    groupId: string;
    categoryId: string;
    factorId: string;
}

export type FactorClickHandler = (value: FactorClickValue) => void;

export interface FactorsProps {
    factorGroups: Group[];

    onFactorClick?: FactorClickHandler;
    append?: React.ReactNode;
}
