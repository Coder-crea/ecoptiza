import React from "react";
import "./footer.css";
import Logo from "../pages/img/footer_logo_fasie.png";
import { GiChicken } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Логотип и описание */}
        <div className="footer-logo">
          <div className="logo-wrapper">
            <GiChicken size={32} color="#FFD700" />
            <span>Экоптица</span>
          </div>
          <p>
            Натуральная птица от фермы до стола. Без химии, с заботой о природе
            и вашем здоровье.
          </p>
        </div>

        {/* Навигация */}
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/contacts">Контакты</a>
            </li>
          </ul>
        </div>

        {/* Блок партнера (Фонд содействия инновациям) */}
        <div className="footer-partners">
          <h4>При поддержке</h4>
          <div className="partner-content">
            <text className="partner-link">
              Проект создан при поддержке Федерального государственного
              бюджетного учреждения "Фонд содействия развитию малых форм
              предприятий в научно-технической сфере" в рамках программы
              "Студенческий стартап" федерального проекта "Платформа
              университетского технологического предпринимательства"
            </text>
            <div className="partner-logo-box">
              <img src={Logo} alt="Логотип Фонда содействия инновациям" />
            </div>
          </div>
        </div>
      </div>

      {/* Копирайт и юридическая информация */}
      <div className="footer-bottom">
        <div className="legal-info">
          <p>© 2025 Экоптица. Все права защищены.</p>
          <p>ООО «ЭКОПТИЦА»</p>
          <p className="legal-address">
            Юр. адрес: Пензенская область, г. Никольск, ул. Октябрьская, д. 120
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
