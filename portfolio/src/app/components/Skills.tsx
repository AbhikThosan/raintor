"use client";

import { FaArrowDown } from "react-icons/fa";
import ButtonWithIcon from "./ButtonWithIcon";
import IconButton from "./IconButton";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import SkillCard from "./SkillCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SKILLS } from "../constants/skillsInfo";
import { useRef } from "react";

const Skills = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <div className="px-[10px] md:px-[20px] xl:px-[65px] ">
        <ButtonWithIcon
          text="Why Choose me"
          icon={<FaArrowDown />}
          size={12}
          color="white"
        />
      </div>

      <div
        className="flex flex-col lg:flex-row lg:justify-between mt-[15px]
      md:mt-[25px] xl:mt-[40px] px-[10px] md:px-[20px] xl:px-[65px]"
      >
        <div className=" text-white text-[30px] md:text-[40px] xl:text-[58px]">
          <h2>My Extensive</h2>
          <h2>List of Skills</h2>
        </div>
        <div>
          <div className="text-white lg:text-right mb-[15px] md:mb-[20px] xl:mb-[35px] text-[12px] md:text-[15px] xl:text-[18px]">
            <p>Building the worlds best marketing Your</p>
            <p className="inline-block border-b-[1px] border-gray-700 pb-[8px] md:pb-[14px] xl:pb-[21px]">
              trusted partner for strategy, design, and dev.
            </p>
          </div>
          <div className="flex items-center justify-end gap-4 xl:gap-8">
            <IconButton
              icon={<BsArrowLeft />}
              size={28}
              color="white"
              onClick={goToPrev}
            />
            <IconButton
              icon={<BsArrowRight />}
              size={28}
              color="white"
              onClick={goToNext}
            />
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {SKILLS.map((card, index) => (
            <div
              key={index}
              className="pl-[15px] md:pl-[30px] xl:pl-[65px] pt-[20px] md:pt-[30px] xl:pt-[40px] pb-[30px] md:pb-[40px] xl:pb-[70px]"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(8deg)";
                e.currentTarget.style.transition = "transform 0.3s";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(0deg)";
              }}
            >
              <SkillCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Skills;
