interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  size: string;
  border: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  size,
  border,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className="xl:py-[10px] xl:pr-[12px] text-[10px] lg:text-[12px] xl:text-[16px] bg-transparent border rounded-full flex items-center gap-[2px] xl:gap-[9px] py-[4px] pr-[5px] "
      style={{
        border: `1px solid ${border}`,
      }}
    >
      <span
        style={{ width: size, height: size, border: `1px solid ${border}` }}
        className="flex items-center justify-center rounded-full"
      >
        {icon && icon}
      </span>

      <span>{text}</span>
    </button>
  );
};

export default Button;
