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
    active?: boolean;
    disabled?: boolean;
}
