import SocialNavLink from "./SocialNavLink";

interface SocialNavLinkGroupProps {
  title: string;
  links: {
    text: string;
    href: string;
    type: "mail" | "phone" | "social" | "route";
  }[];
}

const SocialNavLinkGroup: React.FC<SocialNavLinkGroupProps> = ({
  title,
  links,
}) => {
  return (
    <div>
      <h4 className="text-[12px] md:text-[14px] xl:text-[16px] text-[#757575] mb-[12] md:mb-[14] lg:mb-[16px] xl:mb-[20px] font-bold">
        {title}
      </h4>
      <div className="flex flex-col gap-[6px] lg-gap-[8px] xl-gap-[10px]">
        {links.map((item, index) => (
          <SocialNavLink
            key={index}
            title={item.text}
            link={item.href}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialNavLinkGroup;
