import React from 'react';

const Footer = () => {

  const scrollToTop = () => {
    const navbar = document.getElementById('navbar');
    navbar.scrollIntoView({ behavior: 'smooth' });
  };

    return (
    <div id="footer" className="flex flex-col mt-60 p-4 w-full justify-center text-center">
       <h3 className="underline text-xl md:text-3xl m-2">Contact</h3>
     <a className="hover:text-red-500 m-2 text-lg md:text-xl">Jacob-may@outlook.com</a>
     <p className="hover:text-red-500 m-2 text-lg md:text-xl">Github</p>
     <hr className='border-1 border-gray-600 m-4' />
     <p className="m-2 text-lg md:text-xl">Portfolio created with Next.js</p>
     <a href="https://github.com/Ja-ke-May/Portfolio" className="hover:text-red-500 underline text-md lg:text-lg">Code</a>
     <a className="hover:text-red-500 m-2 text-lg lg:text-xl" onClick={scrollToTop}>Back to Top</a>
      </div>
    )
  }
  export default Footer;