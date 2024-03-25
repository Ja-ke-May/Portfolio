import React from 'react';

const Gignite = () => {
  return (
    <div className="relative mt-60 font-mono">
      <div className="max-w-screen text-center lg:text-left p-2 lg:p-10">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex-col p-4  w-[90%] md:w-[75%]">
            <h3 className="text-xl lg:text-2xl text-teal-500 font-bold">Gignite</h3>
            <p className="mt-2 text-lg lg:text-xl">`The idea behind Gignite was to simplify the process of finding local gigs. Completed as a group project we used Google Maps and Ticketmaster API's to display initial event data. User sign up and log in with Auth also implemented for users to upload events and keep track of favourites on their profile.
            {<br />} Created with Next.js, Tailwind CSS, Express/Node, MongoDB/Mongoose, Jest for testing, Deployed on Render and Vercel.`</p>
            <br />
            <a href="https://gig-app-project.vercel.app/" className="hover:text-teal-500 underline text-lg lg:text-xl">View Site</a>
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <img src="../Gignite-map-London.png" alt="Gignite website map image with map markers" className="max-h-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gignite;

