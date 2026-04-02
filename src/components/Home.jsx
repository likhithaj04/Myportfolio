import React from 'react'
import Landing from './Landing'
import About from './About'
import SideNav from './SideNav'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
import { FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";
import resqheartimg from '../assets/ResQheart.png';
import airviewsimg from '../assets/airviews.png';
import analyser from '../assets/analyser.png';
import artgallery from '../assets/artgallery.jpg';
import petimg from '../assets/petassistant.png'


function Home() {
const cardData = [
  {
    title: "Languages",
    content: "JavaScript, Python",
    icon: <FaJsSquare className="text-yellow-400 text-2xl md:text-3xl" />
  },
  {
    title: "Frontend",
    content: "ReactJs, HTML, CSS, TailwindCss",
    icon: <FaReact className="text-cyan-400 text-2xl md:text-3xl" />
  },
  {
    title: "Backend",
    content: "Nodejs, ExpressJs, REST API",
    icon: <FaNodeJs className="text-green-500 text-2xl md:text-3xl" />
  },
  {
    title: "Database",
    content: "MongoDB, SQL(Basics)",
    icon: <FaDatabase className="text-emerald-400 text-2xl md:text-3xl" />
  },
  {
    title: "Tools",
    content: "Git, GitHub, VSCode",
    icon: <FaTools className="text-orange-400 text-2xl md:text-3xl" />
  }
]

const projectData = [
{
  title: "ResQHeart",
  stack: ["JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, Bootstrap"],
  image:resqheartimg,
  description:
    "A full-stack MERN platform focused on improving the lives of stray animals by enabling adoption, donations, and shelter support.",
  features: [
    "JWT based secure authentication for protected routes",
    "Supports image uploads and storage via Cloudinary",
    "Integrated RazorPay payment gateway for donations",
    "Automated email notifications for adoption updates",
    "Handles pet listings, adoption workflows, and shelter data",
    "Responsive UI built using Bootstrap"
  ],
  integrations: ["RazorPay", "Cloudinary", "JWT", "Automated Email"],
    github: "https://github.com/likhithaj04/ResQHeart",
  demo: "https://res-q-heart.vercel.app/"
},

{
  title: "AiAnalyser",
  stack:[ "JavaScript, ReactJS, ExpressJS, TailwindCSS"],
  image:analyser,
  description:
    "An AI powered tool that analyzes resumes and LinkedIn profiles to provide insights on strengths, weaknesses, and ATS compatibility.",
  features: [
    "Resume parsing and text extraction from uploaded files",
    "AI powered scoring system for resume evaluation",
    "LinkedIn profile analysis and feedback generation",
    "Suggests improvements for ATS optimization",
    "Clean UI with Tailwind CSS"
  ],
  integrations: ["Groq AI"],
  github: "https://github.com/likhithaj04/AiAnalyser",
  demo: "https://ai-analyser-28q7v1xt7-likhithas-projects-582bf488.vercel.app/"
},

{
  title: "ArtGallery",
  stack:["JavaScript, EJS, MongoDB, Bootstrap"],
  image:artgallery,
  description:
    "A platform where artists can upload and showcase artwork while art enthusiasts explore creative collections.",
  features: [
    "User authentication using PassportJS",
    "Artwork upload with Cloudinary image storage",
    "Gallery style display of artworks",
    "Artist specific artwork management",
    "Secure login and session management"
  ],
  integrations: ["Cloudinary", "PassportJS"],
    github: "https://github.com/likhithaj04/ArtGallery",
  demo: "https://artgallery-8qz7.onrender.com"
},

{
  title: "Pet Care Assistant",
  stack: ["ReactJS, ExpressJS, Pinecone, LangChain, TinyLlama"],
  image:petimg,
  description:
    "An AI powered pet care assistant that answers health and care related queries using RAG (Retrieval Augmented Generation).",
  features: [
    "RAG architecture for accurate contextual answers",
    "Vector database search using Pinecone",
    "LLM powered response generation using TinyLlama",
    "Knowledge retrieval from curated pet care resources",
    "Interactive chat interface for users"
  ],
  integrations: ["Ollama", "LangChain", "Pinecone"],
  github: "https://github.com/likhithaj04/Pet-careAssistant",
  demo: ""
},

{
  title: "AirView",
  stack: ["JavaScript, MongoDB, EJS, Bootstrap"],
  image:airviewsimg,
  description:
    "A web application inspired by Airbnb that allows users to explore property listings and manage rental spaces.",
  features: [
    "User authentication using PassportJS",
    "Property listing creation and management",
    "Image upload and storage using Cloudinary",
    "Review and rating system for listings",
    "Dynamic server side rendering using EJS"
  ],
  integrations: ["Cloudinary", "PassportJS"],
  github: "https://github.com/likhithaj04/airViews",
  demo: ""
}
]
  return (
    <>
<div className="relative">

  <SideNav />

  <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
    <Landing />
    <About />
    
    <Skills cardData={cardData} />

   <Project projectData={projectData}/>
   <Contact/>
  </div>

</div>

    </>
  )
}

export default Home
