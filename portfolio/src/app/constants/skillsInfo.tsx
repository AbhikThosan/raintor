import React from "react";
import ReactIcon from "../../../public/icons/ReactIcon";

interface Skill {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export const SKILLS: Skill[] = [
  {
    icon: <ReactIcon />,
    title: "HTML & CSS",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    icon: <ReactIcon />,
    title: "JavaScript",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
  {
    icon: <ReactIcon />,
    title: "React",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: <ReactIcon />,
    title: "Node.js",
    description:
      "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    icon: <ReactIcon />,
    title: "MongoDB",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
  {
    icon: <ReactIcon />,
    title: "TypeScript",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
];
