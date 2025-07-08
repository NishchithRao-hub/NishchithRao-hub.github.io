import React from "react";
import ExperienceCard from "../components/ExperienceCard";

const experiences = [
  {
    title: "Graduate Teaching Assistant",
    company: "Northeastern University, Boston, MA",
    date: "Jan 2024 – May 2025",
    description: [
      "Teaching Assistant for the courses in Natural Language Processing (CS 6120) and Database Design (CS 3200).", 
      "Managed 60+ students, designed lab coursework, graded assignments, exams and conducted lectures and lab sessions for students."
    ],
    logo: "/northeastern.png"
  },
  {
    title: "Associate Software Engineer",
    company: "Capgemini, Bangalore, India",
    date: "Feb 2022 – Jul 2023",
    description: [
      "Contributed to Cisco’s Network Convergence System 4K, developed router network features and new modules  using Java Swing and XML.", 
      "Improved the Transport Controller GUI using Figma, deployed into production leading to performance improvement of the router by 4.5%.",
      "Collaborated with Verizon on Optical Network Enhancement to revamp the user interface and implement optic channel-based network convergence; led to 6.5% performance boost in Q2 by optimized routing and visualization modules.",
      "Completed a 3-month internship as a 'Full Stack Developer', worked on SpringBoot, distributed multi-tier systems, JavaScript and ReactJS."
    ],
    logo: "/capgemini.png"
  },
  {
    title: "Machine Learning Intern",
    company: "Verzeo",
    date: "Jul 2020 – Sep 2020",
    description: [
      "Performed gender classification using Twitter data with NLP techniques (sentiment analysis, TF-IDF) and trained Logistic Regression models using scikit-learn, NLTK, and seaborn/matplotlib for result visualization.",
      "Built an image classification pipeline using CNNs with TensorFlow, Keras, and OpenCV; optimized model performance with data augmentation, and maintained code and experiments with Git and virtual environments."
    ],
    logo: "/verzeo.jpeg"
  },
];

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
