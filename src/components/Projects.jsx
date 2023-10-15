import React from "react";
import bgImg from "../images/IMG_41351.png";
import countryPic from "../images/localhost_3001_ (6).png";
import jet from "../images/jet-plane.png";
import getlinked from "../images/screencapture-localhost-3001-2023-10-13-09_11_13.png";
import sandbox from "../images/screencapture-file-C-Users-pc-Desktop-frontend-project-index-html-2023-10-13-09_20_18.png";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi";
import { BsBoxArrowUp, BsGithub } from "react-icons/bs";
import netflix from "../images/screencapture-file-C-Users-pc-Desktop-netflix-clone-index-html-2023-10-13-09_22_01.png";
const Projects = () => {
  const projectsObj = [
    {
      projectName: "Getlinked",
      projectPicture: getlinked,
      skills: ["Tailwind-css", "React"],
      LiveLink: "https://getlinked-project-clone.vercel.app/",
      GithubLink: "https://github.com/hayzedd2/Getlinked-project-clone.git",
    },
    {
      projectName: "Netflix Clone",
      projectPicture: netflix,
      skills: ["Html", "CSS", "Javascript"],
      LiveLink: "https://netflix-clone-flax-kappa-34.vercel.app/",
      GithubLink: "https://github.com/hayzedd2/Netflix-clone.git",
    },
    {
      projectName: "RestCountries",
      projectPicture: countryPic,
      skills: ["Chakra-UI", "RestCountries Api", "React"],
      LiveLink: "https://restcountries-tau.vercel.app/",
      GithubLink: "https://github.com/hayzedd2/Restcountries.git",
    },

    {
      projectName: "Sandbox",
      projectPicture: sandbox,
      skills: ["Html", "CSS", "Javascript"],
      LiveLink: "https://sandbox-tau-five.vercel.app/",
      GithubLink: "https://github.com/hayzedd2/Sandbox.git",
    },
  ];
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
      id="projects"
    >
      <div className="container max-w-7xl mx-auto py-10">
        <div className="flex flex-col gap-1 w-full items-center  justify-center md:text-center text-left px-2 md:px-0">
          <h2 className="text-[1.05rem] md:text-[1.3rem]  text-transparent bg-clip-text bg-gradient-to-r from-[#80dfff] to-[#ffcccc] via-[#df80ff] animate-gradient font-lexend">
            Check Out my Projects
          </h2>
          <p className="md:text-[1.2rem] text-[0.75rem]  font-lexend flex items-center justify-center gap-2 text-white">
            Here are some few projects i have worked on.{" "}
            <img src={jet} className="md:w-10 w-6" alt="" />
          </p>
        </div>
        <div
          className="grid md:grid-cols-2 px-5 grid-cols-1  lg:grid-cols-4 w-full gap-9 md:gap-4 mt-10"
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
                <p className="text-white mt-3 font-lexend capitalize text-lg font-semibold">
                  {pro.projectName}
                </p>
                <div className="flex gap-4 mt-2">
                  <p className=" flex font-lexend text-white">
                    <a
                      href={pro.LiveLink}
                      target="_blank"
                      className="flex gap-2 items-center "
                    >
                      Live Url <BsBoxArrowUp />
                    </a>
                  </p>
                  <p className="flex font-lexend text-white">
                    <a
                      href={pro.GithubLink}
                      target="_blank"
                      className="flex gap-2 items-center "
                    >
                      View Code <BsGithub />
                    </a>
                  </p>
                </div>
                <div className=" flex gap-2 mt-2 flex-wrap items-center  text-[#80dfff] font-lexend text-sm">
                  {pro.skills.map((skill) => {
                    return (
                      <p className="bg-[#004d4d] rounded-md p-2 flex gap-1">
                        {skill}
                      </p>
                    );
                  })}
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
