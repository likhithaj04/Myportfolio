import React from 'react'
import { motion } from "framer-motion";

export default function Skills({cardData}) {
  return (
    <>
    <section
      id="skills"
      className="snap-start h-screen bg-black text-cream md:p-30 p-10">
        
         <div className='flex gap-2'>
             <div className='border-3 border-cream w-30 h-1 my-3'></div>
        <h3 className='font-jakarta font-bold text-xl'>Skills</h3>
                     <div className='border-3 border-cream w-30 h-1 my-3'></div>
           
        </div>

<div className='grid grid-cols-1 md:grid-cols-2 font-tinos font-light mt-5 md:mt-30 gap-3 md:gap-6 md:max-w-7xl mx-auto  shadow-[0_0_15px_rgba(255,255,255,0.3)] md:p-20'>
        {
          cardData.map((card,index)=>(
 <motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeIn" }}
  viewport={{ once: true }}
  className='flex flex-col md:flex-row items-center p-5 gap-4 border border-hig bg-slate-400/15 rounded-sm transition-transform duration-300 hover:scale-105 hover:-translate-y-1'
>

    {card.icon}

    <div>
      <h2 className='font-extrabold font-jakarta'>{card.title}</h2>
      <p className='font-tinos'>{card.content}</p>
    </div>

  </motion.div>
))
    
        }
            </div>
    <div className='border-3 border-cream w-120 md:w-350 ml-auto h-1 mt-90 md:mt-50 my-3'></div>
      </section>
    </>
  )
}
