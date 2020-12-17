import { Category } from '../Factors.types';

export interface GroupProps {
    title: string;
    id: string;
    categories: Category[];
    onFactorClick?: (value: {
        groupId: string;
        categoryId: string;
        factorId: string;
    }) => void;

    className?: string;
}
