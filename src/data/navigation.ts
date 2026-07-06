export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Use Cases", href: "/usecases" },
  { label: "Contact Us", href: "/contact" },
];
