import React from "react";
import Title from '../layouts/Title';
import ProjectsCard from "./ProjectCard";
import Project1 from "../../assets/images/Projects/img1.png";
import Project2 from "../../assets/images/Projects/img2.png";
import Project3 from "../../assets/images/Projects/img3.png";
import Project4 from "../../assets/images/Projects/img4.jpeg";
const Projects = () => {
    return (
        <section 
        id="projects"
        className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
            <Title
                title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                des="My Projects"
            />
            </div>
            <div className="grid grid-cols-3 gap-14"> 
                <ProjectsCard
                title="SOCIAL MEDIA CLONE"
                des="A clone of a popular social media platform with basic functionalities."
                src={Project1}
                />
                <ProjectsCard
                title="E-COMMERCE WEBSITE"
                des="An e-commerce website with product listings, cart, and checkout features."
                src={Project2}
                />
                <ProjectsCard
                title="CHATTING APP"
                des="A real-time chatting application with user authentication."
                src={Project3}
                />
                <ProjectsCard
                title="NEURAL NETWORK"
                des="A project demonstrating a basic neural network implementation."
                src={Project4}
                />
                <ProjectsCard
                title="EVENTS GESTONARY"
                des="An application to manage and organize events efficiently."
                src={Project2}
                />
                <ProjectsCard
                title="STUDENT SCOLARITY"
                des="A system to manage student records and academic performance."
                src={Project1}
                />
            </div>
        </section>
    );
}

export default Projects