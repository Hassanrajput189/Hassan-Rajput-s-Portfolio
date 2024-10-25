"use client"

import React from 'react';

// Define the Navbar component with React.FC (Function Component type)
const Navbar: React.FC = () => {
  
  

  return (
    <nav className=" flex justify-between items-center bg-blue-600 text-white py-2 rounded-full m-4">
      <div id='logo' className='pl-6'>
         <span className=' text-2xl text-black font-bold'>HR</span>
      </div>
      <ul className="flex justify-center items-center gap-8 mx-9">
        <li onClick={():void=>{
          window.location.href = '/';
        }} className="cursor-pointer hover:font-bold transition-all text-xl">Home</li>
          <li onClick={():void=>{
          window.location.href = '/projects';
        }} className="cursor-pointer hover:font-bold transition-all text-xl">Projects</li>
        <li onClick={():void=>{
          window.location.href = '/about';
        }} className="cursor-pointer hover:font-bold transition-all text-xl">About</li>
        <li className="cursor-pointer hover:font-bold transition-all">
          <button
            onClick={():void=>{
              window.open('https://github.com/Hassanrajput189/HassanRajput-Portfolio.git');
            }}
            className="text-white bg-purple-950 rounded-full flex justify-between items-center ring-white ring-1 hover:text-xl hover:bg-purple-900"
          >
            <img className="invert w-10 p-1 text-sm" src="/github.svg" alt="logo" />
            <span className="font-bold px-2">GitHub</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
