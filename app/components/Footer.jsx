import React from 'react';

const Footer = () => {

  const scrollToTop = () => {
    const navbar = document.getElementById('navbar');
    navbar.scrollIntoView({ behavior: 'smooth' });
  };

    return (
    <div id="footer" className="flex flex-col mt-60 p-4 w-full justify-center text-center">
      <hr className='border-1 border-gray-600 m-4' />
       <h3 className="underline text-xl md:text-3xl m-2">Contact</h3>
     <a href="mailto:Jacob-may@outlook.com" className="hover:text-red-600 m-2 text-lg md:text-xl">Jacob-May@outlook.com</a>
     <a href="https://github.com/Ja-ke-May" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 m-2 text-lg md:text-xl">Github</a>
     <hr className='border-1 border-gray-600 m-4' />
     <p className="m-2 text-lg md:text-xl">Portfolio created with Next.js</p>
     <a href="https://github.com/Ja-ke-May/Portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 underline text-md lg:text-lg">Code</a>
     <hr className='border-1 border-gray-600 m-4' />
     <a className="hover:text-red-600 m-2 text-lg lg:text-xl" onClick={scrollToTop}>Back to Top</a>
      </div>
    )
  }

  export default Footer;