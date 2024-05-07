import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecomasa from "@/public/ecomasa.png";
import stream from "@/public/stream.png";
import starEstate from "@/public/starEstate.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BTech in Computer Science and Engineering",
    location: "College of Engineering, Attingal IHRD",
    description:
      "Gradudated from APJ Abdul Kalam Technological University.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Software Engineer Intern",
    location: "Brototype: Kochi Kerala",
    description:
      "Implemented enterprise application e-commerce website using NodeJS, React, AWS, ExpressJS, and MongoDB. Designed and developed systems to perform various optimization inside the e-commerce ecosystem. Automated and optimized business logic for the core marketing experiment",
    icon: React.createElement(CgWorkAlt),
    date: "July 2021 - March 2022",
  },
  {
    title: "Software Engineer",
    location: "Paripoorna Software: Chennai, Tamil Nadu",
    description:
      "Led the design and development of multiple enterprise-level microservice applications of Shipping and logistics, driving $60-$67 million of revenue every year using the latest technologies of Azure, MSSQL, Azure Functions, NodeJS, AngularJS and ReactJS.",
    icon: React.createElement(FaReact),
    date: "April 2022 - Nov 2023",
  },
] as const;

export const projectsData = [
  {
    title: "ECOMASA",
    description:
      "An e-commerce website using MERN Stack. Having admin and user modules with different management for handling the products, orders and user.",
    tags: ["React", "Redux", "ExpressJS", "NodeJS", "MongoDB", "Firebase"],
    imageUrl: ecomasa,
  },
  {
    title: "STREAMS",
    description:
      "Developed a video live streaming app using ReactJS, RTMP server and MaterialUI. In this app, users can create, edit and delete the streams.",
    tags: ["React", "TypeScript", "MaterialUI"],
    imageUrl: stream,
  },
  {
    title: "Star Estate",
    description:
      "Development in progress for real estate application with React and Nodejs. In this app users can view and search real estate and message with the other users.",
    tags: ["React", "NodeJS", "Firebase"],
    imageUrl: starEstate,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Git",
  "Tailwind",
  "MSSQL",
  "MongoDB",
  "Redux",
  "Express",
  "Azure",
  "Azure functions",
] as const;