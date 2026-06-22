export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/usecases" },
  { label: "Contact", href: "/contact" },
];
