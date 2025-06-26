import React from "react";

interface IconButtonProps {
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  size: number;
  color: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  size,
  color,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ border: `2px solid ${color}` }}
      className="rounded-full bg-transparent flex items-center justify-center p-[16px]"
    >
      {React.cloneElement(icon, {
        style: { width: size, height: size, color },
      })}
    </button>
  );
};

export default IconButton;
