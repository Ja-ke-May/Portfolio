import React, { useState, useEffect } from 'react';

const Stars = () => {
  const [stars, setStars] = useState([]);
  const [showStars, setShowStars] = useState(true);
  const smallScreenMaxStars = 20;
  const mediumAndLargerScreenMaxStars = 35;

  useEffect(() => {
    const maxStars = window.innerWidth < 768 ? smallScreenMaxStars : mediumAndLargerScreenMaxStars;

    const generateStar = () => {
      const minDistance = 0.02;
      const newStar = {
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
        color: 'via-white',
      };

      const randomNumber = Math.random();

      if (randomNumber < 0.01) {
        newStar.color = 'via-blue-400';
      } else if (randomNumber < 0.06) {
        newStar.color = 'via-yellow-200';
      } else if (randomNumber < 0.46) {
        newStar.color = 'via-red-200';
      }

      if (
        newStar.x >= minDistance * window.innerWidth &&
        newStar.x <= (1 - minDistance) * window.innerWidth &&
        newStar.y >= minDistance * window.innerHeight &&
        newStar.y <= (1 - minDistance) * window.innerHeight
      ) {
        setStars(prevStars => {
          if (prevStars.length  >= maxStars) {
            return prevStars.slice(1);
          }
          return [...prevStars, newStar];
        });
      }
    };

    const handleScroll = () => {
      generateStar();
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight
      ) {
        generateStar();
      }
    };

    if (showStars) {
      window.addEventListener('scroll', handleScroll);
    } else {
      setStars([]);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showStars, smallScreenMaxStars, mediumAndLargerScreenMaxStars]);

  const toggleStars = () => {
    setShowStars(prevShowStars => !prevShowStars);
  };

  useEffect(() => {
    let starIndex = 0;
    const interval = setInterval(() => {
      setStars(prevStars => {
        const newStar = {
          x: Math.floor(Math.random() * window.innerWidth),
          y: Math.floor(Math.random() * window.innerHeight),
          color: 'via-white',
        };

        const randomNumber = Math.random();

        if (randomNumber < 0.01) {
          newStar.color = 'via-blue-400';
        } else if (randomNumber < 0.06) {
          newStar.color = 'via-yellow-200';
        } else if (randomNumber < 0.46) {
          newStar.color = 'via-red-200';
        }

        return [...prevStars, newStar];
      });
      starIndex++;
      if (starIndex === 10) {
        clearInterval(interval);
      }
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <button
        onClick={toggleStars}
        className="fixed top-2 right-2 px-2 py-2 text-yellow-400/90 rounded mt-10 md:mr-2 text-sm md:text-md"
      >
        {showStars ? 'Hide Stars' : 'Show Stars'}
      </button>
      {showStars && (
        <>
          {stars.map((star, index) => (
            <div
              key={index}
              className={`fixed w-1 h-1 bg-gradient-to-r from-white ${star.color} to-white rounded-full animate-pulse`}
              style={{ top: `${star.y}px`, left: `${star.x}px` }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Stars;
