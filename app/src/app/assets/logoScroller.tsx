import React from "react";

import "./LogoScroller.css"; // Import custom CSS for the animation
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSquareGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { GrDocker } from "react-icons/gr";
import { SiVite } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaWordpress } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiApachecassandra } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { SiJira } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { DiRuby } from "react-icons/di";
import { SiSelenium } from "react-icons/si";
import { FaChrome } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
// Define the type for the icons array

const logos = [
  <FaReact key="react" />,
  <FaPython key="python" />,
  <FaHtml5 key="html5" />,
  <SiCss3 key="css3" />,
  <IoLogoJavascript key="javascript" />,
  <FaBootstrap key="bootstrap" />,
  <RiTailwindCssFill key="tailwind" />,
  <FaSquareGithub key="github" />,
  <FaGitAlt key="git" />,
  <IoLogoFigma key="figma" />,
  <AiOutlineAntDesign key="antdesign" />,
  <SiPostman key="postman" />,
  <VscVscode key="vscode" />,
  <GrDocker key="docker" />,
  <SiVite key="vite" />,
  <SiMongodb key="mongodb" />,
  <IoLogoFirebase key="firebase" />,
  <BiLogoTypescript key="typescript" />,
  <SiNextdotjs key="nextjs" />,
  <FaWordpress key="wordpress" />,
  <SiDjango key="django" />,
  <SiMysql key="mysql" />,
  <SiKubernetes key="kubernetes" />,
  <FaLinux key="linux" />,
  <SiPhp key="php" />,
  <SiRedux key="redux" />,
  <FaAws key="aws" />,
  <SiGooglecloud key="googlecloud" />,
  <FaSlack key="slack" />,
  <BsMicrosoftTeams key="teams" />,
  <SiJira key="jira" />,
  <IoLogoVercel key="vercel" />,
  <FaSass key="sass" />,
  <IoLogoVue key="vue" />,
  <DiRuby key="ruby" />,
  <SiSelenium key="selenium" />,
  <FaChrome key="chrome" />,
  <FaGolang key="golang" />,
  <SiApachecassandra key="cassandra" />,
];


const LogoScroller: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full bg-gray-800 py-4">
      <div className="flex scrolling space-x-8">
        {logos.map((logo, index) => (
          <div key={index} className="w-24 h-auto mx-4 text-lightBlue text-4xl">
            {logo}
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            key={index + logos.length}
            className="w-24 h-auto mx-4 text-lightBlue text-4xl"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoScroller;
