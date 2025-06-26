import React from "react";
import { SOCIALLINK } from "../constants/socialLinks";
import SocialNavLinkGroup from "./SocialNavLinkGroup";
import { NAVITEMS } from "../constants/navItems";
import { MAIL } from "../constants/mailLinks";
import { CALL } from "../constants/callLinks";

const Footer = () => {
  return (
    <div className="bg-black px-[28px] md:px-[35px] lg:px-[50px] xl:px-[65px] pt-[35px] md:pt-[50px] lg:pt-[70px] xl:pt-[90px] pb-[30px] md:pb-[40px] lg:pb-[55px] xl:pb-[70px] rounded-[28px] md:rounded-[36px] lg:rounded-[40px] xl:rounded-[52px]">
      <div className="flex flex-col md:flex-row items-center gap-[25%] mx-[20px] md:mx-[60px] lg:mx-[100px] xl:mx-[138px]">
        <h2 className="text-primary font-logo text-[28px] xl:text-[34px]">
          DEVELOP.ME
        </h2>
        <h3 className="text-[25px] md:text-[35px] lg:text-[44px] xl:text-[58px] text-white">
          As you Can
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center md:text-justify md:gap-4">
        <SocialNavLinkGroup title="Say hello" links={MAIL} />
        <SocialNavLinkGroup title="Call" links={CALL} />
        <SocialNavLinkGroup title="Menu" links={SOCIALLINK} />
        <SocialNavLinkGroup title="Social" links={NAVITEMS} />
      </div>
    </div>
  );
};

export default Footer;
