import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id='contact' className="snap-start min-h-screen bg-black text-cream p-10 md:p-30">

      <div className='flex gap-2 items-center'>
        <div className='border-3 border-cream w-16 md:w-30 h-1 my-3'></div>
        <h3 className='font-jakarta font-bold text-xl'>Contact</h3>
        <div className='border-3 border-cream w-16 md:w-30 h-1 my-3'></div>
      </div>

      <div className='flex flex-col gap-10 md:gap-40 p-5 md:p-20'>
        <div className='flex justify-between'>
        <div className='text-xl text-shadow-hig md:w-1/2'>
          <h3 className='text-3xl md:text-5xl font-bold font-jakarta'>Lets Talk</h3>

          <p className='font-tinos p-2 md:p-4 text-lg md:text-2xl mt-5 text-hig'>
            Open to full time roles, or just a good conversation about tech.
            <br />
            Drop me a message and I'll get back to you
          </p>
        </div>
        
          <div className='justify-end font-ultra text-[120px] md:text-[150px] text-cream opacity-7 p-10  hidden md:block'>
         <h1>DEV</h1>
      </div>
</div>
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeIn" }}
  viewport={{ once: true }}
  className="flex flex-col md:flex-row flex-wrap gap-8 w-full justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] md:p-5"
>

<div className="flex items-center p-6 md:p-8 gap-6 border border-hig bg-slate-400/15 rounded-sm w-full md:w-[320px] text-base md:text-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-1 shadow-[0_0_15px_rgba(255,255,255,0.3)]">

<MdOutlineEmail className="text-4xl md:text-6xl"/>

<div>
<p>Email</p>
<p className="break-all text-sm md:text-base">
likhitha15jayram@gmail.com
</p>
</div>

</div>

<div className="flex items-center p-6 md:p-8 gap-6 border border-hig bg-slate-400/15 rounded-sm w-full md:w-[320px] text-base md:text-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-1 shadow-[0_0_15px_rgba(255,255,255,0.3)]">

<CiLinkedin className="text-4xl md:text-6xl"/>

<div>
<p>LinkedIn</p>
<p className="text-sm md:text-base break-all">
<a href='https://www.linkedin.com/in/likhitha-aj/'>linkedin/likhitha-aj/</a>
</p>
</div>

</div>

<div className="flex items-center p-6 md:p-8 gap-6 border border-hig bg-slate-400/15 rounded-sm w-full md:w-[320px] text-base md:text-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-1 shadow-[0_0_15px_rgba(255,255,255,0.3)]">

<VscGithub className="text-4xl md:text-6xl"/>

<div>
<p>Github</p>
<p className="text-sm md:text-base break-all">
<a href='https://github.com/likhithaj04'>github/likhithaj04</a> 
</p>
</div>

</div>

</motion.div>
</div>
    </section>
  )
}