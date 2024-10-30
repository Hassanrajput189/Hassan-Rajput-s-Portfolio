"use client"

import React from 'react';

// Define the Navbar component with React.FC (Function Component type)
const Navbar: React.FC = () => {

  const handleClick = (url: string): void => {
    window.location.href = url;
  }

  return (
    <nav className=" flex justify-between items-center bg-blue-600 text-white py-2 rounded-full m-4">
      <div id='logo' className='pl-6'>
        <span className=' text-3xl text-black font-bold'>HR</span>
      </div>
      <ul className="flex justify-center items-center gap-8 mx-9">
        <li onClick={() => handleClick("/")} className="cursor-pointer hover:font-bold transition-all text-xl">Home</li>
        <li onClick={() => handleClick("/projects")} className="cursor-pointer hover:font-bold transition-all text-xl">Projects</li>
        <li onClick={() => handleClick("/about")} className="cursor-pointer hover:font-bold transition-all text-xl">About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
