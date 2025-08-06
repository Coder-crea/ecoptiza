import React from "react";
import "./footer.css";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { GiChicken } from "react-icons/gi";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Логотип и описание */}
        <div className="footer-logo">
          <h3>
            <div className="logo">
              <GiChicken size={32} color="#FFD700" />
              <span>Экоптица</span>
            </div>
          </h3>
          <p>
            Натуральная птица от фермы до стола. Без химии, с заботой о природе
            и вашем здоровье.
          </p>
        </div>

        {/* Контакты */}
        {/* <div className="footer-contact">
          <h4>Контакты</h4>
          <ul>
            <li>
              <FaMapMarkerAlt /> Москва, Ленинский проспект, 15
            </li>
            <li>
              <FaPhone /> +7 (900) 123-45-67
            </li>
            <li>
              <FaEnvelope /> info@ecopchica.ru
            </li>
          </ul>
        </div> */}

        {/* Навигация */}
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/map">На карте</a>
            </li>
            <li>
              <a href="/contacts">Контакты</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Копирайт */}
      <div className="footer-bottom">
        <p>© 2025 Экоптица. Все права защищены.</p>
        <p>
          Проект реализован при поддержке{" "}
          <a
            href="https://foresat.tilda.ws/ "
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Фонда содействия инновациям
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
