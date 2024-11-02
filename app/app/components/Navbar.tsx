"use client"

import React from 'react';

// Define the Navbar component with React.FC (Function Component type)
const Navbar: React.FC = () => {

  const handleClick = (url: string) : void => {
    window.location.href = url;
  }
  const handleDownload = (filePath: string) => {
    const link = document.createElement("a");
    link.href = filePath;  // Use the file path passed in
    link.download = filePath.split('/').pop() || "download";  // Extract filename or default to "download"
    link.click();
  };
  
  

  return (
    <nav className=" flex justify-between items-center bg-blue-600 text-white py-2 rounded-full m-4">
      <div id='logo' className='pl-6'>
        <span className=' text-3xl text-black font-bold'>HR</span>
      </div>
      <ul className="flex justify-center items-center gap-8 mx-9">
        <li onClick={() => handleClick("/")} className="cursor-pointer hover:font-bold transition-all text-xl">Home</li>
        <li onClick={() => handleClick("/projects")} className="cursor-pointer hover:font-bold transition-all text-xl">Projects</li>
        <li onClick={() => handleClick("/about")} className="cursor-pointer hover:font-bold transition-all text-xl">About</li>
        <li className="cursor-pointer hover:font-bold transition-all text-xl border border-white rounded-full px-2">
          <button
            onClick={(): void => {handleDownload("/Hassan_Rajput's_resume.pdf")}}
            className="text-white flex justify-between items-center "
          >
            <img className=" w-8 p-1" src="/resume_image.png" alt="Resume" />
            <span className="px-1 text-sm">Download Resume</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
