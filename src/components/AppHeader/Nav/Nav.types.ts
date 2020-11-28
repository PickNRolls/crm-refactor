export interface NavItem {
  content: React.ReactNode;
  url: string;
}

export interface NavProps {
  items: NavItem[];
  className?: string;
}
