"use client";

import React from "react";
import { FaArrowDown } from "react-icons/fa";
import ButtonWithIcon from "./ButtonWithIcon";
import WorkProcessCard from "./WorkProcessCard";
import { WORKPROCESS } from "../constants/workProcessInfo";

const WorkProcess = () => {
  return (
    <div className="mx-[15px] bg-[#141414] rounded-[20px] lg:rounded-[30px] xl:rounded-[40px] px-[25px] md:px-[40px] lg:px-[50px] xl:px-[65px] pt-[30px] md:pt-[50px] lg:pt-[70px] xl:pt-[90px] pb-[25px] md:pb-[35px] lg:pb-[50px] xl:pb-[70px] mt-4 md:mt-5 lg:mt-7 xl:mt-10">
      <div className="relative mb-[20px] md:mb-[30px] lg:mb-[40px]  xl:mb-[50px]">
        <div className="flex justify-center sm:flex sm:justify-center mb-2 sm:mb-3 lg:absolute lg:top-0 lg:left-0">
          <ButtonWithIcon
            text="Work Process"
            icon={<FaArrowDown />}
            size={12}
            color="white"
          />
        </div>
        <h2 className="text-[30px] md:text-[35px] lg:text-[44px] xl:text-[58px] text-white text-center">
          My Work Process
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 place-items-center mx-auto max-w-6xl">
        {WORKPROCESS.map((process, index) => (
          <div
            key={index}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "rotate(5deg)";
              e.currentTarget.style.transition = "transform 0.3s";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "rotate(0deg)";
            }}
          >
            <WorkProcessCard
              title={process.title}
              description={process.description}
              link={process.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
