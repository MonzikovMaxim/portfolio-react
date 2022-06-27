import React from 'react';
import { Link } from "react-router-dom";
import "./index.scss";


const Home = () => {

  return (
    <div className="container home-page"> 
      <div className="text-zone">
        <h1>Hi,
        I'm Maxim Monzikov
        frontend developer</h1>
        <h2>Frontend developer</h2>
        <Link to="/contact" className="contact-button">CONTACT ME</Link>
      </div>
    </div>
  );
};

export default Home;
