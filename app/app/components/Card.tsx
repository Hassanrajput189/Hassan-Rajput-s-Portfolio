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
      className="flex flex-col justify-between items-center gap-3 bg-gray-200 rounded-2xl w-1/4  cursor-pointer border border-black hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
    >
      {/* Image Section */}
      <div className="flex justify-center items-center overflow-hidden rounded-2xl">
        <img src={image} alt={name} className="max-h-full object-cover" />
      </div>

      {/* Name Section */}
      <div className="  text-center font-semibold truncate">
        {name}
      </div>

      {/* Description Section */}
      <div className="  text-center overflow-hidden text-ellipsis">
        <p className="line-clamp-3">{desc}</p>
      </div>

      {/* Technologies Section */}
      <div className="  text-center overflow-hidden">
        <p className="font-semibold">Technologies:</p>
        <div className="flex justify-center items-center flex-wrap gap-1">
          {tech.map((item, index) => (
            <span key={index}>{item}{index < tech.length - 1 ? ', ' : ''}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
