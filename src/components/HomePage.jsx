import React from "react";
import astronaut from "../images/pngwing.com (3)-451c8d7b.png";
import bgImg from "../images/IMG_4135.png";
import Navbar from "./Navbar";
import { gsap } from "gsap";
const HomePage = () => {
 
  return (
    <div>
      <div
        className="bg-cover bg-center  bg-no-repeat min-h-[95vh] flex flex-col md:min-h-screen px-3 md:px-5  justify-center overflow-y-hidden pb-10"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Navbar />
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="w-full   flex-col items-center justify-center basis-3/6">
            <div className=" text-left md:text-left">
              <h6 className=" font-kumb text-white text-[1.45rem] md:text-[2.5rem]  p-0 flex flex-col  font-[200]">
                Hi there, I am{" "} Alhameen
                <span>
                  <h2 className="md:text-[4rem] font-kumb text-[2.4rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#80dfff] to-[#ffcccc] via-[#df80ff] animate-gradient">
                    {/* Azeez Alhameen */}
                    Front-end <span className="text-white">Engineer</span>
                  </h2>
                </span>{" "}
              </h6>
              <h3 className="md:text-[1.8rem] mb-2 md:my-0 text-[1.3rem] font-kumb font-[400] md:text-[600]  text-transparent bg-clip-text bg-gradient-to-r from-[#ffcccc] to-[#80dfff] via-[#df80ff] animate-gradient">
               
              </h3>

              <h4 className="font-kumb mt-4  text-white max-w-none md:max-w-4xl mx-auto text-[1.05rem] md:text-[1.15rem] font-[500]  leading-[1.9rem] md:leading-[2.1rem]">
                I'm a passionate and creative frontend developer with a keen eye
                for design and a zeal for translating ideas into beautiful,
                functional websites, I'm dedicated to enhancing user experiences
                through code.
              </h4>
            </div>
          </div>
          <div className="ml-8 md:ml-0 mt-10 basis-3/6 md:flex block md:items-end md:justify-end relative">
            
            <img
              src={astronaut}
              className=" md:w-[35rem] w-[27rem] astronaut"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;