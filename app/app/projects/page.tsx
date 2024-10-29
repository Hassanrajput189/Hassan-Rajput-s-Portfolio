"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const handleNavigation = (url:string) => {
  if (!url) {
    alert("invalid URL");
    return;
  }
  window.open(url);
};

// Projects Data
const projects = [
  {
    image: "/iTask.png",
    name: "iTask",
    desc: "This to-do list app offers a clean, responsive interface for managing tasks with real-time updates, allowing users to effortlessly add, edit, and delete tasks.",
    tech: ["React", "Node", "Next"],
    url: "https://github.com/Hassanrajput189/iTask-Todo-List-App.git"
  },
  {
    image: "/PassLOCK.png",
    name: "PassLOCK",
    desc: "PassLOCK is a secure password manager that simplifies password storage and management, enabling users to create strong passwords and access credentials through a sleek interface",
    tech: ["React", "Node", "Next"],
    url: "https://github.com/Hassanrajput189/PassLOCK-Password-Manager.git"
  },
  {
    image: "/Spotify_clone.png",
    name: "Spotify Clone",
    desc: "This Spotify clone enables users to upload, organize, and listen to their favorite tracks, providing a seamless, personalized music experience for efficient music library management.",
    tech: ["React", "Node", "Next"],
    url: "https://github.com/Hassanrajput189/Spotify-clone.git"
  },
];

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center my-16">
        <div className="max-h-screen w-[80vw]">
          <div className="flex flex-wrap justify-center items-center gap-20 flex-grow">
            {projects.map((project, index) => (
              <Card
                onClick={() => handleNavigation(project.url)}
                key={index}
                image={project.image}
                name={project.name}
                desc={project.desc}
                tech={project.tech}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
