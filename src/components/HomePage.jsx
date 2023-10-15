import React from "react";
import astronaut from "../images/pngwing.com (3)-451c8d7b.png";
import bgImg from '../images/IMG_4135.png'
const HomePage = () => {
  return (
    <div className="bg-cover bg-center  bg-no-repeat min-h-[95vh] md:min-h-screen px-3 md:px-5 flex items-center justify-center overflow-y-hidden " style={{backgroundImage : `url(${bgImg})`}}  >
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-full flex  flex-col items-center justify-center basis-3/6">
          <div className=" text-left md:text-left">
            <h6 className=" font-lexend text-white text-[1.45rem] md:text-[2.5rem]  p-0 flex flex-col  font-[200]">
              Hi there, I am{" "}
              <span>
                <h2 className="md:text-[4rem] text-[2.4rem] font-lexend font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#80dfff] to-[#ffcccc] via-[#df80ff] animate-gradient">
              
                  Azeez Alhameen
                </h2>
              </span>{" "}
            </h6>
            <h3 className="md:text-[1.8rem] mb-2 md:my-2 text-[1.3rem] font-lexend font-[400] md:text-[600]  text-transparent bg-clip-text bg-gradient-to-r from-[#ffcccc] to-[#80dfff] via-[#df80ff] animate-gradient">Front-end <span className="text-white">Web Developer</span></h3>

            <h4 className="font-lexend  text-white max-w-none md:max-w-4xl mx-auto text-[0.75rem] md:text-[0.95rem]  leading-5 md:leading-7">
            I'm a passionate and creative frontend developer with a keen eye for design and a knack for translating ideas into beautiful, functional websites, I'm dedicated to enhancing user experiences through code.
            </h4>
          </div>
        </div>
        <div className="ml-8 md:ml-0 mt-10 basis-3/6 md:flex block md:items-end md:justify-end">
          <img src={astronaut} className=" md:w-[35rem] w-[27rem]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
