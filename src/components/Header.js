import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiChicken, GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      {/* Логотип */}
      <div className="logo">
        <GiChicken size={32} color="#FFD700" />
        <span>Экоптица</span>
      </div>

      {/* Навигация (десктоп) */}
      <nav className="desktop-nav">
        <Link to="/">Главная</Link>
        <Link to="/map">На карте</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>

      {/* Бургер-иконка (мобильная) */}
      <div
        className="mobile-menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <GiHamburgerMenu size={28} color="#FFD700" />
      </div>

      {/* Выезжающее меню */}
      <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          Главная
        </Link>
        <Link to="/map" onClick={() => setIsMenuOpen(false)}>
          На карте
        </Link>
        <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>
          Контакты
        </Link>
      </nav>

      {/* Фон при открытом меню */}
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </header>
  );
};

export default Header;
