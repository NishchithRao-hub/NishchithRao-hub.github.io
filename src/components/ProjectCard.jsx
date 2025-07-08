import React from "react";

const ProjectCard = ({ title, date, description, githubLink, image }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
      
      {/* Project Image */}
      {image && (
        <div className="sm:w-48 sm:h-48 w-full h-64 bg-gray-100 dark:bg-gray-700 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Project Content */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
        </div>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
