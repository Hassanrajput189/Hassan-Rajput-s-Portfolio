"use client"

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set isMobile based on screen width
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Update on window resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  const handleClick = (url: string): void => {
    window.location.href = url;
    setSidebarOpen(false); // Close sidebar after navigation
  };

  const handleDownload = (filePath: string) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split('/').pop() || "download";
    link.click();
  };

  const toggleSidebar = () => {
    if (isMobile) { // Only toggle sidebar in mobile view
      setSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <nav className="bg-blue-600 text-white py-2 md:rounded-full px-2 md:flex md:justify-between md:items-center ml-10 m-5 w-fit rounded-full md:w-[90vw]">
      {/* Logo Section */}
      <div id="logo" className="md:pl-6 cursor-pointer md:flex-none" onClick={toggleSidebar}>
        <span className="text-3xl text-black font-bold">HR</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:justify-center md:items-center gap-8 mx-9">
        <li onClick={() => handleClick("/")} className="cursor-pointer hover:font-bold transition-all text-xl">Home</li>
        <li onClick={() => handleClick("/projects")} className="cursor-pointer hover:font-bold transition-all text-xl">Projects</li>
        <li onClick={() => handleClick("/about")} className="cursor-pointer hover:font-bold transition-all text-xl">About</li>
        <li className="cursor-pointer hover:font-bold transition-all text-xl border border-white rounded-full px-2 w-fit">
          <button
            onClick={() => handleDownload("/Hassan_Rajput's_resume.pdf")}
            className="text-white flex justify-between items-center"
          >
            <img className="w-8 p-1" src="/resume_image.png" alt="Resume" />
            <span className="px-1 text-sm">Download Resume</span>
          </button>
        </li>
      </ul>

      {/* Sidebar for mobile view */}
      {isSidebarOpen && isMobile && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-start z-10">
          <div className="bg-blue-600 p-6 h-full w-3/4 max-w-xs rounded-lg ">
            <button onClick={toggleSidebar} className="text-black text-2xl mb-4">X</button>
            <ul className="flex flex-col  gap-6">
              <li onClick={() => handleClick("/")} className="cursor-pointer hover:font-bold transition-all text-xl">Home</li>
              <li onClick={() => handleClick("/projects")} className="cursor-pointer hover:font-bold transition-all text-xl">Projects</li>
              <li onClick={() => handleClick("/about")} className="cursor-pointer hover:font-bold transition-all text-xl">About</li>
              <li className="cursor-pointer hover:font-bold transition-all text-xl border border-white rounded-full px-2 w-fit">
                <button
                  onClick={() => handleDownload("/Hassan_Rajput's_resume.pdf")}
                  className="text-white flex justify-between items-center"
                >
                  <img className="w-8 p-1" src="/resume_image.png" alt="Resume" />
                  <span className="px-1 text-sm">Download Resume</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
