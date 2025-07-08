import React from "react";

const ProjectCard = ({ title, description, date, githubLink }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{date}</h2>
      <div className="mt-4 flex space-x-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            className="text-blue-500 hover:underline"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
