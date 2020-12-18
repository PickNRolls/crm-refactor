export interface FactorProps {
    id: string;
    name: string;
    active?: boolean;
    disabled?: boolean;

    innerAppend?: React.ReactNode;
    innerRef?: React.RefObject<HTMLDivElement>;

    onClick?: (id: string) => void;
}
