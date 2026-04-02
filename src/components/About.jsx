import React from 'react'
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="snap-start min-h-screen bg-black text-cream p-10 md:p-30">

      <div className='flex flex-col shadow-[0_0_40px_rgba(255,255,255,0.3)] md:p-10 md:mr-10'>

        <div className='flex gap-2 items-center justify-center md:justify-start'>
          <div className='border-3 border-cream w-16 md:w-30 h-1 my-3'></div>
          <h3 className='font-jakarta font-bold text-lg md:text-xl'>About</h3>
          <div className='border-3 border-cream w-16 md:w-30 h-1 my-3'></div>
        </div>

        <div className='text-justify font-tinos flex flex-col md:flex-row w-full justify-between p-4 md:space-x-5'>

          <div className='w-full md:w-1/2 text-hig md:mt-10 md:text-lg text-sm'>

            <p className='mt-6 md:mt-15'>
              A MERN Stack Developer based in Bangalore, India, and a 2025 MCA graduate from CMR University.
              Passionate about building end-to-end web applications that are fast, secure, and user-friendly.
            </p>

            <p className='mt-3'>
              Comfortable working across the full stack — from designing responsive React interfaces
              to developing scalable Express APIs and structuring efficient MongoDB schemas.
              Focused on writing clean, maintainable code and delivering seamless user experiences.
            </p>

            <p className='mt-3'>
              Former President of the Software Development Cell at CMR University and an active contributor
              to the IT Club, with a strong belief that building communities is just as important as building software.
            </p>

          </div>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeIn" }}
  viewport={{ once: true }} className='grid grid-cols-1 md:grid-cols-2 font-tinos font-light md:gap-6 gap-3 md:p-9 w-full md:w-3/4'>

            <div className='flex flex-col md:flex-row p-5 md:p-9 gap-3 md:gap-6 border border-hig bg-slate-400/15 text-center justify-center mt-4 md:mt-15 rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]'>
              <div className='flex flex-col gap-1'>
                <p>Master of Computer Application</p>
                <p>CMR University</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p>CGPA: 9.19</p>
                <p>2023 - 2025</p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row p-5 md:p-9 gap-1 md:gap-6 border border-hig bg-slate-400/15 text-center justify-center mt-2 md:mt-15 rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]'>
              <div className='flex flex-col gap-1'>
                <p>Bachelor of Computer Application</p>
                <p>Mangalore University</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p>CGPA: 9.0</p>
                <p>2020 - 2023</p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row p-5 md:p-9 gap-3 md:gap-6 border border-hig bg-slate-400/15 text-center justify-center mt-4 md:mt-15 rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]'>
              <div className='flex flex-col gap-1'>
                <p>President</p>
                <p>Software Development Cell</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p>2024-2025</p>
                <p></p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row p-5  md:p-9 gap-3 md:gap-6 border border-hig bg-slate-400/15 text-center justify-center mt-4 md:mt-15 rounded-sm shadow-[0_0_19px_rgba(255,255,255,0.3)]'>
              <div className='flex flex-col gap-1'>
                <p>University Rank  5</p>
                <p>CMR University</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p>MCA</p>
              </div>
            </div>
</motion.div>
          </div>

        </div>
        <div className="mt-8 md:mt-12">
          <a
            href="#contact"
            className="border border-cream px-6 py-3 rounded-md hover:bg-cream hover:text-black transition"
          >
            Let’s Work Together
          </a>

      </div>

    <div className='border-3 border-cream w-120 md:w-350 ml-auto h-1 mt-90 md:mt-40 my-3'></div>

    </section>
  )
}