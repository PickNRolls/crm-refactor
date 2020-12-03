export interface TextinputProps {
    name: string;
    type?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    className?: string;
    radius?: number;
    label?: string;
    error?: string;
    placeholder?: string;
}
