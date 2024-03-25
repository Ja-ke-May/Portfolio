
import React from 'react';

const Navbar = () => {

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="navbar" className="w-full p-4">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-600/80">Jacob May</h1>
      <h2 className="text-md lg:text-xl mt-1 text-gray-500">Full-stack Web Developer</h2>
      <h3 className="absolute right-2 lg:right-4 top-4 flex flex-row text-lg lg:text-2xl">
        
            <span className="hover:text-red-600 mr-2"><a href="/Jacob May CV.pdf" download>CV</a></span>
          <span className='text-gray-600'>|</span>
            <span className="hover:text-red-600 ml-2" onClick={scrollToFooter}>Contact</span>
        
      </h3>
    </div>
  );
}

export default Navbar;
