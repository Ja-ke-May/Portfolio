import React, { useState, useEffect } from "react";

const myGames = [
  {
    title: "Quick Game?",
    description: "Press next/previous to view my games.",
    img: "../GAMES-pixel-font.png"
  },
  {
    title: "Sailing Game",
    description: "A simple physics based sailing game to help people understand the basics of wind and sailing.",
    link: "https://sailing-game.vercel.app/",
    linkCode: "https://github.com/Ja-ke-May/SailingGame",
    img: "../sail-mechanics-cross-shore.png"
  },
  {
    title: "CHESS",
    description: `Chess, 2 player game.
    Made with Javascript using Object-Oriented Principles.`,
    link: "https://ja-ke-may.github.io/js-oop-chess/",
    linkCode: "https://github.com/Ja-ke-May/js-oop-chess",
    img: "../chess-game-bishop.jpg"
  },
  {
    title: "SNAKE",
    description: `My take on the classic game Snake, use the arrow keys or tap the sides of the screen to play.
    Javascript.`,
    link: "https://ja-ke-may.github.io/snake-game/",
    linkCode: "https://github.com/Ja-ke-May/snake-game",
    img: "../snake-game-3-14.jpg"
  },
  {
    title: "Find Bluefish",
    description: "This was the first site I created combining HTML, CSS, and JavaScript.",
    link: "https://ja-ke-may.github.io/Find-Bluefish-Game/",
    linkCode: "https://github.com/Ja-ke-May/Find-Bluefish-Game",
    img: "../bluefish.png"
  },
];

const Games = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0); 
  const [preloadedImages, setPreloadedImages] = useState(new Map());

  useEffect(() => {
    const cache = new Map();

    myGames.forEach((game) => {
      const img = new Image();
      img.src = game.img;
      cache.set(game.img, img);
    });

    setPreloadedImages(cache);
  }, []);

  const handleNext = () => {
    setCurrentGameIndex((prevIndex) => (prevIndex + 1) % myGames.length);
  };

  const handlePrevious = () => {
    setCurrentGameIndex((prevIndex) =>
      prevIndex === 0 ? myGames.length - 1 : prevIndex - 1
    );
  };

  const { title, description, link, linkCode, img } = myGames[currentGameIndex];

  const halfLength = Math.ceil(title.length / 2);
  const firstHalf = title.slice(0, halfLength);
  const secondHalf = title.slice(halfLength);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="games" className="relative mt-60 font-mono fade-in">
      <hr className="border-1 border-gray-600 m-4" />
      <div className="max-w-screen text-center p-2">
        <h3 className="text-xl lg:text-2xl font-bold">
          <span className="text-blue-500">{firstHalf}</span>
          <span className="text-green-500">{secondHalf}</span>
        </h3>
        <div className="flex flex-row justify-center lg:text-left lg:p-10">
          <div className="flex-col p-4  max-w-[65%]">
            <p className="mt-2 text-lg lg:text-xl">{description}</p>
            <br />
            {link && <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 underline text-lg lg:text-xl">Play Game</a>}
            <br />
            {linkCode && <a href={linkCode} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 underline text-md lg:text-lg">Code</a>}
          </div>
          <div className="flex flex-col justify-center items-center p-4  max-w-[45%]">
          <img src={preloadedImages.get(img)?.src || img} alt="game image" className="max-h-[400px] rounded" />
          </div>
        </div>
      </div>

      <div className="max-w-screen flex justify-center mt-2">
        <button
          onClick={handlePrevious}
          className="text-lg lg:text-xl p-4 border-2 border-blue-600 rounded w-40 m-2 lg:m-4 hover:text-blue-600"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="text-lg lg:text.xl  p-4 border-2 border-green-600 rounded w-40 m-2 lg:m-4 hover:text-green-600"
        >
          Next
        </button>
      </div>
      <br />
      <div className="flex justify-center items-center mt-6">
        <div className="w-6 h-6 border-t-2 border-r-2 border-red-600  hover:border-red-700 transform rotate-[135deg] rounded-t rounded-r cursor-pointer" onClick={() => scrollToSection('footer')}></div>
      </div>
    </div>
  );
};

export default Games;
