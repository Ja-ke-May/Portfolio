import {useState} from 'react';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
};


  
const BigWalks = () => {

  const [detailsOpen, setDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };


  return (
    <div id="BigWalks" className="relative mt-60 font-mono">
      <hr className='border-1 border-gray-600 m-4' />
      <div className="max-w-screen text-center lg:text-left p-2 lg:p-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex-col p-4 w-[90%] md:w-[75%]">
            <h3 className="text-xl lg:text-2xl font-bold text-[#B5A888]">Big Walks</h3>
            
            <button 
              onClick={toggleDetails} 
              className='mt-4 bg-white text-[#000110] p-2 rounded-full'
            >
              {detailsOpen ? 'Hide Details' : 'View Details'}
            </button>

            <div id="details" className={detailsOpen ? '' : 'hidden'}>

            <p className="mt-2 text-lg lg:text-xl">
              Dog walking business idea. <br />
               <strong>Big Walks</strong> is a dog walking company with an adventure focus. Most dog walkers stick to simple routes, like a trip to the park and back. With my dog we love exploring the wild and wandering through woodland so I decided why not bring others along.
            </p>
            <p className="mt-2 text-lg lg:text-xl">
              Videos of our walks would be shared on{' '} 
              <a href="https://www.youtube.com/@BIG_WALKS" target="_blank" rel="noopener noreferrer" className="text-[#B5A888] hover:text-red-600 underline">YouTube</a>, 
              which is a unique feature of a Big Walks adventure.
            </p>
            
            <h4 className="mt-4 mb-2 text-lg lg:text-xl font-semibold">Site Features:</h4>
            <ul className="list-disc list-inside text-lg lg:text-xl">
            <li>Single page site, everything you need is easily accessible.</li>
              <li>A custom paw print animation that moves around the screen background.</li>
              <li>Next/Previous card navigation with touch swipe for viewing my information and services.</li>
              <li>A <code>/report</code> page to make it easy for me to generate PDF walk reports while I'm out.</li>
              <li>Online accounts for customers, displaying past walks with reports and YouTube video links.</li>
            </ul>
            <p className="mt-4 text-lg lg:text-xl">
              No personal information is stored so I decided to simply have a JSON file in my public folder that holds each accounts info. I would give each user a username and password after the first walk. If you'd like to log in please use these details:
              <br /><strong>Username:</strong> bigwalks <strong> Password:</strong> password
            </p>
            <br />
            <p className='text-lg lg:text-xl'>
              Developed with Next.js, TailwindCSS, hosted on GitHub and Vercel.
            </p>
            </div>
          </div>
          <a href="https://bigwalks.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-[#B5A888] underline mt-2 text-2xl">BigWalks.co.uk</a>
          <div>
            <a href="https://github.com/Ja-ke-May/Dog-Walking" target="_blank" rel="noopener noreferrer" className="hover:text-[#B5A888] underline text-md lg:text-lg mr-2">Code</a>
          </div>
          <img src="../bigwalks-website.png" alt="bigwalks.co.uk" className="max-h-[400px] mt-4 rounded" />
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center mt-6">
        <div
          className="w-6 h-6 border-t-2 border-r-2 border-yellow-400 brightness-125 hover:border-yellow-700 brightness-125 transform rotate-[135deg] rounded-t rounded-r cursor-pointer"
          onClick={() => scrollToSection('MyMe')}
        ></div>
      </div>
    </div>
  );
};

export default BigWalks;
