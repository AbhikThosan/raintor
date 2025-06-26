import React from "react";
import Button from "./Button";
import SocialIconGroup from "./SocialIconGroup";
import { IoCall } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="pt-[50px] pl-[15px] pb-[100px] md:pt-[70px] md:pl-[25px] xl:pt-[95px] xl:pb-[191px] xl:pl-[35px]">
      <h2 className="text-[40px] leading-[70px] mb-[10px] sm:text-[50px] sm:leading-[80px] sm:mb-[15px] md:text-[60px] md:leading-[100px] md:mb-[20px] xl:text-[78px] xl:leading-[126px] xl:mb-[20px] font-bold">
        Trusted{" "}
        <span className="bg-black text-white px-[4px] rounded-[4px] sm:px-[6px] sm:rounded-[6px] md:px-[8px] md:rounded-[8px] xl:px-[8px] xl:rounded-[8px]">
          Partner
        </span>{" "}
        for
      </h2>
      <h2 className="text-[40px] leading-[70px] mb-[10px] sm:text-[50px] sm:leading-[80px] sm:mb-[15px] md:text-[60px] md:leading-[100px] md:mb-[20px] xl:text-[78px] xl:leading-[126px] xl:mb-[20px] font-bold">
        Your Website{" "}
        <span className="bg-black text-white px-[4px] rounded-[4px] sm:px-[6px] sm:rounded-[6px] md:px-[8px] md:rounded-[8px] xl:px-[8px] xl:rounded-[8px]">
          Develop.
        </span>
      </h2>

      <div className="xl:relative mt-[30px] sm:mt-[40px] md:mt-[50px] xl:mt-[50px]">
        <div className="mb-[50px] xl:absolute xl:bottom-0 xl:origin-left xl:-rotate-90 xl:left-[35px] xl:mb-[0px] ">
          <SocialIconGroup
            text="@williamrey"
            iconColor="#000000"
            iconSize={27}
            column={true}
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] xl:text-[18px]">
              Building the worlds best marketing websites for over a decade.
            </p>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] xl:text-[18px]">
              Your trusted partner for strategy, design, and dev.
            </p>
            <div className="mt-[20px] sm:mt-[30px] md:mt-[35px] xl:mt-[42px]">
              <Button
                text="Schedule a Call"
                icon={<IoCall />}
                size="48px"
                border="black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
