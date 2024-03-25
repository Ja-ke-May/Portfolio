import React, { useState } from "react";

const myGames = [
    {
      title: "Quick Game?",
      description: "Press next/previous to view my games.",
      img: "../GAMES-pixel-font.png"
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
    }
  ];

const Games = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  const handleNext = () => {
    setCurrentGameIndex((prevIndex) => (prevIndex + 1) % myGames.length);
  };

  const handlePrevious = () => {
    setCurrentGameIndex((prevIndex) =>
      prevIndex === 0 ? myGames.length - 1 : prevIndex - 1
    );
  };

  const { title, description, link, linkCode, img } = myGames[currentGameIndex];

  return (
    <div className="relative mt-60 font-mono">
      <div className="max-w-screen text-center lg:text-left p-2 lg:p-10">
        <div className="flex flex-row justify-center">
          <div className="flex-col p-4  max-w-[65%]">
            <h3 className="text-xl lg:text-2xl font-bold">{title}</h3>
            <p className="mt-2 text-lg lg:text-xl">{description}</p>
            <br />
            {link && <a href={link} className="hover:text-green-500 underline text-lg lg:text-xl">Play Game</a>}
            <br />
            {linkCode && <a href={linkCode} className="hover:text-blue-500 underline text-md lg:text-lg">Code</a>}
          </div>
          <div className="flex flex-col justify-center items-center p-4  max-w-[45%]">
            <img src={img} alt={title} className="max-h-[400px]" />
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
    </div>
  );
};

export default Games;
