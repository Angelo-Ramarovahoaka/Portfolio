import { section } from 'framer-motion/client';
import react from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
    return (
        <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
            <div className='flex justify-center items-center text-center'>
                <Title title="Contact" des="Contact With Me"/>
            </div>
            <div className='w-full'>
                <div className='w-full h-auto flex justify-between'>
                    <ContactLeft/>
                    <div className='w-[60%] h-full py-10 bg-gradient-to-r from-[1e2024] to-[23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
                        <form className='w-full'>
                            <div>
                                <p>YOUR NAME</p>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;