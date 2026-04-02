import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4
    }
  }
};

const card = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};
export default function Project({ projectData }) {
  return (
    <section
      id="project"
      className="snap-start min-h-screen bg-black text-cream p-10"
    >

      <div className="flex gap-2 items-center">
        <div className="border-3 border-cream w-30 h-1 my-3"></div>
        <h3 className="font-jakarta font-bold text-xl">Projects</h3>
        <div className="border-3 border-cream w-30 h-1 my-3"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8 md:w-[88%] mx-auto min-h-[70vh]"
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={card}
            transition={{ duration: 2, ease: "easeOut" }}
            className="bg-[#132235] text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,255,255,0.25)]"
          >

            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5 space-y-3">

              <h2 className="font-extrabold font-jakarta text-lg">
                {project.title}
              </h2>

              <p className="text-gray-300 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-green-700/30 text-green-300 px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 pt-3 text-sm">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-white text-gray-300"
                  >
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-white text-gray-300"
                  >
                    Live Demo
                  </a>
                )}

              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}