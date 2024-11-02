
import React from 'react';

interface CardProps {
  image: string;
  desc: string;
  tech: string[];
  name: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, desc, tech, name, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-between items-center gap-3 bg-gray-200 rounded-2xl w-1/4 h-[400px] cursor-pointer border border-black hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
    >
      {/* Image Section - Takes half of the card height */}
      <div className="w-full h-1/2 flex justify-center items-center overflow-hidden rounded-t-2xl">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between items-center gap-2 p-4 w-full h-1/2">
        {/* Name Section */}
        <div className="text-center font-bold text-xl">
          {name}
        </div>

        {/* Description Section */}
        <div className="text-center overflow-hidden text-ellipsis">
          <p className="line-clamp-3">{desc}</p>
        </div>

        {/* Technologies Section */}
        <div className="text-center">
          <p className="font-semibold">Technologies:</p>
          <div className="flex justify-center items-center flex-wrap gap-1">
            {tech.map((item, index) => (
              <span key={index}>{item}{index < tech.length - 1 ? ', ' : ''}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
