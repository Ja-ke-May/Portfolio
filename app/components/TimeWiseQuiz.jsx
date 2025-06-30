import {useState} from 'react';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
};

const TimeWiseQuiz = () => {

  const [detailsOpen, setDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  }; 

  return (
    <div id="timewise" className="relative mt-60 font-mono">
      <hr className='border-1 border-gray-600 m-4' />
      <div className="max-w-screen text-center lg:text-left p-2 lg:p-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex-col p-4 w-[90%] md:w-[75%]">
            <h3 className="text-xl lg:text-2xl font-bold text-pink-500">TimeWise Quiz</h3>

            <button 
              onClick={toggleDetails} 
              className='mt-4 bg-white text-[#000110] p-2 rounded-full'
            >
              {detailsOpen ? 'Hide Details' : 'View Details'}
            </button>

            <div id="details" className={detailsOpen ? '' : 'hidden'}>


           
            <p className="mt-2 text-lg lg:text-xl">A dynamic quiz website featuring seven unique quiz types, each with three difficulty levels and three leaderboards. Weekly updates to keep content fresh.</p>
            <br />
            <p className='text-lg lg:text-xl'>Developed with Next.js, Node/Express, TailwindCSS, MongoDB, and hosted on Render and Vercel.</p>
            </div>
             </div>
          <a href="https://timewisequiz.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 underline mt-2 text-2xl">TimeWiseQuiz.com</a>
          <div className="flex flex-row">
          <a href="https://github.com/Ja-ke-May/TimeWise" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 underline text-md lg:text-lg mr-2">Frontend code</a>
          <a href="https://github.com/Ja-ke-May/timewise-backend" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 underline text-md lg:text-lg ml-2">Backend code</a>
          </div>
            <img src="../timewise-main.png" alt="timewisequiz.com" className="max-h-[400px] mt-4 rounded" />
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center mt-6">
                <div className="w-6 h-6 border-t-2 border-r-2  border-blue-500  hover:border-green-500 transform rotate-[135deg] rounded-t rounded-r cursor-pointer" onClick={() => scrollToSection('games')}></div>
              </div>
    </div>
  );
};

export default TimeWiseQuiz;
