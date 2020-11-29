export interface Option {
    content: React.ReactNode;
    value: string | number;
}

export interface TabsProps {
    options: Option[];
    value: string | number;
    onChange?: (value: string | number) => void;
    className?: string;
}
