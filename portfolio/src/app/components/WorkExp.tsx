"use client";

import React, { useEffect, useRef, useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { FaArrowDown } from "react-icons/fa";
import ButtonExp from "./ButtonExp";
import { EXPERIENCE } from "../constants/experienceInfo";

const WorkExp = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isLgOrLarger, setIsLgOrLarger] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (
        rect.top >= 0 &&
        rect.top < windowHeight * 0.8 &&
        !buttonsRef.current.every((btn) => btn?.style.opacity === "1")
      ) {
        buttonsRef.current.forEach((button, index) => {
          if (button && button.style.opacity !== "1") {
            // Step 1: Fall from top
            setTimeout(() => {
              button.style.transition = "transform 1.5s ease-out, opacity 1.5s";
              button.style.transform = isLgOrLarger
                ? "translateY(0)"
                : button.style.transform;
              button.style.opacity = "1";

              // Step 2: Scatter with fixed values based on index
              setTimeout(() => {
                let xOffset, yOffset, rotation;
                switch (index) {
                  case 0:
                    xOffset = 0;
                    yOffset = 20;
                    rotation = 10;
                    break;
                  case 1:
                    xOffset = 0;
                    yOffset = 30;
                    rotation = 0;
                    break;
                  case 2:
                    xOffset = 0;
                    yOffset = 10;
                    rotation = 5;
                    break;
                  case 3:
                    xOffset = 0;
                    yOffset = 40;
                    rotation = 0;
                    break;
                  case 4:
                    xOffset = 0;
                    yOffset = 25;
                    rotation = 15;
                    break;
                  case 5:
                    xOffset = 0;
                    yOffset = 15;
                    rotation = 0;
                    break;
                  default:
                    xOffset = 0;
                    yOffset = 0;
                    rotation = 0;
                }
                button.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg)`;
              }, 1500);
            }, index * 200);
          }
        });
      }
    };

    const handleResize = () => {
      setIsLgOrLarger(window.innerWidth >= 1024);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isLgOrLarger]);

  return (
    <div
      ref={sectionRef}
      className="xl:pt-[130px] pt-[60px] sm:pt-[80px] md:pt-[100px]"
    >
      <div className="flex justify-end mr-[15px] sm:mr-[30px] xl:mr-[193px] mb-[15px] sm:mb-[20px] xl:mb-[34px]">
        <ButtonWithIcon
          text="About"
          icon={<FaArrowDown />}
          size={12}
          color="black"
        />
      </div>

      <h2 className="text-center text-[30px] sm:text-[40px] md:text-[50px] xl:text-[78px] leading-[50px] sm:leading-[70px] md:leading-[90px] xl:leading-[126px] mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[20px]">
        I’ve been{" "}
        <span className="bg-black text-white px-[2px] sm:px-[4px] md:px-[6px] xl:px-[8px] rounded-[2px] sm:rounded-[4px] md:rounded-[6px] xl:rounded-[8px]">
          Developing
        </span>
      </h2>
      <h2 className="text-center text-[30px] sm:text-[40px] md:text-[50px] xl:text-[78px] leading-[50px] sm:leading-[70px] md:leading-[90px] xl:leading-[126px] mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[20px]">
        Websites since{" "}
        <span className="bg-black text-white px-[2px] sm:px-[4px] md:px-[6px] xl:px-[8px] rounded-[2px] sm:rounded-[4px] md:rounded-[6px] xl:rounded-[8px]">
          2013
        </span>
      </h2>

      <p className="text-center text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px]">
        We start every new client interaction with an in-depth discovery call
        where we get
      </p>
      <p className="text-center text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] mb-[30px] sm:mb-[40px] xl:mb-[70px]">
        to know each other and recommend the best course of action.
      </p>
      <div className="flex-col sm:flex-col md:flex-col lg:flex lg:flex-row xl:flex-row justify-between">
        <p className="max-w-[244px] ml-[15px] sm:ml-[30px] xl:ml-[105px] text-[18px] sm:text-[20px] md:text-[22px] xl:text-[26px] font-bold">
          Previously Worked On
        </p>
        <div className="grid grid-cols-1 justify-items-center md:ml-[40px] md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {EXPERIENCE.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                buttonsRef.current[index] = el;
              }}
              className="relative opacity-0 inline-flex items-center min-w-0"
              style={{
                transform: isLgOrLarger
                  ? "translateY(-100vh)"
                  : "translateY(0)",
              }}
            >
              <ButtonExp
                icon={exp.icon}
                bgColor={exp.bgColor}
                border={exp.border}
                link={exp.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
