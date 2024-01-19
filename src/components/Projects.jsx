import React from "react";
import bgImg from "../images/IMG_41351.png";
import countryPic from "../images/localhost_3001_ (6).png";
import jet from "../images/jet-plane.png";
import getlinked from "../images/screencapture-localhost-3001-2023-10-13-09_11_13.png";
import sandbox from "../images/screencapture-file-C-Users-pc-Desktop-frontend-project-index-html-2023-10-13-09_20_18.png";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi";
import { BsBoxArrowUp, BsGithub } from "react-icons/bs";
import netflix from "../images/screencapture-file-C-Users-pc-Desktop-netflix-clone-index-html-2023-10-13-09_22_01.png";
import habeeb from "../images/screencapture-habeeb-azeez-vercel-app-2024-01-16-20_16_01.png";
import { FiGithub } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";
const Projects = () => {
  const projectsObj = [
    // {
    //   projectName: "Getlinked",
    //   projectPicture: getlinked,
    //   skills: ["Tailwind-css", "React"],
    //   LiveLink: "https://getlinked-project-clone.vercel.app/",
    //   GithubLink: "https://github.com/hayzedd2/Getlinked-project-clone.git",
    //   about : "Getlinked is a hackathon project that requires you to convert breath-taking figma design into code."
    // },
    {
      projectName: "Habeeb Portfolio",
      projectPicture: habeeb,
      skills: ["React", "Tailwind"],
      LiveLink: "https://habeeb-azeez.vercel.app",
      GithubLink: "https://github.com/hayzedd2/Netflix-clone.git",
      about:
        "A portfolio website for my brother Habeeb, a product designer .It showcases his skills and experience",
    },
    {
      projectName: "RestCountries",
      projectPicture: countryPic,
      skills: ["Chakra-UI", "RestCountries Api", "React"],
      LiveLink: "https://restcountries-tau.vercel.app/",
      GithubLink: "https://github.com/hayzedd2/Restcountries.git",
      about:
        "Rest countries is a web application that allows users to get information about any country , see all countries and also search for countries.",
    },

    {
      projectName: "Sandbox",
      projectPicture: sandbox,
      skills: ["Html", "CSS", "Javascript"],
      LiveLink: "https://sandbox-tau-five.vercel.app/",
      GithubLink: "https://github.com/hayzedd2/Sandbox.git",
      about: "Sandbox is a clone of the sandbox website",
    },
  ];
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
      id="projects"
    >
      <div className="container max-w-6xl mx-auto py-10">
        <div className="flex flex-col gap-1 w-full md:text-left  text-left px-5 md:px-0">
          <h2 className="text-[1.05rem] md:text-[1.3rem] bg-[#004d4d]  w-[10rem] md:w-[11rem] flex items-center justify-center font-[700] gap-2  p-2 text-[#80dfff] font-kumb">
            <p className="text-[0.95rem]">O2.</p>
            <p>My Projects</p>
          </h2>
        </div>
        <div
          className=" w-full flex flex-col gap-10 mt-10"
          style={{ placeItems: "center" }}
        >
          {projectsObj.map((pro, index) => {
            const isSecondObject = index === 1;
            const containerClasses = `w-full md:flex-nowrap flex-wrap flex pmd:text-left  text-left px-5 md:px-0 md:gap-5 gap-2 max-w-5xl items-center justify-center ${
              isSecondObject ? "flex-row-reverse" : ""
            }`;

            return (
              <div className={containerClasses} key={index}>
                <img
                  src={pro.projectPicture}
                  className="h-[12rem] w-full basis-[100%] md:basis-[40%]"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
                <div className="lower-part py-3 px-4 md:px-6 rounded-[8px] bg-[#004d4d] basis-[100%] md:basis-[60%] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                  <h6 className="text-white mt-3 font-kumb capitalize text-[1.2rem] md:text-[1.5rem] font-[500] mb-2">
                    {pro.projectName}
                  </h6>
                  <p className="mb-3 mt-1 text-[0.95rem] max-w-[500px] font-kumb font-[400] text-gray-200">
                    {pro.about}
                  </p>
                  <div className="flex gap-4 mt-6">
                    <p className="flex font-lexend text-[#80dfff]">
                      <a
                        href={pro.LiveLink}
                        target="_blank"
                        className="flex gap-2 items-center "
                      >
                        <BsBoxArrowUpRight />
                      </a>
                    </p>
                    <p className="flex font-lexend text-[#80dfff]">
                      <a
                        href={pro.GithubLink}
                        target="_blank"
                        className="flex gap-2 items-center "
                      >
                        <FiGithub />
                      </a>
                    </p>
                  </div>
                  <div className="flex gap-2 my-5 flex-wrap items-center  text-[#80dfff] font-lexend text-sm">
                    {pro.skills.map((skill) => (
                      <p
                        key={skill}
                        className="border text-white text-[0.8rem] border-gray-300 rounded-[8px] px-2 py-[0.15rem] flex gap-1"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
