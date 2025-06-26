import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface WorkProcessCardProps {
  title: string;
  description: string;
  link: string;
}

const WorkProcessCard: React.FC<WorkProcessCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="group text-white max-w-[400px] md:max-w-[550px] lg:max-w-[635px] xl:max-w-[650px] px-[18px] md:px-[20px] lg:px-[24px] xl:px-[30px] pt-[18px] md:pt-[20px] lg:pt-[24px] xl:pt-[30px] pb-[20px] md:pb-[24px] lg:pb-[28px] xl:pb-[34px] bg-black rounded-[30px] hover:bg-primary hover:text-black">
      <div className="flex items-center justify-between mb-[22px] md:mb-[28px] lg:mb-[36px] xl:mb-[44px]">
        <h4 className="text-black text-[16px] lg:text-[18px] xl:text-[20px] px-[18px] md:px-[24px] lg:px-[28px] xl:px-[36px] pt-[5px] pb-[1px] bg-secondary group-hover:bg-black group-hover:text-white rounded-[20px]">
          {title}
        </h4>
        <a
          href={link}
          className="flex items-center group-hover:text-black gap-1"
        >
          <HiOutlineArrowNarrowRight size={27} />
          <span className="text-[12px] lg:text-[14px] xl:text-[16px] underline">
            Read More
          </span>
        </a>
      </div>
      <p className="text-[14px] lg:text-[16px] xl:text-[18px] group-hover:text-black">
        {description}
      </p>
    </div>
  );
};

export default WorkProcessCard;
