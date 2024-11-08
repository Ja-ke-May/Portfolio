import React from 'react';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
};

const MyMe = () => {
  return (
    <div id="MyMe" className="relative mt-60 font-mono">
      <hr className='border-1 border-gray-600 m-4' />
      <div className="max-w-screen text-center lg:text-left p-2 lg:p-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex-col p-4 w-[90%] md:w-[75%]">
            <h3 className="text-xl lg:text-2xl font-bold text-yellow-400 brightness-125">MyMe.Live</h3>
            <div className='flex w-full items-center justify-center'>
            <img src="../MyMe-corners.jpg" alt="MyMe.Live" className="max-h-[400px] mt-4 mb-4 rounded" /> 
            </div>
            <p className="mt-2 text-lg lg:text-xl">
  MyMe is a live streaming social platform designed to break down the barriers of traditional social media. Unlike other platforms, there's no need to build a following or adhere to a specific niche. Many platforms require milestones, such as 1,000 hours of watch time to go live, excluding those who aren't frequent users.
  <br />
  <br />
  On MyMe, only one user goes live at a time, while others interact through a live chat. Logged-in users can join the queue and take their turn when at the front. Each live stream begins with 60 seconds, and viewers vote in real-time to either extend or end the stream. It’s a space to share your thoughts, showcase talents, and get immediate feedback.
  <br />
  <br />
  I truly believed in this concept and dedicated 3 months to its development. However, MyMe requires a large user base to function effectively. With enough users, the community would drive content quality by voting on what they want to see, encouraging streamers to improve over time, creating a cycle of continuous content improvement. But without enough people online, there's no audience, making going live pointless.
  <br />
  <br />
  I also created a token system where users could promote their links and purchase perks like fast passes or live speaker chats. This would have been a way to monetise the platform, but without a substantial user base, maintaining the backend became unsustainable. For now, the project will have to go in hibernation.
</p>

            <br />
            <p className='text-lg lg:text-xl'>
              Developed with Socket.IO, WebRTC, Stripe, Next.JS, Node/Express, TailwindCSS, MongoDB, and hosted on Render and Vercel.
            </p>
          </div>
          <a href="https://myme.live" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 brightness-125 underline mt-2 text-2xl">MyMe.Live</a>
          <div className="flex flex-row">
            <a href="https://github.com/Ja-ke-May/livesite" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 brightness-125 underline text-md lg:text-lg mr-2">Client</a>
            <a href="https://github.com/Ja-ke-May/livesite-backend" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 brightness-125 underline text-md lg:text-lg ml-2">Server</a>
          </div>

        </div>
      </div>
      <br />
      <div className="flex justify-center items-center mt-6">
        <div
          className="w-6 h-6 border-t-2 border-r-2 border-green-400 hover:border-green-700 transform rotate-[135deg] rounded-t rounded-r cursor-pointer"
          onClick={() => scrollToSection('drystonewalls')}
        ></div>
      </div>
    </div>
  );
};

export default MyMe;
