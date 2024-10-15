"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Opening from "./components/Opening";
import Games from "./components/Games";
import Stars from "./components/Stars";
import TimeWiseQuiz from "./components/TimeWiseQuiz";
import Gignite from "./components/Gignite";
import Onyx from "./components/Onyx";
import DryStoneWalls from "./components/DryStoneWalls";
import Footer from "./components/Footer"
import MyMe from "./components/MyMe";

export default function Home() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-BRNBE6C2T3';
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-BRNBE6C2T3');

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  
  return (
    <div className="fade-in">
      <Navbar />
      <Stars />
      <Opening />

      <MyMe />

      <DryStoneWalls />
     
     <Gignite />

     <Onyx />

     <TimeWiseQuiz />

     <Games />
      
      <Footer />
    </div>
  );
}
