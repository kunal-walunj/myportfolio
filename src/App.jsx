import React from "react";
import style from "./css/style.module.css";
import Navbar from "./nav_components/Navbar";
import Home from "./nav_components/Home";
import About from "./nav_components/About";
import Skills from "./nav_components/Skills";
import Projects from "./nav_components/Projects";
import Contacts from "./nav_components/Contacts";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Social from "./nav_components/Social";

const App = () => {
  return (
    <>
      <div className={style.all}>
        <BrowserRouter>
           <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Contacts" element={<Contacts/>} />
          </Routes>
           <Social/>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
