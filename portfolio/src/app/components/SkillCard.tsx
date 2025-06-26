interface SkillCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="max-w-[320px] md:max-w-[380px] xl:max-w-[430px] px-[12px] md:px-[18px] xl:px-[35px] py-[18px] md:py-[30px] xl:py-[48px] bg-[#ffffff14] rounded-[30px]">
      {icon}
      <h3 className="text-white text-[16px] md:text-[18px] xl:text-[26px] mt-[15px] md:mt-[20px] xl:mt-[35px] mb-[10px] md:mb-[15px] xl:mb-[20px]">
        {title}
      </h3>
      <p className="text-white opacity-[0.7] text-[12px] md:text-[14px] xl:text-[16px]">
        {description}
      </p>
    </div>
  );
};

export default SkillCard;
