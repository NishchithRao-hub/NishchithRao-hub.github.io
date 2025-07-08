import React from "react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">My Resume</h1>

      {/* Download Button */}
      <div className="text-center mb-6">
        <a
          href="/Nishchith_Rao_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          download
        >
          Download Resume
        </a>
      </div>

      {/* Embed PDF */}
      <div className="w-full h-[80vh] border rounded-lg overflow-hidden">
        <iframe
          src="/Nishchith_Rao_Resume.pdf"
          className="w-full h-full"
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
