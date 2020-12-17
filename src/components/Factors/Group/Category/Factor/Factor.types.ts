export interface FactorProps {
    id: string;
    name: string;
    active?: boolean;
    disabled?: boolean;

    onClick?: (id: string) => void;
}
