export interface TextinputProps {
    name: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    className?: string;
    radius?: number;
    label?: string;
    placeholder?: string;
}
