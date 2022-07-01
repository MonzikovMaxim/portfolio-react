import React from 'react';
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import Photo from '../../assets/images/photo.jpg'
import "./index.scss";


const Home = () => {

  return (
    <>
    <div className="container home-page"> 
      <div className="text-zone">
        <h1>Hi,
        I'm Maxim Monzikov
        Frontend developer</h1>
        <h2>Frontend developer / React / JavaScript</h2>
        <Link to="/contact" className="contact-button">CONTACT ME</Link>
      </div>
      <img src={Photo} alt='my-avatar' className='my-avatar' />
    </div>
    <Loader type="line-spin-fade-loader" />
    </>
  );
};

export default Home;
