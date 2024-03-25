import React from 'react';

const TimeWiseQuiz = () => {
  return (
    <div className="relative mt-60 font-mono">
      <div className="max-w-screen text-center lg:text-left p-2 lg:p-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex-col p-4 w-[90%] md:w-[75%]">
            <h3 className="text-xl lg:text-2xl font-bold text-pink-500">TimeWise Quiz</h3>
            <p className="mt-2 text-lg lg:text-xl">A dynamic quiz website featuring seven unique quiz types, each with three difficulty levels and three leaderboards. Weekly updates to keep content fresh. 
            {<br />} 
            Developed with Next.js, Node/Express, TailwindCSS, MongoDB, and hosted on Render and Vercel.</p>
            <br />
          </div>
          <a href="https://timewisequiz.com" className="hover:text-pink-500 underline mt-2 text-xl">TimeWiseQuiz.com</a>
            <img src="../timewise-main.png" alt="timewisequiz.com" className="max-h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default TimeWiseQuiz;
