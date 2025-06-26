"use client";

import Button from "./Button";
import NavItem from "./NavItem";
import { NAVITEMS } from "../constants/navItems";
import { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="px-[20px] py-[20px] flex items-center justify-between bg-[#00000003] rounded-b-[30px]  xl:px-[35px] xl:py-[28px]">
      <div className="font-logo text-[28px] xl:text-[34px]">DEVELOP.ME</div>
      <div className="md:flex items-center justify-between gap-[25px] xl:gap-[67px] hidden">
        <div className="flex items-center gap-[20px] xl:gap-[36px]">
          {NAVITEMS.map((item) => (
            <NavItem key={item.href} text={item.text} href={item.href} />
          ))}
        </div>
        <Button
          text="Start Project"
          icon={<HiOutlineArrowNarrowRight size={26} />}
          size="48px"
          border="black"
        />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-secondary p-4 rounded-b-[20px] shadow-md z-10">
            <div className="flex flex-col items-center gap-4">
              {NAVITEMS.map((item) => (
                <NavItem key={item.href} text={item.text} href={item.href} />
              ))}
              <Button
                text="Start Project"
                icon={<HiOutlineArrowNarrowRight size={26} />}
                size="48px"
                border="black"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
