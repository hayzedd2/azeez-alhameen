import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import earth from "../images/astronaut-reading-books-nikolay-todorov-transparent.png";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoDjango } from "react-icons/bi";

const AboutMe = () => {
  const technologyObj = [
    {
      skillName: "HTML",
      skillIcon: <AiOutlineHtml5 />,
    },

    {
      skillName: "CSS",
      skillIcon: <BiLogoCss3 />,
    },
    {
      skillName: "Javascript",
      skillIcon: <BiLogoJavascript />,
    },
    {
      skillName: "Tailiwind-Css",
      skillIcon: <BiLogoTailwindCss />,
    },
    {
      skillName: "React",
      skillIcon: <BiLogoReact />,
    },
    {
      skillName: "Django",
      skillIcon: <BiLogoDjango />,
    },
    {
      skillName: "Git and Github",
      skillIcon: <BsGithub/>,
    },
    
  ];
  return (
    <div className=" text-white bg-[#050816] min-h-[80vh] flex items-center justify-center md:py-10 py-0 pb-7 md:pb-0" id="about">
      <div className="container max-w-7xl flex px-3 md:px-0 flex-col-reverse gap-6 md:flex-row items-center mx-auto justify-center">
        <div className="basis-3/6">
          <img src={earth} alt="" className="md:w-[33rem] w-[22rem]" />
        </div>
        <div className="basis-3/6">
          <h1 className="md:text-[1.5rem] text-[1.1rem]  max-w-xl font-lexend text-white ">
            Why i should be in your next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80dfff] to-[#ffcccc] via-[#df80ff] animate-gradient">
              project 
            </span>
          </h1>
          <div className="flex flex-col gap-5 font-[400] md:gap-6 md:my-2 my-1.5  max-w-2xl">
            <p className="font-lexend text-[0.8rem] leading-normal md:text-[0.95rem] md:leading-7">
              I'm <strong>Azeez Alhameen</strong>, a passionate and innovative
              frontend developer eager to contribute my skills to your next
              project. With a deep-rooted love for crafting user-friendly and
              visually stunning web applications, I bring creativity and
              expertise to every project I undertake
            </p>

            <p className="font-lexend text-[0.8rem]  leading-normal md:text-[0.95rem] md:leading-7">
              What sets me apart as a frontend developer is my commitment to
              user-centered design and my ability to collaborate effectively
              within cross-functional teams. When you bring me onto your
              project, you gain a collaborator who is not only a skilled coder
              but also a creative problem-solver. My goal is to turn your vision
              into reality and help your project reach new heights.
            </p>
          </div>
          <div className="flex gap-4 mt-5">
            <a href=" http://linkedin.com/in/azeez-alhameen-9a604026a">
              <BsLinkedin className="text-xl" />
            </a>
            <a href="https://github.com/hayzedd2">
              <BsGithub className="text-xl" />
            </a>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold font-lexend text-xl text-white">
              Technologies
            </h2>
            <div className="flex gap-3 flex-wrap  md:max-w-xl mt-3">
              {technologyObj.map((tech) => {
                return (
                  <div className="bg-[#004d4d] rounded-md p-2 flex gap-1 items-center justify-center text-[#80dfff] font-lexend text-sm md:text-base">
                    <p>{tech.skillName}</p>
                    <p className="text-base md:text-xl">{tech.skillIcon}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
