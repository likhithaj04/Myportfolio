import React from 'react'
import me from '../assets/me.png'
import { motion } from 'framer-motion'

export default function Landing() {
  return (
 <>
 <section id="home" className="snap-start min-h-screen bg-black">

 <div className='flex flex-col'>

     <div className='bg-black min-h-screen text-amber-50 p-6 sm:p-10 md:p-24'>

      <div className='p-6 sm:p-20 '>

          <motion.div
  initial={{ opacity: 0, y: 14 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeIn" }}
  viewport={{ once: true }} className='border-2 border-cream max-w-sm p-1 sm:p-2 md:p-3 text-center font-tinos font-bold text-hig shadow-[0_0_15px_rgba(255,255,255,0.3)]'>
         <h3>MERN STACK DEVELOPER</h3>
      </motion.div>

      <div className='flex justify-between items-start'>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeIn" }}
        viewport={{ once: true }}className='font-serif font-bold text-[32px] sm:text-[60px] md:text-[120px]'>

         <h3 className='mt-3 sm:mt-6 md:mt-10 text-amber-50 '>LIKHITHA </h3>

         <h3 className='text-cream'>AJ</h3>

          <div
          className='text-xs sm:text-sm p-2 mt-6 sm:mt-10 flex flex-row gap-4 sm:gap-6 opacity-55'>
            <h3>SOFTWARE DEVELOPER</h3>
            <p>BENGALURU INDIA</p>
          </div>

         </motion.div>

          <div className='justify-end font-ultra text-[120px] md:text-[180px] text-cream opacity-7 p-10 md:p-20 hidden md:block'>
         <h1>DEV</h1>
      </div>

         </div>

         <div className='mt-6 sm:mt-10 md:mt-15 flex flex-col md:flex-row gap-5 md:gap-20 md:justify-between'>

            <p className='font-tinos text-sm md:text-xl text-hig opacity-77'>
            Enjoys turning ideas into functional web applications and RESTful APIs.<br/>
            Passionate about clean coding practices, interactive user experiences,<br/>
            and continuously learning new technologies to build better and more efficient solutions.
            </p>

            <motion.div
  initial={{ opacity: 0, y: 1, scale: 0.5 }}
  whileInView={{ opacity: 1.5, y: 0, scale: 0.8 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }} className='font-jakarta flex gap-6 sm:gap-10 mr-10 h-20 md:mr-50'>

               <button className='text-black bg-cream px-2 py-1 border hover:bg-orange-200'>
               VIEW PROJECTS
               </button>

            <button className='border border-slate-400 text-cream px-2 transition-all duration-200 hover:ring-1 hover:ring-cream'>
            GET IN TOUCH
            </button>

            </motion.div>

         </div>

      </div>

     </div>

        <div className='border-3 border-cream w-1/2 ms-6 sm:ms-20 h-1 my-3'></div>

     </div>

     </section>
 </>
  )
}