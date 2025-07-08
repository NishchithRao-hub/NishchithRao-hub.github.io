import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      
      {/* Top Section: Profile + Intro */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto"> */}
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/Website_DP.jpeg"
            alt="Profile"
            className="w-56 h-56 rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>

        {/* Name & Typewriter */}
        <div className="md:col-span-2 flex flex-col justify-center md:items-start text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-2">
            Nishchith Rao Palimar Raghupathi
          </h1>
          <h2 className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400">
            <Typewriter
              words={[
                "Masters in Computer Science Student at Northeastern University",
                "Graduate Teaching Assistant",
                "Former Associate Software Developer @Capgemini",
                "Machine Learning & Data Science Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </div>
      </div>

      {/* Intro Paragraphs */}
      <div className="text-gray-700 dark:text-gray-300 max-w-5xl mx-auto md:pl-28 px-4 space-y-4 leading-relaxed text-justify">
      <p>
          Passionate about solving complex problems through innovative solutions, I’m a Master’s in Computer Science student at Northeastern University, specializing in AI, Machine Learning, and backend development. With hands-on experience as an Associate Software Engineer at Capgemini, I contributed to optimizing network systems, achieving measurable performance gains.
        </p>
        <p>
          As a Teaching Assistant, I’ve guided students in NLP and database design, honing my ability to simplify intricate concepts. From designing an energy optimization pipeline for smart homes to building autonomous Mars exploration systems using deep reinforcement learning, I love the intersection of technology and creativity. Driven by curiosity and a commitment to innovation, I wish to use data-driven insights and latest technologies to build scalable solutions that make a difference. I’m currently open to opportunities and looking to collaborate on impactful, data-driven projects.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/Nishchith_Rao_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Resume
        </a>
        <Link
          to="/projects"
          className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Projects
        </Link>
        <Link
          to="/experience"
          className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Experience
        </Link>
      </div>

    {/* Contact Form (Formspree) */}
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Contact Me
        </h2>
        <form
          action="https://formspree.io/f/meoknppz"  // 🔁 Replace with your real Formspree endpoint
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">To Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;