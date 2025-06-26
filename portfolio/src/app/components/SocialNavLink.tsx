import React from "react";
import Link from "next/link";

interface SocialNavLinkProps {
  title: string;
  link: string;
  type: "mail" | "phone" | "social" | "route";
}

const SocialNavLink: React.FC<SocialNavLinkProps> = ({ title, link, type }) => {
  const getLinkProps = () => {
    switch (type) {
      case "mail":
        return { href: `mailto:${link}`, target: undefined, rel: undefined };
      case "phone":
        return { href: `tel:${link}`, target: undefined, rel: undefined };
      case "social":
        return { href: link, target: "_blank", rel: "noopener noreferrer" };
      case "route":
        return { href: link, target: undefined, rel: undefined };
    }
  };
  const { href, target, rel } = getLinkProps();
  return type === "route" ? (
    <Link
      href={href}
      className="text-[12px] md:text-[14px] xl:text-[14px] text-white hover:text-primary transition-colors duration-200 uppercase"
    >
      {title}
    </Link>
  ) : (
    <a
      href={href}
      target={target}
      rel={rel}
      className="text-[12px] md:text-[14px] xl:text-[14px] text-white hover:text-primary transition-colors duration-200 uppercase"
    >
      {title}
    </a>
  );
};

export default SocialNavLink;
