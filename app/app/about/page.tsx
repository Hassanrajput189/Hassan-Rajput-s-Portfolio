"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutCard from "../components/AboutCard";

const skills = [
  "React", "JavaScript", "CSS", "HTML", "Next.js", "Node.js", "MongoDB", "Express", 
  "Git", "TypeScript", "Tailwind CSS"
];

const desc = `A skilled web developer with expertise in creating dynamic, responsive, and visually appealing websites and applications. Proficient in front-end technologies such as HTML, CSS, and JavaScript, as well as popular frameworks like React and Next.js. Possesses a strong understanding of back-end development and database management, ensuring seamless integration between front-end and server-side components. Committed to writing clean, maintainable code and implementing best practices to optimize performance and user experience.\n\nExperienced in collaborating with designers, product managers, and other developers to deliver high-quality, user-centric web solutions.`;

const AboutPage = () => {
  return (
    <div className="h-screen ">
      <Navbar />
      <main className="md:my-10 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-16 items-center ">
          <AboutCard name="About Me" desc={desc} />
          <AboutCard name="Tech Stack" tech={skills} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
