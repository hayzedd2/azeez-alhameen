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
import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const AboutMe = () => {
  useEffect(() => {
    const text2 = SplitType.create(".about-text");

    // Create a ScrollTrigger instance
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: text2.words, // Align trigger with the split text elements
        start: "top 90%",
        end: "bottom center",
        scrub: true,
        toggleActions: "play none none none",
      },
    });
    tl.to(text2.words, {
      opacity: 1,
      duration: 0.8,
      stagger: 0.05,
    });
  }, []);
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
      skillIcon: <BsGithub />,
    },
  ];
  return (
    <div
      className=" text-white bg-[#050816] min-h-[80vh] flex flex-col md:py-10 py-0 pb-7 md:pb-0"
      id="about"
    >
      
      <div className="container max-w-7xl mx-auto px-3 md:px-0">
      <div className="my-3">
        <h2 className="text-[1.05rem] md:text-[1.3rem] bg-[#004d4d]  w-[10rem] flex gap-2 items-center justify-center font-[700]  p-2 text-[#80dfff] font-kumb">
          <p className="text-[0.95rem]">O1.</p>
          <p>About Me</p>
        </h2>
      </div>
        <div className=" flex  flex-col-reverse gap-6 md:flex-row items-center mx-auto justify-center">
          <div className="basis-3/6">
            <img src={earth} alt="" className="md:w-[33rem] w-[22rem]" />
          </div>
          <div className="basis-3/6 ">
            <h1 className="md:text-[1.8rem] text-[1.4rem]  max-w-xl font-kumb text-white ">
              Why i should be in your next{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80dfff] to-[#ffcccc] via-[#df80ff] animate-gradient">
                project
              </span>
            </h1>
            <div className="flex flex-col gap-5 font-[400] md:gap-6 md:my-2 my-1.5  max-w-2xl">
              <p className="font-kumb text-[1.1rem] md:text-[1.15rem] font-[500] mb-3  leading-[1.9rem] md:leading-[2.1rem] about-text overflow-hidden">
                What sets me apart as a frontend developer is my commitment to
                user-centered design and my ability to collaborate effectively
                within cross-functional teams. When you bring me onto your
                project, you gain a collaborator who is not only a skilled coder
                but also a creative problem-solver. My goal is to turn your
                vision into reality and help your project reach new heights.
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
              <h2 className="font-semibold font-kumb text-xl text-white">
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
    </div>
  );
};

export default AboutMe;
