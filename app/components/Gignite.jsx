import React from 'react';

const scrollToOnyx = () => {
  const onyx = document.getElementById('onyx');
  onyx.scrollIntoView({ behavior: 'smooth' });
};

const Gignite = () => {
  return (
    <div id="gignite" className="relative mt-60 font-mono">
      <hr className='border-1 border-gray-600 m-4' />
      <div className="max-w-screen text-center lg:text-left p-2 lg:p-10">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex-col p-4  w-[90%] md:w-[75%]">
            <h3 className="text-xl lg:text-2xl text-teal-500 font-bold">Gignite</h3>
            <p className="mt-2 text-lg lg:text-xl">`The idea behind Gignite was to simplify the process of finding local gigs. Google Maps and Ticketmaster API's were used to display event data on the map and cards. User sign up and log in with Auth also implemented for users to upload events and keep track of favourites on their profile.
            {<br />} Created with Next.js, Tailwind CSS, Express/Node, MongoDB/Mongoose, Jest for testing, Deployed on Render and Vercel.`</p>
            <br />
            <a href="https://gig-app-project.vercel.app/" className="hover:text-teal-500 underline text-lg lg:text-xl">View Site</a>
            <br />
          <a href="https://github.com/Magda-J/GigApp-Project" className="hover:text-teal-500 underline text-md lg:text-lg">Frontend code</a>
          <a href="https://github.com/Magda-J/GigApp-Project-backend" className="hover:text-teal-500 underline text-md lg:text-lg m-2">Backend code</a>
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <img src="../Gignite-map-London.png" alt="Gignite website map image with map markers" className="max-h-[400px]" />
          </div>
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center mt-6">
                <div className="w-6 h-6 border-t-2 border-r-2 border-red-600 transform rotate-[135deg] rounded-t rounded-r" onClick={scrollToOnyx}></div>
              </div>
    </div>
  );
}

export default Gignite;

