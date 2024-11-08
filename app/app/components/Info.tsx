import React from 'react'

const Info = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
      <div id='image' className='hover:shadow-2xl rounded-full'>
        <img  width={300} src="/profile picture.png" alt="image" />
      </div>
      <div id='description' className='w-[80vw] md:w-1/2 text-lg text-slate-600'>
        <p></p>A skilled web developer with expertise in creating dynamic, responsive, and visually appealing websites and applications. Proficient in front-end technologies such as HTML, CSS, and JavaScript, as well as popular frameworks like React and Next.js. Possesses a strong understanding of back-end development and database management, ensuring seamless integration between front-end and server-side components. Committed to writing clean, maintainable code and implementing best practices to optimize performance and user experience. Experienced in collaborating with designers, product managers, and other developers to deliver high-quality, user-centric web solutions.
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