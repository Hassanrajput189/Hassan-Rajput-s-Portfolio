"use client"
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/AboutCard";

const AboutInfo = [
  {
    name: "About Me",
    desc: "Other than it being a cross-functional combination (and a portmanteau) of the terms and concepts for development and operations, academics and practitioners have not developed a universal definition for the term DevOps.[a][b][c][d] Most often, DevOps is characterized by key principles: shared ownership, workflow automation, and rapid feedback. From an academic perspective, Len Bass, Ingo Weber, and Liming Zhu—three computer science researchers from the CSIRO and the Software Engineering Institute—suggested defining DevOps as a set of practices intended to reduce the time between committing a change to a system and the change being placed into normal production, while ensuring high quality.[6] However, the term is used in multiple contexts. At its most successful, DevOps is a combination of specific practices, culture change, and tools.[7]Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.The decision about what to put into your paragraphs begins with the germination of a seed of ideas; this “germination process” is better known as brainstorming. There are many techniques for brainstorming; whichever one you choose, this stage of paragraph development cannot be skipped. Building paragraphs can be like building a skyscraper: there must be a well-planned foundation that supports what you are building. Any cracks, inconsistencies, or other corruptions of the foundation can cause your whole paper to crumble.So, let’s suppose that you have done some brainstorming to develop your thesis. What else should you keep in mind as you begin to create paragraphs? Every paragraph in a paper should be:Unified: All of the sentences in a single paragraph should be related to a single controlling idea (often expressed in the topic sentence of the paragraph).Clearly related to the thesis: The sentences should all refer to the central idea, or thesis, of the paper (Rosen and Behrens 119).Coherent: The sentences should be arranged in a logical manner and should follow a definite plan for development (Rosen and Behrens 119).Well-developed: Every idea discussed in the paragraph should be adequately explained and supported through evidence and details that work together to explain the paragraph’s controlling idea (Rosen and Behrens 119)."
  },
  {
    name: "Skills",
    tech: ["React", "Node", "Next","React", "Node", "Next","React", "Node", "Next","React", "Node", "Next","React", "Node", "Next","React", "Node", "Next","React", "Node", "Next","React", "Node", "Next"],
  },
  
];

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-grow ">
        <img src="profile picture.png" alt="Picture" />
        <div className="flex flex-col flex-wrap justify-center items-center gap-20 lg:flex-row my-6">
          {AboutInfo.map((about, index) => (
            <Card
              key={index}
              name={about.name}
              desc={about.desc}
              tech={about.tech}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
