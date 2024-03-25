import React from 'react';

const Onyx = () => {
  return (
    <div className="relative mt-60 font-mono">
      <div className="max-w-screen text-center lg:text-left p-2 lg:p-10">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center p-4">
            <img src="../Gignite-map-London.png" alt="Gignite website map image with map markers" className="max-h-[400px]" />
          </div>
          <div className="flex-col p-4 w-[90%] md:w-[75%]">
            <h3 className="text-xl lg:text-2xl text-orange-500 font-bold">Onyx</h3>
            <p className="mt-2 text-lg lg:text-xl">`An online experience site, logged in users can upload events for anyone to book onto. Payment can be taken with Google Pay and users can keep track of their events on their profile. 
            {<br />} Created with Angular, Tailwind CSS, Express/Node, MongoDB/Mongoose, Jest for testing, Deployed on Render and Vercel.`</p>
            <br />
            <a href="https://gig-app-project.vercel.app/" className="hover:text-orange-500 underline text-lg lg:text-xl">View Site</a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Onyx;

