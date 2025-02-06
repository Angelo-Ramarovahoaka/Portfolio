import React from 'react'
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';
const Skills =() => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}
         className="flex gap-20">
            <div>
                <div className="py-12 font-titleFont ">
                    <p className="text-sm text-designColor tracking-[4px]">Features</p>
                    <h2 className="text-4xl font-bold">Design Skill</h2>
                </div>
                <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard 
                    title="As - Science & Information"
                    subtitle="Mathmatics Informatique (2001 - 2005)"
                    result="4.00/5"
                    des="Higher education is tertiary leading to award of an academic degree. Higher education, also called post-secondary education"/>
                    <ResumeCard 
                    title="As - Science & Information"
                    subtitle="Mathmatics Informatique (2001 - 2005)"
                    result="4.00/5"
                    des="Higher education is tertiary leading to award of an academic degree. Higher education, also called post-secondary education"/>
                    <ResumeCard 
                    title="As - Science & Information"
                    subtitle="Mathmatics Informatique (2001 - 2005)"
                    result="4.00/5"
                    des="Higher education is tertiary leading to award of an academic degree. Higher education, also called post-secondary education"/>
                </div>
            </div>
            <div>
                <div className="py-12 font-titleFont ">
                    <p className="text-sm text-designColor tracking-[4px]">Features</p>
                    <h2 className="text-4xl font-bold">Development Skill</h2>
                </div>
                <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard 
                    title="As - Science & Information"
                    subtitle="Mathmatics Informatique (2001 - 2005)"
                    result="MNDPT"
                    des="Higher education is tertiary leading to award of an academic degree. Higher education, also called post-secondary education"/>
                    <ResumeCard 
                    title="As - Science & Information"
                    subtitle="Mathmatics Informatique (2001 - 2005)"
                    result="MISA"
                    des="Higher education is tertiary leading to award of an academic degree. Higher education, also called post-secondary education"/>
                    <ResumeCard 
                    title="As - Science & Information"
                    subtitle="Mathmatics Informatique (2001 - 2005)"
                    result="4.00/5"
                    des="Higher education is tertiary leading to award of an academic degree. Higher education, also called post-secondary education"/>
                </div>
            </div>
        </motion.div>
    )
}
export default Skills;