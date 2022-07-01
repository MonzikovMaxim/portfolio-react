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
            Я выбрал Веб-разработку, потому что мне нравится, как много
            возможностей в ней существует. Мне нравится видеть и самостоятельно менять
            визуальную и интерактивную часть проекта. Это меня очень вдохновляет
            и мотивирует.
          </p>
          <p>
            Я закончил обучение в Я.Практикум, на данный момент улучшаю свои
            знания по React, JavaScript, HTML верстке. Изучаю TS и Redux.
          </p>
          <p>
            Ищу работу в ИТ-компании с возможностью работать с новейшими
            технологиями, выполнять сложные и интересные задачи!
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
              <FontAwesomeIcon
                icon={faGithub}
                color="#272B33"
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  );
};

export default About;
