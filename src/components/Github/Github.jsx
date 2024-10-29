import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useDarkMode } from "../../DarkModeContext";

const members = [
  {
    name: "Vishnu Dubey",
    logo: "https://avatars.githubusercontent.com/u/113883504?v=4",
    github: "https://github.com/vishnuzdubey",
    instagram: "https://i.ytimg.com/vi/f3rMANl9lP4/hqdefault.jpg",
    linkedin: "https://www.linkedin.com/in/vishnu-dubey-2423b0254/",
  },
  {
    name: "Abhay Pandey",
    logo: "https://avatars.githubusercontent.com/u/116704975?v=4",
    github: "https://github.com/aloneking789",
    instagram: "http://whiterose.infinityfreeapp.com/",
    linkedin: "https://www.linkedin.com/in/abhay-pandey-595818253/",
  },
  {
    name: "Abhijeet Gupta",
    logo: "https://avatars.githubusercontent.com/u/129390867?v=4",
    github: "https://github.com/ag21o9",
    instagram: "https://leetcode.com/u/Abhijeet21o9/",
    linkedin: "https://www.linkedin.com/in/abhijeet-gupta-552ba5208/",
  },
  {
    name: "Vaishnavi Singh",
    logo: "https://avatars.githubusercontent.com/u/173715475?v=4",
    github: "https://github.com/vaishnavizsingh",
    instagram: "#",
    linkedin: "https://www.linkedin.com/in/vaishnavi-singh-33a5b2271/",
  },
];

function Github() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`p-10 rounded-lg shadow-lg transition-all duration-500 ${
        darkMode ? "light-dark text-white" : "bg-gradient-to-br from-white to-gray-100 text-gray-900"
      }`}
    >
      <h1 className="text-4xl font-bold text-center mb-8 animate-fadeIn">Team Elite</h1>
      <img
        src="https://cdn.marvel.com/content/1x/001avn_ons_inl_02_0.jpg"
        alt="Team Elite"
        className="w-full h-auto max-w-2xl mx-auto mb-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
      />

      <div className="flex flex-wrap justify-center">
        {members.map((member, index) => (
          <div
            key={index}
            className={`p-6 m-4 rounded-lg shadow-lg max-w-xs flex flex-col items-center transition-transform duration-300 transform hover:scale-105 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            <img
              src={member.logo}
              alt={member.name}
              className="w-20 h-20 rounded-full mb-4 shadow-lg border-2 border-blue-500 hover:border-blue-700 transition duration-300"
            />
            <h2 className="text-xl font-semibold text-center">{member.name}</h2>
            <p className="text-sm text-center mt-2 opacity-80 italic">
              Backend Developer
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-800 hover:text-blue-500 transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-pink-600 hover:text-pink-800 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-700 hover:text-blue-900 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Github;
