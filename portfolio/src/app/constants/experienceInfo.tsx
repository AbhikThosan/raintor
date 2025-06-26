import React from "react";
import ExpFacebook from "../../../public/icons/ExpFacebook";
import ExpCSSVInner from "../../../public/icons/ExpCSSVInner";
import ExpAutodesk from "../../../public/icons/ExpAutodesk";
import ExpCssDesignAwards from "../../../public/icons/ExpCssDesignAwards";
import ExpThoughtWorks from "../../../public/icons/ExpThoughtWorks";
import ExpAwards from "../../../public/icons/ExpAwards";

interface ButtonExpProps {
  icon: React.ReactElement;
  bgColor: string;
  border: string;
  link: string;
}

export const EXPERIENCE: ButtonExpProps[] = [
  {
    icon: <ExpAwards />,
    bgColor: "black",
    border: "black",
    link: "https://www.awards.com",
  },
  {
    icon: <ExpFacebook />,
    bgColor: "white",
    border: "black",
    link: "https://www.facebook.com",
  },
  {
    icon: <ExpCssDesignAwards />,
    bgColor: "white",
    border: "black",
    link: "https://www.cssdesignawards.com",
  },
  {
    icon: <ExpCSSVInner />,
    bgColor: "white",
    border: "black",
    link: "https://www.cssvinner.com",
  },
  {
    icon: <ExpThoughtWorks />,
    bgColor: "white",
    border: "black",
    link: "https://www.thoughtworks.com",
  },
  {
    icon: <ExpAutodesk />,
    bgColor: "white",
    border: "black",
    link: "https://www.autodesk.com",
  },
];
