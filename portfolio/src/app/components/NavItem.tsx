import Link from "next/link";

interface NavItemProps {
  text: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="text-[16px] hover:text-gray-600 sm:text-[14px] md:text-[16px]"
    >
      {text}
    </Link>
  );
};

export default NavItem;
