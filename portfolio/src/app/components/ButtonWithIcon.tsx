import React from "react";

interface ButtonWithIconProps {
  icon: React.ReactElement;
  onClick?: () => void;
  size: number;
  color: string;
  text: string;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  icon,
  onClick,
  size,
  color,
  text,
}) => {
  return (
    <button onClick={onClick} className="flex items-center justify-center">
      <span
        style={{ border: `2px solid ${color}` }}
        className="rounded-full bg-transparent p-[16px]"
      >
        {React.cloneElement(icon, {
          style: { width: size, height: size, color },
        })}
      </span>
      <span
        style={{
          border: `2px solid ${color}`,
          color: `${color}`,
          fontSize: `${size}px`,
        }}
        className="rounded-full bg-transparent p-[12px]"
      >
        {text}
      </span>
    </button>
  );
};

export default ButtonWithIcon;
