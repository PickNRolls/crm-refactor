import { Factor } from "components/Factors/Factors.types";

export interface CategoryProps {
    id: string;
    title: string;
    factors: Factor[];

    onFactorClick?: (value: {
        categoryId: string;
        factorId: string;
    }) => void;
}
