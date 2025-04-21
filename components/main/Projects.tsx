import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-1 -mt-24"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
      My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
      <ProjectCard
        src="/portfolio.png"
        title={
        <a
          href="https://example.com/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Modern Next.js Portfolio
        </a>
        }
        description="This portfolio website is a modern, interactive showcase built with Next.js, Tailwind CSS, JavaScript, and Three.js. Designed with a focus on clean UI and fluid animations, it reflects my passion for responsive design and immersive user experiences. From subtle cursor effects to 3D elements, every detail is crafted to leave a lasting impression while highlighting my skills as a full stack developer."
      />
      <ProjectCard
        src="/crowdfunding.png"
        title={
        <a
          href="https://github.com/Bpranavkrishnan/CrowdNest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          CrowdNest - Crowdfunding Platform
        </a>
        }
        description="This crowdfunding web application is a full-stack project built using the MERN stack — MongoDB, Express.js, React.js, and Node.js. It allows users to seamlessly create and manage fundraising campaigns, donate securely, and track campaign progress in real-time. With a dynamic and user-friendly interface, the platform replicates key features from leading crowdfunding sites like GoFundMe, offering login-based donation access, smart campaign goal tracking, and an admin dashboard for campaign approvals. The entire app is designed with clean logic, secure workflows, and an intuitive user experience at its core."
      />
      <ProjectCard
        src="/phyllclone.png"
        title={
        <a
          href="https://example.com/phyll-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Phyll website clone
        </a>
        }
        description="This is a frontend UI clone inspired by the official Phyll website, built using HTML5, CSS3, JavaScript, and Bootstrap. The project focuses on recreating the sleek, modern aesthetic of Phyll with pixel-perfect layouts, responsive design, and smooth UI elements. It showcases my ability to analyze and replicate professional web interfaces while maintaining clean code structure and visual consistency across devices."
      />
      <ProjectCard
        src="/weatherapp.png"
        title={
        <a
          href="https://example.com/https://github.com/Bpranavkrishnan/React-Realtime-Weather-App.git-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          React-Weather App
        </a>
        }
        description="This weather application is a React-based project that provides real-time weather updates and forecasts. Utilizing the OpenWeatherMap API, it fetches and displays current weather conditions, hourly forecasts, and 7-day predictions for any location worldwide. The app features a user-friendly interface with dynamic background changes based on weather conditions, ensuring an engaging user experience. Built with React, CSS, and JavaScript, it emphasizes responsive design and clean code practices."
      />
      <ProjectCard
        src="/zomatoapp.png"
        title={
        <a
          href="https://github.com/Bpranavkrishnan/ZomatoCloneUI-Flutterapp.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Flutter ZomatoClone UI
        </a>
        }
        description="This is a frontend UI clone of the Zomato mobile app, developed using Flutter for both Android and iOS platforms. The project replicates the core design elements of Zomato, including intuitive navigation, stylish food listing cards, bottom navigation bar, and a modern search experience. Built with Flutter’s flexible widget system, the UI is responsive, smooth, and visually aligned with real-world food delivery standards — showcasing my ability to recreate high-quality mobile interfaces with precision and performance in mind."
      />
      <ProjectCard
        src="/healwiz.png"
        title={
        <a
          href="https://github.com/Bpranavkrishnan/HealWiz-A-disease-finding-app.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Healwiz-Disease finder App
        </a>
        }
        description="HealWiz is a smart health assistance app developed using Flutter and Dart, designed to help users identify potential diseases by analyzing images. With a clean and responsive UI, the app lets users upload or capture photos of skin conditions or visible symptoms, which are then processed using AI-driven logic (or ready for backend integration). HealWiz combines smooth mobile UX with futuristic healthcare features, serving as a foundation for building AI-powered diagnostic tools in mobile health tech."
      />
      </div>
    </div>
  );
};

export default Projects;
