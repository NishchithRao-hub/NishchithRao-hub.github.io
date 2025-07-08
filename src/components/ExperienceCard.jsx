import React from "react";

const ExperienceCard = ({ title, company, date, description, logo }) => {
  return (
    <div className="relative pl-12 border-l-2 border-blue-500 mb-10">

      {/* Timeline dot */}
      <div className="absolute left-[-0.6rem] top-6 w-5 h-5 rounded-full bg-blue-500 z-10"></div>

      {/* Flex container for logo + content */}
      <div className="flex gap-6 items-start">

        {/* Company Logo */}
        {logo && (
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt={company}
              className="w-16 h-16 object-contain rounded-md shadow-md"
            />
          </div>
        )}

        {/* Text Content */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
          <p className="text-md font-medium text-blue-600 dark:text-blue-400">{company}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>

          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
            {description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
