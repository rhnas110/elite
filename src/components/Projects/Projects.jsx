import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useDarkMode } from "../../DarkModeContext";

export default function Projects() {
  const { darkMode } = useDarkMode();

  const projects = [
    {
      title: "EduFlex",
      description:
        "An educational platform allowing users to create custom playlists and take notes from YouTube videos. Includes a chatbot, leaderboard, and tracking features.",
      img: "https://via.placeholder.com/300x200", // Replace with actual image
    //   github: "https://github.com/your-repo/eduflex",
    //   liveDemo: "https://eduflex.live", // Replace with actual live demo link
    },
    {
      title: "Community Solar Sharing Platform",
      description:
        "A B2B platform enabling users to buy and sell shares in solar energy projects, track energy contributions, and calculate carbon impact.",
      img: "https://via.placeholder.com/300x200",
      github: "https://github.com/Aloneking789/SolarShare",
      liveDemo: "https://solarshare.netlify.app/",
    },
    {
      title: "Agrisure",
      description:
        "Agricultural website with crop disease detection using AI, supporting farmers with essential tools and resources.",
      img: "https://via.placeholder.com/300x200",
      github: "https://github.com/your-repo/agrisure",
    },
    // Add more projects as needed
  ];

  return (
    <div className={`${darkMode ? "light-dark" : "bg-white"} py-16`}>
      <div className={`container m-auto px-6 ${darkMode ? "text-white" : "text-gray-600"} md:px-12 xl:px-6`}>
          <h3 className="text-3xl font-bold mb-8 text-center md:text-left">Projects</h3>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                }`}
              >
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-800 hover:text-blue-500 transition-colors duration-300"
                    >
                      <FaGithub />
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-gray-800 hover:text-green-500 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
