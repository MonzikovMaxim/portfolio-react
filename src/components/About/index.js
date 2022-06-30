import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Loader from "react-loaders";
import "./index.scss";

const About = () => {
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          pellentesque tortor, a ultrices turpis. Praesent dictum egestas
          condimentum. Class aptent taciti sociosqu ad litora torquent per
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          pellentesque tortor, a ultrices turpis. Praesent dictum egestas
          condimentum. Class aptent taciti sociosqu ad litora torquent per
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          pellentesque tortor, a ultrices turpis. Praesent dictum egestas
          condimentum. Class aptent taciti sociosqu ad litora torquent per
        </p>
      </div>
      <div className="techs">
        <span className="tech-title">My stack</span>
        <div className="tech-container">
          <div className="tech1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
          </div>
          <div className="tech2">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9"></FontAwesomeIcon>
          </div>
          <div className="tech3">
            <FontAwesomeIcon icon={faHtml5} color="#F06529"></FontAwesomeIcon>
          </div>
          <div className="tech4">
            <FontAwesomeIcon
              icon={faJsSquare}
              color="#EFD81D"
            ></FontAwesomeIcon>
          </div>
          <div className="tech5">
            <FontAwesomeIcon icon={faGithub} color="#272B33"></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
    <Loader type="line-spin-fade-loader" />
    </>
  );
};

export default About;
