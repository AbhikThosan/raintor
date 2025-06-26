import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { FaArrowDown } from "react-icons/fa";
import Button from "./Button";
import ContactForm from "./ContactForm";
import { IoCall } from "react-icons/io5";
import SocialIconGroup from "./SocialIconGroup";

const Contact = () => {
  return (
    <div className="flex items-center justify-center flex-col xl:flex-row gap-[14px] md:gap-[20px] lg:gap-[30px] xl:gap-[40px] pt-[28px] md:pt-[36px] lg:pt-[44px] xl:pt-[51px] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[116px]">
      <div>
        <div className="mb-[20px] md:mb-[25px] lg:mb-[30px] xl:mb-[40px]">
          <ButtonWithIcon
            text="Contact"
            icon={<FaArrowDown />}
            size={12}
            color="black"
          />
        </div>
        <h2 className="text-[40px] leading-[70px] mb-[10px] sm:text-[50px] sm:leading-[80px] sm:mb-[15px] md:text-[60px] md:leading-[100px] md:mb-[20px] xl:text-[78px] xl:leading-[126px] xl:mb-[20px] font-bold">
          Interested in
        </h2>
        <h2 className="text-[40px] leading-[70px] mb-[10px] sm:text-[50px] sm:leading-[80px] sm:mb-[15px] md:text-[60px] md:leading-[100px] md:mb-[20px] xl:text-[78px] xl:leading-[126px] xl:mb-[20px] font-bold">
          <span className="bg-black text-white px-[4px] rounded-[4px] sm:px-[6px] sm:rounded-[6px] md:px-[8px] md:rounded-[8px] xl:px-[8px] xl:rounded-[8px]">
            work
          </span>{" "}
          together?
        </h2>
        <p className="max-w-[730px] text-[14px] sm:text-[16px] md:text-[18px] xl:text-[18px] mt-[12px] md:mt-[14px] lg:mt[16px] mb-[18px] md:mb-[24px] lg:mb[28px] xl:mb-[34px]">
          We start every new client interaction with an in-depth discovery call
          where we get to know each other call where we get to know each other
        </p>
        <Button
          text="Schedule a Call"
          icon={<IoCall />}
          size="48px"
          border="black"
        />
      </div>

      <div className="w-full xl:w-auto">
        <div className=" bg-black text-white rounded-[20px] lg:rounded-[24px] xl:rounded-[30px] pt-[28px] md:pt-[36px] lg:pt-[40px] xl:pt-[45px] pb-[24px] md:pb-[28px] lg:pb-[36px] xl:pb-[40px] px-[18px] md:px-[24px] lg:px-[30px] xl:px-[35px]">
          <ContactForm />
          <div className="mt-8">
            <SocialIconGroup
              text="@williamrey"
              iconColor="#fffff"
              iconSize={27}
              column={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
