import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

interface SocialIconGroupProps {
  iconColor: string;
  iconSize: number;
  column: boolean;
  text: string;
}

const SocialIconGroup: React.FC<SocialIconGroupProps> = ({
  iconColor,
  iconSize,
  column,
  text,
}) => {
  return (
    <div
      className={`flex ${
        column ? "flex-col" : "flex-row items-center"
      } gap-[14px] xl:gap-[22px]`}
    >
      <h3 className="xl:text-[18px]">{text}</h3>
      <div className="flex items-center gap-[10px] xl:gap-[20px]">
        <div className="w-[30px] xl:w-[45px] h-[2px] bg-black"></div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook
            style={{
              color: iconColor,
              width: iconSize,
              height: iconSize,
              cursor: "pointer",
            }}
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram
            style={{
              color: iconColor,
              width: iconSize,
              height: iconSize,
              cursor: "pointer",
            }}
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter
            style={{
              color: iconColor,
              width: iconSize,
              height: iconSize,
              cursor: "pointer",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default SocialIconGroup;
