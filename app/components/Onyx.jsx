import {useState} from 'react';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
};

const Onyx = () => {

  const [detailsOpen, setDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };



  return (
    <div id="onyx" className="relative mt-60 font-mono">
      <hr className='border-1 border-gray-600 m-4' />
      <div className="max-w-screen text-center lg:text-left p-2 lg:p-10">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center p-4">
            <img src="../onyx-homepage.png" alt="Onyx Website Homepage" className="max-h-[400px] rounded" />
          </div>
          <div className="flex-col p-4 w-[90%] md:w-[75%]">
            <h3 className="text-xl lg:text-2xl text-orange-500 font-bold">Onyx - Group Project</h3>

            
            <button 
              onClick={toggleDetails} 
              className='mt-4 mb-4 bg-white text-[#000110] p-2 rounded-full'
            >
              {detailsOpen ? 'Hide Details' : 'View Details'}
            </button>

            <div id="details" className={detailsOpen ? '' : 'hidden'}>

            
            <p className="mt-2 text-lg lg:text-xl">An online experience site, logged in users can upload events for anyone to book onto. Payment can be taken with Google Pay and users can keep track of their events on their profile.</p>
            <br />
            <p className='text-lg lg:text-xl'>Created with Angular, Typescript, Tailwind CSS, Express/Node, MongoDB/Mongoose, Jest for testing, Deployed on Render and Vercel.</p>
            </div>
             <br />
            <a href="https://ox-front.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 underline text-lg lg:text-2xl">View Site</a>
           
            <br />
          <a href="https://github.com/pedraamchamsaz/ox-front" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 underline text-md lg:text-lg">Frontend code</a>
          <a href="https://github.com/pedraamchamsaz/ox-back" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 underline text-md lg:text-lg m-2">Backend code</a>
          </div>
          
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center mt-6">
                <div className="w-6 h-6 border-t-2 border-r-2 border-pink-400 hover:border-pink-700 transform rotate-[135deg] rounded-t rounded-r cursor-pointer" onClick={() => scrollToSection('timewise')}></div>
              </div>
    </div>
  );
}

export default Onyx;

