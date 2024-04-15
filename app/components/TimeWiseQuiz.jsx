import React from 'react';

const scrollToGames = () => {
  const games = document.getElementById('games');
  games.scrollIntoView({ behavior: 'smooth' });
};

const TimeWiseQuiz = () => {
  return (
    <div id="timewise" className="relative mt-60 font-mono">
      <hr className='border-1 border-gray-600 m-4' />
      <div className="max-w-screen text-center lg:text-left p-2 lg:p-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex-col p-4 w-[90%] md:w-[75%]">
            <h3 className="text-xl lg:text-2xl font-bold text-pink-500">TimeWise Quiz</h3>
            <p className="mt-2 text-lg lg:text-xl">A dynamic quiz website featuring seven unique quiz types, each with three difficulty levels and three leaderboards. Weekly updates to keep content fresh. 
            {<br />} 
            Developed with Next.js, Node/Express, TailwindCSS, MongoDB, and hosted on Render and Vercel.</p>
          </div>
          <a href="https://timewisequiz.com" className="hover:text-pink-500 underline mt-2 text-xl">TimeWiseQuiz.com</a>
          <div className="flex flex-row">
          <a href="https://github.com/Ja-ke-May/TimeWise" className="hover:text-pink-500 underline text-md lg:text-lg mr-2">Frontend code</a>
          <a href="https://github.com/Ja-ke-May/timewise-backend" className="hover:text-pink-500 underline text-md lg:text-lg ml-2">Backend code</a>
          </div>
            <img src="../timewise-main.png" alt="timewisequiz.com" className="max-h-[400px] mt-4 rounded" />
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center mt-6">
                <div className="w-6 h-6 border-t-2 border-r-2 border-red-600 hover:border-red-700 transform rotate-[135deg] rounded-t rounded-r" onClick={scrollToGames}></div>
              </div>
    </div>
  );
};

export default TimeWiseQuiz;
