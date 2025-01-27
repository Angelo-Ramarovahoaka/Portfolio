import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner= () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.","Full Stack Developer.","UI Designer."],
        Loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
  return (
    <div className="w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Ramarovahoaka</span>
            </h1>
            <h2 className="text-4xl font-bold text-white">a <span>{text}</span>
            <Cursor 
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
            />
            </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide">
                I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
            </p>
        </div>
        <div className="flex justify-between">
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
            <div className="flex gap-4">
                <span className="bannerIcon"><FaFacebookF/></span>
                <span className="bannerIcon"><FaTwitter/></span>
                <span className="bannerIcon"><FaLinkedinIn/></span>
            </div>
        </div> 
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">best skill on</h2>
            <div className="flex gap-4">
                <span className="bannerIcon"><FaReact/></span>
                <span className="bannerIcon"><SiNextdotjs/></span>
                <span className="bannerIcon"><SiTailwindcss/></span>
                <span className="bannerIcon"><SiFigma/></span>
            </div>
        </div> 
        </div>
    </div>
);
}
export default LeftBanner;
