import React from "react";
import Container from "../Container/Container";
import chat from "../../assets/Screenshot (3).png";
import petrol from "../../assets/Screenshot (4).png";
import innovate from "../../assets/Screenshot (12).png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Chatting Application",
    description: "Frontend + Backend chatting app.",
    features: ["Chatting with friend", "Add Friend", "Block", "Authentication"],
    tech: ["React.js", "TailwindCSS", "Firebase", "Redux", "React Router"],
    website: "https://effulgent-lollipop-c75984.netlify.app/",
    github: "https://github.com/mustakin04/Chatting-application",
    image: chat,
  },
  {
    title: "Petroil",
    description: "Frontend part only.",
    features: ["Fully Responsive Website","React frontend",""],
    tech: ["React.js", "TailwindCSS", "React Router", "Netlify", "GitHub"],
    website: "https://ephemeral-buttercream-8e25a8.netlify.app/",
    github: "https://github.com/mustakin04/Petroil-Website",
    image: petrol,
  },
  {
    title: "E-Commerce",
    description: "Full-Stack E-Commerce Application",
    features: [
      "React frontend with responsive design",
      "Node.js/Express backend with session-based auth",
      "Admin dashboard for product & order management",
    ],
    tech: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "express-session",
      "SSLCommerz",
    ],
    website: "https://magnificent-lollipop-61ef33.netlify.app/",
    github: "https://github.com/mustakin04/Full-Ecommerce",
    image: innovate,
  },
];

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
    appendDots: (dots) => (
      <div className="absolute -bottom-8 w-full flex justify-center">
        <ul className="flex gap-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-4 h-4 rounded-full bg-[#e98b45] opacity-50 hover:opacity-100 transition"></div>
    ),
  };

  return (
    <div className="bg-[#212228] py-16 relative">
      <Container>
        <h1 className="text-[#e98b45] text-center font-dan font-bold text-[50px]">
          MY <span className="text-white ml-2">PROJECTS</span>
        </h1>

        <div className="mt-16 relative overflow-visible">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-3">
                <div className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-white text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-white text-lg mb-3">{project.description}</p>
                    <ul className="list-disc list-inside text-white mb-3">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#e98b45] text-black text-sm py-1 px-3 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between mt-4">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white border-2 border-[#e98b45] py-2 px-4 rounded hover:bg-[#e98b45] hover:text-black transition"
                      >
                        Website
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white border-2 border-[#e98b45] py-2 px-4 rounded hover:bg-[#e98b45] hover:text-black transition"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Project;
