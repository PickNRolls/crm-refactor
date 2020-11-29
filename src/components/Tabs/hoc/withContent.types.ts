import { TabsProps } from '../Tabs.types';

export type Content = Record<string | number, React.ReactNode>;

export type WithContentOuterProps = {
    content: Content;
} & TabsProps;
