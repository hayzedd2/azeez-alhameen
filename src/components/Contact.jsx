import React from "react";
import {AiFillPhone ,AiFillMail } from "react-icons/ai";
import { BsGithub , BsLinkedin ,BsTwitter} from "react-icons/bs";

const Contact = () => {
  return (
    <div className=" bg-[#050816]">
      <div className="container max-w-7xl px-5 mx-auto  min-h-fit  py-8 md:py-0 md:min-h-[30vh] flex items-center justify-center flex-col">
        <h4 className="font-lexend mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#80dfff] to-[#ffcccc] via-[#df80ff] animate-gradient text-lg"> Get In touch with me</h4>
        <p className="leading-normal font-lexend text-sm text-white">
          Thank you for visiting my portfolio! I'm thrilled you've taken the
          time to explore my work.
          . Your visit means a lot to me, and I'm eager to hear
          from you.
        </p>
        <div className="flex w-full items-start md:items-center gap-6 md:gap-0 md:justify-between mt-8 md:mt-10 flex-wrap">
           <div>
            <a href="tel:+2349024870837" className="font-lexend text-[0.9rem] md:text-[1.15rem] flex gap-1 items-center text-white"> Call me <AiFillPhone/></a>
           </div>
           <div >
            <a href="mailto:azeezalhameen@gmail.com" className="font-lexend text-[0.9rem] md:text-[1.15rem]  flex gap-1 items-center text-white">Email <AiFillMail/></a>
           </div>
           <div  className="flex gap-2 items-center">
            <a href=" http://linkedin.com/in/azeez-alhameen-9a604026a" className="font-lexend  text-[0.9rem] md:text-[1.15rem]  flex gap-1 items-center text-white">LinkedIn <BsLinkedin/></a>
           </div>
          
           <div >
            <a href="https://github.com/hayzedd2" className="font-lexend text-[0.9rem] md:text-[1.15rem]  flex gap-1 items-center text-white">Github <BsGithub/></a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
