import React from 'react'

const Info = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
      <div id='image' className='hover:shadow-2xl rounded-full  cursor-pointer transition duration-300 ease-in-out transform hover:scale-105'>
        <img  width={200} src="/profile picture.png" alt="image" />
      </div>
      <div id='description' className='w-[80vw] md:w-1/2 text-lg text-slate-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam eum aut harum earum adipisci a vitae doloremque voluptatum facere, doloribus amet quo impedit, accusamus, ut culpa voluptatibus accusantium voluptas! Repellat, et.</p>
      </div>
      <ul id='socials' className='flex  items-center gap-6'>
        <li className='hover:shadow-2xl rounded-full cursor-pointer transition duration-300 ease-in-out transform hover:scale-110'>
          <img width={35} src="/linkedin.png" alt="Linkedin"  />
        </li>
        <li className='hover:shadow-2xl rounded-full cursor-pointer transition duration-300 ease-in-out transform hover:scale-110'>
          <img width={35} src="/github.png" alt="Github"  />
        </li>
        <li className='hover:shadow-2xl rounded-full cursor-pointer transition duration-300 ease-in-out transform hover:scale-110'>
          <img width={40} src="/instagram.png" alt="Instagram"  />
        </li>
        <li className='hover:shadow-2xl rounded-full cursor-pointer transition duration-300 ease-in-out transform hover:scale-110'>
          <img width={35} src="/facebook.png" alt="Facebook"  />
        </li>
      </ul>
    </div>
  )
}

export default Info