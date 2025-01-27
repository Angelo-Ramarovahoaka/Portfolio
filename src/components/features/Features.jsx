import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { SiProgress } from "react-icons/si";
import { FaMobile, FaGlobe, FaCode,FaSeedling  } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";

const Features= () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-3 gap-20">
        <Card title="Business Strategy" des="I help businesses develop strategies to improve their performance and ..." />
        <Card title="App Development" des="I create mobile and web applications that are user-friendly and efficient." icon={<FaCode />} />
        <Card title="SEO Optimization" des="I improve website visibility and search engine rankings through effective SEO techniques." icon={<SiProgress />} />
        <Card title="Agro Technology" des="I integrate technology into agriculture to improve productivity and sustainability." icon={<FaSeedling />} />
        <Card title="UI/UX Design" des="I design user interfaces and experiences that are intuitive and visually appealing." icon={<SiAntdesign />} />
        <Card title="Hosting Websites" des="I provide reliable and secure hosting solutions for websites to ensure optimal performance." icon={<FaGlobe />} />
      </div>
    </section>
  );
}
export default Features;
