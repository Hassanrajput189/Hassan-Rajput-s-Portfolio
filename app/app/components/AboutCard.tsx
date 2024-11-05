


import React from 'react';

interface CardProps {
  name: string;
  desc?: string;
  tech?: string[];
  onClick?: () => void;
}

const AboutCard: React.FC<CardProps> = ({name, desc, tech,  onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-between items-center gap-3 bg-gray-200 rounded-2xl w-1/2  h-[400px] lg:h-[500px] cursor-pointer border border-black hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
    >
      
      {/* Content Section */}
      <div className="flex flex-col justify-evenly items-center gap-2 p-4 w-full h-full">
        {/* Name Section */}
        <div className="text-center font-bold text-xl">
          {name}
        </div>

        {/* Description Section */}
        {desc &&(
        <div className="text-center overflow-hidden text-ellipsis">
          <p >{desc}</p>
        </div>
        )}
        {/* Technologies Section */}
        {tech && tech.length > 0 &&(
        <div className="text-center overflow-hidden">
          <p className="font-semibold">Technologies:</p>
          <div className="flex justify-center items-center flex-wrap gap-1">
            {tech.map((item, index) => (
              <span key={index}>{item}{index < tech.length - 1 ? ', ' : ''}</span>
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
