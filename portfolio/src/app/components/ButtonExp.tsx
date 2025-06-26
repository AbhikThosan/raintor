import React from "react";

interface ButtonExpProps {
  icon: React.ReactElement;
  bgColor: string;
  border: string;
  link: string;
}

const ButtonExp: React.FC<ButtonExpProps> = ({
  icon,
  bgColor,
  border,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-[30px] md:px-[30px] lg:px[30px] xl:px-[73px] py-[15px] md:py-[20px] lg:py[20px] xl:py-[33px] rounded-[45px] focus:outline-none"
      style={{
        backgroundColor: bgColor,
        border: `1px solid ${border}`,
        textDecoration: "none",
      }}
    >
      {icon}
    </a>
  );
};

export default ButtonExp;
