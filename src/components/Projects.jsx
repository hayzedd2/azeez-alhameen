import React from "react";
import bgImg from "../images/IMG_41351.png";
import countryPic from "../images/localhost_3001_ (6).png";
import jet from "../images/jet-plane.png";
import getlinked from "../images/screencapture-localhost-3001-2023-10-13-09_11_13.png";
import sandbox from "../images/screencapture-file-C-Users-pc-Desktop-frontend-project-index-html-2023-10-13-09_20_18.png";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi";
import { BsBoxArrowUp, BsGithub } from "react-icons/bs";
import netflix from "../images/screencapture-file-C-Users-pc-Desktop-netflix-clone-index-html-2023-10-13-09_22_01.png";
import habeeb from '../images/screencapture-habeeb-azeez-vercel-app-2024-01-16-20_16_01.png'
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
      skills: ["React", "Tailwind",],
      LiveLink: "https://habeeb-azeez.vercel.app",
      GithubLink: "https://github.com/hayzedd2/Netflix-clone.git",
      about : "A portfolio website for my brother Habeeb, a product designer .It showcases his skills and experience"
    },
    {
      projectName: "RestCountries",
      projectPicture: countryPic,
      skills: ["Chakra-UI", "RestCountries Api", "React"],
      LiveLink: "https://restcountries-tau.vercel.app/",
      GithubLink: "https://github.com/hayzedd2/Restcountries.git",
      about : "Rest countries is a web application that allows users to get information about any country , see all countries and also search for countries."
    },

    {
      projectName: "Sandbox",
      projectPicture: sandbox,
      skills: ["Html", "CSS", "Javascript"],
      LiveLink: "https://sandbox-tau-five.vercel.app/",
      GithubLink: "https://github.com/hayzedd2/Sandbox.git",
      about : "Sandbox is a clone of the sandbox website"
    },
  ];
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
      id="projects"
    >
      <div className="container max-w-7xl mx-auto py-10">
        <div className="flex flex-col gap-1 w-full md:text-left  text-left px-5 md:px-0">
          <h2 className="text-[1.05rem] md:text-[1.3rem] bg-[#004d4d]  w-[10rem] md:w-[11rem] flex items-center justify-center font-[700] gap-2  p-2 text-[#80dfff] font-kumb">
            <p className="text-[0.95rem]">O2.</p>
            <p>My Projects</p>
          </h2>
         
        </div>
        <div
          className="grid md:grid-cols-2 md:px-0 px-5 grid-cols-1  lg:grid-cols-3 w-full gap-10 md:gap-4 mt-10"
          style={{ placeItems: "center" }}
        >
          {projectsObj.map((pro) => {
            return (
              <div>
                <img
                  src={pro.projectPicture}
                  className="rounded-xl w-auto  h-[14rem]"
                  style={{ objectFit: "contain" }}
                  alt=""
                />
                <div className="lower-part py-2 px-4 shadow mt-2 rounded-md bg-[#004d4d]">
                <h6 className="text-white mt-3 font-kumb capitalize text-lg font-[500]">
                  {pro.projectName}
                </h6>
                <p className="mb-3 mt-1 text-[0.95rem] font-kumb font-[400] text-gray-200">{pro.about}</p>
                <div className="flex gap-4 mt-6">
                  <p className=" flex font-lexend text-[#80dfff]">
                    <a
                      href={pro.LiveLink}
                      target="_blank"
                      className="flex gap-2 items-center "
                    >
                      <BsBoxArrowUp />
                    </a>
                  </p>
                  <p className="flex font-lexend text-[#80dfff]">
                    <a
                      href={pro.GithubLink}
                      target="_blank"
                      className="flex gap-2 items-center "
                    >
                      <BsGithub />
                    </a>
                  </p>
                </div>
                <div className=" flex gap-2 my-5 flex-wrap items-center  text-[#80dfff] font-lexend text-sm">
                  {pro.skills.map((skill) => {
                    return (
                      <p className="border text-white text-[0.85rem] border-[#80dfff] rounded-[4rem] px-2 py-1 flex gap-1">
                        {skill}
                      </p>
                    );
                  })}
                </div>
                </div>
                <div></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
