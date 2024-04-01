import React from 'react';
import TechStack from './TechStack';

const scrollToGames = () => {
  const games = document.getElementById('games');
  games.scrollIntoView({ behavior: 'smooth' });
};

const Opening = () => {
  return (
    <>
  <div className="flex flex-col mt-20 justify-center text-center text-xl lg:text-2xl font-mono">
    <p>Hi, I'm Jake. 
      <br />
      Welcome to my portfolio.
    </p>

<p className="mt-4">
    Please scroll down to view my projects...</p>

    <div className="flex justify-center items-center mt-10">
                <div className="w-6 h-6 border-t-2 border-r-2 border-red-600 transform rotate-[135deg] rounded-t rounded-r" onClick={scrollToGames}></div>
              </div>

    </div>
    <TechStack />
    </>
  )
}
export default Opening;