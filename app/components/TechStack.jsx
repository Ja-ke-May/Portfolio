import React from 'react';

const TechStack = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-center max-h-40 mt-10">
        <img src="../html-logo.png" alt="HTML" title="HTML" className="max-w-40 max-h-[80px]" />
        <img src="../css-logo.png" alt="CSS" title="CSS" className="max-w-40 max-h-[70px] mr-2" />
        <img src="../tailwind-logo.png" alt="Tailwind CSS" title="Tailwind CSS" className="max-w-20 max-h-20" />
        <img src="../js-logo.png" alt="JavaScript" title="JavaScript" className="max-w-40 max-h-20 mt-2" />
        <img src="../typescript-logo.webp" alt="TypeScript" title="TypeScript" className="max-w-40 max-h-[54px] mt-2 pr-4" />
      </div>
      <div className="flex justify-center items-center max-h-40 mt-10">
        <img src="../next-js-logo.png" alt="Next.js" title="Next.js" className="max-w-40 max-h-20 filter invert mx-2" />
        <img src="../react-logo.png" alt="React" title="React" className="max-w-40 max-h-20 mx-2" />
        <img src="../angular-logo.png" alt="Angular" title="Angular" className="max-w-40 max-h-20 mx-2" />
      </div>
      <div className="flex justify-center items-center max-h-40 mt-10">
        <img src="../nodejs-logo.png" alt="Node.js" title="Node.js" className="max-w-40 max-h-20 rounded mx-2" />
        <img src="../express-logo.png" alt="Express" title="Express" className="max-w-40 max-h-20 rounded filter invert mx-2" />
      </div>
      <div className="flex justify-center items-center max-h-40 mt-10">
        <img src="../mongodb-logo.png" alt="MongoDB/Mongoose" title="MongoDB/Mongoose" className="max-w-40 max-h-10 mx-2" />
        <img src="../GitHub-logo.png" alt="GitHub" title="GitHub" className="max-w-20 max-h-10 filter invert mx-2" />
      </div>
    </div>
  );
};

export default TechStack;
