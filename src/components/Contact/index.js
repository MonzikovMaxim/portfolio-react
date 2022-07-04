import React from "react";
import Loader from "react-loaders";
import emailjs from "emailjs-com";
import "./index.scss";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "portfolio_template", e.target, "Gi72QEv2GHM0p_v69")
      .then(
        (response) => {
          alert("Письмо успешно отправлено");
          console.log(response.status, response.text);
        },
        (error) => {
          alert("Что-то пошло не так... Попробуйте отправить еще раз!");
          console.log(error.status, error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact me</h1>
          <p>
            Мне интересно работать в большой команде с интересными проектами и
            амбициозными людьми. Так или иначе, если у вас есть ко мне
            какие-нибудь предложения или вопросы, можете заполнить форму и я вам
            обязательно отвечу!
          </p>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Maxim Monzikov,
          <br />
          Russia,
          <br />
          Saint-Petersburg <br />
          <span>monzikovm@yandex.ru</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[60.06304, 30.43258]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
            <Marker position={[60.06304, 30.43258]}></Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  );
};

export default Contact;
