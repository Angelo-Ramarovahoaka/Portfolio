import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import contact from "../../assets/images/Contact/4957160.jpg"

const ContactLeft = () => {
  return (
    <div className='w-[35%] h-full bg-gradient-to-r from-[1e2024] to-[23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
        <img 
        className='w-full h-64 object-cover rounded-lg mb-2'
            src={contact} alt="contact" />
        <div className='flex flex-col gap-4'>
            <h3 className='text-3xl font-bold text-white'>Angelo Ramarovahoaka</h3>
            <p className='text-lg font-normal text-gray-400'>MERN Stack Developper</p>
            <p className='text-base text-gray-400 tracking-wide'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className='text-base text-gray-400 flex items-center gap-2'>
                Phone: <span className='text-lightText'>+261 20 344 96</span>
            </p>
            <p className='text-base text-gray-400 flex items-center gap-2'>
                Email: <span className='text-lightText'>angeloramarovahoaka@gmail.com</span>
            </p>
        </div>
        <div className='flex flex-col gap-4'>
            <h2 className='text-base font-titleFont mb-4'>
                FIND ME ON
            </h2>
            <div className='flex gap-4'>
                <span className='bannerIcon'>
                    <FaFacebook/>
                </span>
                <span className='bannerIcon'>
                    <FaTwitter/>
                </span>
                <span className='bannerIcon'>
                    <FaLinkedin/>
                </span>
            </div>
        </div>
    </div>
  );
};
export default ContactLeft;