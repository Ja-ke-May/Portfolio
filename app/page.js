"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Opening from "./components/Opening";
import Games from "./components/Games";
import Stars from "./components/Stars";
import TimeWiseQuiz from "./components/TimeWiseQuiz";
import Gignite from "./components/Gignite";
import Onyx from "./components/Onyx";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="fade-in">
      <Navbar />
      <Stars />
      <Opening />

      <Games />

      <TimeWiseQuiz />
     
     <Gignite />

     <Onyx />
      
      <Footer />
    </div>
  );
}
