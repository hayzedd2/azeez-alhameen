import React from "react";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <div className=" bg-[#050816] min-h-[60vh] py-20  flex-col px-5 md:px-0">
      <div className="container max-w-7xl mx-auto flex flex-col">
        {/* <h2 className="text-[1.05rem] md:text-[1.3rem] bg-[#004d4d]  w-[10rem] md:w-[11rem] flex items-center justify-center font-[700] gap-2  p-2 text-[#80dfff] font-kumb">
          <p className="text-[0.95rem]">O3.</p>
          <p>Contact</p>
        </h2> */}

        <div className="flex w-full items-center justify-center flex-col mt-10">
          <h4 className="font-kumb mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#80dfff] to-[#ffcccc] via-[#df80ff] animate-gradient text-[2rem] font-[600]">
            Get In touch with me
          </h4>
          <p className="font-kumb text-[1rem] md:text-[1.15rem] font-[500] mb-3 max-w-[600px] text-white text-center leading-[1.9rem] md:leading-[2.1rem]">
            Thank you for visiting my portfolio! I'm thrilled you've taken the
            time to explore my work. . Your visit means a lot to me, and I'm
            eager to hear from you.
          </p>
          <button>
            <a href="mailto:azeezalhameen1@gmail.com" className="relative">
              <span className="w-[12rem] h-[3.5rem] mt-5 flex text-[#80dfff] bg-[#004d4d] font-[600] items-center justify-center font-kumb text-[1.05rem] rounded-[8px]">
                Contact me
              </span>
              
            </a>
          </button>

          <div className="flex w-full items-start  md:items-center gap-6 justify-center mt-8 md:mt-10 flex-wrap">
            {/* <div>
              <a
                href="tel:+2349024870837"
                className="font-lexend text-[0.9rem] md:text-[1.15rem] flex gap-1 items-center text-white"
              >
                {" "}
                Call me <AiFillPhone />
              </a>
            </div>
            <div>
              <a
                href="mailto:azeezalhameen@gmail.com"
                className="font-lexend text-[0.9rem] md:text-[1.15rem]  flex gap-1 items-center text-white"
              >
                Email <AiFillMail />
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <a
                href=" http://linkedin.com/in/azeez-alhameen-9a604026a"
                className="font-lexend  text-[0.9rem] md:text-[1.15rem]  flex gap-1 items-center text-white"
              >
                LinkedIn <BsLinkedin />
              </a>
            </div>

            <div>
              <a
                href="https://github.com/hayzedd2"
                className="font-lexend text-[0.9rem] md:text-[1.15rem]  flex gap-1 items-center text-white"
              >
                Github <BsGithub />
              </a>
            </div> */}
             <div className="flex gap-4 mt-5 text-[#80dfff]">
              <a href=" http://linkedin.com/in/azeez-alhameen-9a604026a">
                <BsLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/hayzedd2">
                <BsGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
