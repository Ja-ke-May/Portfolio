import {useState} from 'react';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
};

const DryStoneWalls = () => {

  
    const [detailsOpen, setDetailsOpen] = useState(false);
    
      const toggleDetails = () => {
        setDetailsOpen(!detailsOpen);
      };
    


  return (
    <div id="drystonewalls" className="relative mt-60 font-mono">
      <hr className='border-1 border-gray-600 m-4' />
      <div className="max-w-screen text-center lg:text-left p-2 lg:p-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex-col p-4 w-[90%] md:w-[75%]">
            <h3 className="text-xl lg:text-2xl font-bold text-green-600">Dry Stone Walls</h3>

            <button 
              onClick={toggleDetails} 
              className='mt-4 bg-white text-[#000110] p-2 rounded-full'
            >
              {detailsOpen ? 'Hide Details' : 'View Details'}
            </button>

            <div id="details" className={detailsOpen ? '' : 'hidden'}>


            
            <p className="mt-2 text-lg lg:text-xl">
            My Dry Stone Walls site offers professional walling services and comprehensive information on building basics, the history, and styles of walls in the UK.
              <br />
              There's a short quiz on this site which I've connected to the <span className="underline cursor-pointer hover:text-pink-500" onClick={() => scrollToSection('timewise')}>Timewise</span> backend to store leaderboard names.
            </p>
            <br />
            <p className='text-lg lg:text-xl'>
              Developed with Next.js, Node/Express, TailwindCSS, MongoDB, and hosted on Render and Vercel.
            </p>

            </div>
          </div>
          <a href="https://drystonewalls.uk" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 underline mt-2 text-2xl">drystonewalls.uk</a>
          <div className="flex flex-row">
            <a href="https://github.com/Ja-ke-May/drystonewalls" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 underline text-md lg:text-lg mr-2">Frontend code</a>
            <a href="https://github.com/Ja-ke-May/timewise-backend" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 underline text-md lg:text-lg ml-2">Backend code</a>
          </div>
          <img src="../drystonewalls-website.png" alt="drystonewalls.uk" className="max-h-[400px] mt-4" />
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center mt-6">
        <div
          className="w-6 h-6 border-t-2 border-r-2 border-teal-400 hover:border-teal-700 transform rotate-[135deg] rounded-t rounded-r cursor-pointer"
          onClick={() => scrollToSection('gignite')}
        ></div>
      </div>
    </div>
  );
};

export default DryStoneWalls;
