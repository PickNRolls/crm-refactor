export interface FactorProps {
    id: string;
    name: string;
    active?: boolean;
    disabled?: boolean;

    append?: React.ReactNode;

    onClick?: (id: string) => void;
}
