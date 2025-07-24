import React from "react";
import { useLayoutEffect } from "react";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Contacts.css";

const Contacts = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="contacts">
      <div className="container">
        <h2>Свяжитесь с нами</h2>
        <p className="subtitle">
          Мы всегда рады помочь! Выберите удобный способ связи.
        </p>

        <div className="contact-cards">
          {/* Telegram */}
          <a
            href="https://t.me/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card telegram"
          >
            <FaTelegramPlane className="icon" />
            <h3>Telegram</h3>
            <p>@your_username</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/79991234567"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card whatsapp"
          >
            <FaWhatsapp className="icon" />
            <h3>WhatsApp</h3>
            <p>+7 999 123-45-67</p>
          </a>

          {/* Email */}
          <a href="mailto:info@ecoptitsa.ru" className="contact-card email">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <p>info@ecoptitsa.ru</p>
          </a>

          {/* Телефон */}
          <a href="tel:+79991234567" className="contact-card phone">
            <FaPhoneAlt className="icon" />
            <h3>Телефон</h3>
            <p>+7 999 123-45-67</p>
          </a>
        </div>

        {/* Карта (опционально) */}
        <div className="map-container">
          <h3>Наша ферма</h3>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A5306726af532de89a8c4c547089e521f708106193625f5c6c437f316bfb5b140&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
            title="Местоположение фермы Экоптица"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
