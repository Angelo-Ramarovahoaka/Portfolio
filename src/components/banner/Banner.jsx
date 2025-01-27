import React from "react";
import LeftBanner from "./LeftBanner";
import BannerImg from "../../assets/images/bg.png"

const Banner= () => {
  return (
  <section id='home' 
  className="w-full min-h-screen pt-10 pb-20 flex items-center border-b-[1px] border-b-black font-titleFont">
    <LeftBanner/>
    <div className="w-1/2 flex justify-center items-center relative">
        <img src={BannerImg} alt="bannerimg" className="w-[500px] h-[470px] z-10"/>
        <div className="absolute bottom-0 w-[500px] h-[300px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  </section>
);
}
export default Banner;
