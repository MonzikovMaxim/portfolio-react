import "./index.scss";
import Loader from "react-loaders";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-page">
        <h1 className="portfolio-title">Portfolio</h1>
      </div>
      <section className="portfolio-grid">
        <ul className="portfolio-container">
          <li className="portfolio__item portfolio__item-hts">
            <a
              className="portfolio-overlay"
              href="https://github.com/MonzikovMaxim/second-project/tree/master/how-to-learn-main"
              target="_blank"
              rel="noreferrer"
            >
              Проект про учебу
            </a>
          </li>
          <li className="portfolio__item portfolio__item-travel">
            <a
              className="portfolio-overlay"
              href="https://monzikovmaxim.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
            >
              Проект про путешествия
            </a>
          </li>
          <li className="portfolio__item portfolio__item-mesto">
            <a
              className="portfolio-overlay"
              href="https://monzikovmaxim.github.io/mesto/"
              target="_blank"
              rel="noreferrer"
            >
              Клон инстаграм с добавлением карточек
            </a>
          </li>
          <li className="portfolio__item  portfolio__item-sunset">
            <a
              className="portfolio-overlay"
              href="https://monzikovmaxim.github.io/mesto/"
              target="_blank"
              rel="noreferrer"
            >
              Приложение для просмотра погоды
            </a>
          </li>
          <li className="portfolio__item portfolio__item-game">
            <a
              className="portfolio-overlay"
              href="https://monzikovmaxim.github.io/tic-tac-toe-game/"
              target="_blank"
              rel="noreferrer"
            >
              Игра крестики-нолики
            </a>
          </li>
          <li className="portfolio__item portfolio__item-todo">
            <a
              className="portfolio-overlay"
              href="https://monzikovmaxim.github.io/todo-list/"
              target="_blank"
              rel="noreferrer"
            >
              Приложение со списком дел
            </a>
          </li>
        </ul>
      </section>
      <Loader type="line-spin-fade-loader" />
    </>
  );
};

export default Portfolio;
