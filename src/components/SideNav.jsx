import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function SideNav() {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-5 right-5 z-50 text-cream text-3xl"
      >
        {open ? <HiX /> : <HiMenu />}
      </button>


      <div
        className={`
        md:hidden fixed top-0 right-0 h-full w-40
        bg-black border-l border-cream
        flex flex-col gap-8 pt-24 px-6
        font-jakarta font-bold text-cream
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >

        <a href="#home" onClick={() => setOpen(false)}
          className="border border-cream px-6 py-3 rounded-md hover:bg-cream hover:text-black transition">
          Home
        </a>

        <a href="#about" onClick={() => setOpen(false)}
          className="border border-cream px-6 py-3 rounded-md hover:bg-cream hover:text-black transition">
          About
        </a>

        <a href="#skills" onClick={() => setOpen(false)}
          className="border border-cream px-6 py-3 rounded-md hover:bg-cream hover:text-black transition">
          Skills
        </a>

        <a href="#project" onClick={() => setOpen(false)}
          className="border border-cream px-6 py-3 rounded-md hover:bg-cream hover:text-black transition">
          Project
        </a>

        <a href="#contact" onClick={() => setOpen(false)}
          className="border border-cream px-6 py-3 rounded-md hover:bg-cream hover:text-black transition">
          Contact
        </a>

      </div>

      <ul
        className="
        hidden md:flex
        fixed right-0 top-1/2 -translate-y-1/2
        flex-col gap-9
        font-jakarta font-bold text-cream
        "
      >

        <li>
          <a href="#home"
            className="border border-cream inline-block px-11 py-3 rounded-md transition-all duration-200 hover:ring-2 hover:ring-cream hover:ring-offset-2 ring-offset-black hover:scale-105 hover:-translate-x-1">
            Home
          </a>
        </li>

        <li>
          <a href="#about"
            className="border border-cream inline-block px-11 py-3 rounded-md transition-all duration-200 hover:ring-2 hover:ring-cream hover:ring-offset-2 ring-offset-black hover:scale-105 hover:-translate-x-1">
            About
          </a>
        </li>

        <li>
          <a href="#skills"
            className="border border-cream inline-block px-12 py-3 rounded-md transition-all duration-200 hover:ring-2 hover:ring-cream hover:ring-offset-2 ring-offset-black hover:scale-105 hover:-translate-x-1">
            Skills
          </a>
        </li>

        <li>
          <a href="#project"
            className="border border-cream inline-block px-11 py-3 rounded-md transition-all duration-200 hover:ring-2 hover:ring-cream hover:ring-offset-2 ring-offset-black hover:scale-105 hover:-translate-x-1">
            Project
          </a>
        </li>

        <li>
          <a href="#contact"
            className="border border-cream inline-block px-10 py-3 rounded-md transition-all duration-200 hover:ring-2 hover:ring-cream hover:ring-offset-2 ring-offset-black hover:scale-105 hover:-translate-x-1">
            Contact
          </a>
        </li>

      </ul>

    </div>
  );
}