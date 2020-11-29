export interface TabProps {
    value: string | number;
    active?: boolean;
    onClick?: (value: string | number) => void;
    className?: string;
}
