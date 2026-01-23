import React from "react";
import { useLayoutEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import team from "./img/chickensVillage.jpg";
const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="home">
      {/* Герой-секция */}
      <div className="hero">
        <div className="hero-content">
          <h1>Экоптица премиум-класса от фермы до стола</h1>
          <p>
            Натуральное, сочное мясо без гормонов, антибиотиков и ГМО. Выращено
            с заботой о природе и вашем здоровье.
          </p>
          <Link to="/contact-form" className="cta-button">
            Оставить заявку
          </Link>
        </div>
      </div>

      {/* Преимущества */}
      <div className="features">
        <h2>Почему выбирают нас</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🌱</span>
            <h3>Без химии</h3>
            <p>
              Никаких гормонов, антибиотиков и консервантов — только живая
              птица.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🌾</span>
            <h3>Натуральный корм</h3>
            <p>
              Корма из экологически чистых злаков и трав, без ГМО и
              искусственных добавок.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🐓</span>
            <h3>Свободное содержание</h3>
            <p>Наши птицы живут на свежем воздухе, а не в тесных клетках.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">✅</span>
            <h3>Полная прозрачность</h3>
            <p>
              Мы знаем каждую птицу. От выращивания до упаковки — всё под
              контролем.
            </p>
          </div>
        </div>
      </div>

      {/* Продукция */}
      {/* <div className="products">
        <h2>Наша продукция</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src="/img/chicken-whole.jpg" alt="Целая курица" />
            <h3>Целая курица</h3>
            <p>Свежая, охлаждённая, вес от 1.8 кг</p>
            <span className="price">890 ₽/кг</span>
          </div>
          <div className="product-card">
            <img src="/img/chicken-breast.jpg" alt="Филе куриной грудки" />
            <h3>Филе грудки</h3>
            <p>Идеально для диет и здорового питания</p>
            <span className="price">1150 ₽/кг</span>
          </div>
          <div className="product-card">
            <img src="/img/chicken-thighs.jpg" alt="Бедра куриные" />
            <h3>Бёдра и голени</h3>
            <p>Сочные, ароматные, идеальны для запекания</p>
            <span className="price">750 ₽/кг</span>
          </div>
        </div>
      </div> */}

      {/* О нас */}
      <div className="about">
        <div className="about-content">
          <h2>Мы — ферма, а не фабрика</h2>
          <p>
            Мы верим, что еда должна быть честной, вкусной и полезной. Каждый
            день мы заботимся о здоровье птиц, качестве кормов и экологичности
            процессов. Наша цель — чтобы вы и ваши близкие ели мясо, которому
            можно доверять.
          </p>
          {/* <Link to="/about" className="cta-button secondary">
            Узнать больше
          </Link> */}
        </div>
        <div className="about-image">
          <img src={team} alt="Команда фермы" />
        </div>
      </div>

      {/* Отзывы */}
      {/* <div className="reviews">
        <h2>Отзывы наших клиентов</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-header">
              <img
                src="https://i.pinimg.com/736x/ff/0f/71/ff0f710d77fc153c75066cb206a7e301.jpg"
                alt="Аватар"
              />
              <div>
                <strong>Елена К.</strong>
                <div className="stars">★★★★★</div>
              </div>
            </div>
            <p>
              Очень доволен качеством. Яйца действительно другие — плотные, с
              ярким желтком, без постороннего запаха. После проб нескольких
              поставщиков остановился на этих. Чувствуешь разницу с первых же
              блюд.
            </p>
          </div>
          <div className="review-card">
            <div className="review-header">
              <img
                src="https://i.pinimg.com/1200x/55/5a/45/555a45813ef0056b1a4a73ec4cae481d.jpg"
                alt="Аватар"
              />
              <div>
                <strong>Андрей П.</strong>
                <div className="stars">★★★★★</div>
              </div>
            </div>
            <p>
              Стабильно высокий уровень. Что сейчас, что месяц назад — одинаково
              свежие, аккуратно упакованы, без сколов. Редко встретишь такое
              постоянство. Уже рекомендовал знакомым, кто тоже ценит
              натуральное.
            </p>
          </div>
          <div className="review-card">
            <div className="review-header">
              <img
                src="https://i.pinimg.com/736x/6c/a3/77/6ca37738ced8ea13aae059c8fc8fce7f.jpg"
                alt="Аватар"
              />
              <div>
                <strong>Оксана М.</strong>
                <div className="stars">★★★★☆</div>
              </div>
            </div>
            <p>
              Нашли то, что искали. Долго выбирали поставщика с честным
              продуктом — без добавок, без компромиссов. Эти яйца соответствуют
              всем нашим критериям: от вида до вкуса. Теперь используем их как
              основной продукт.
            </p>
          </div>
        </div>
      </div> */}

      {/* CTA — призыв к действию */}
      <div className="cta-section">
        <h2>Готовы попробовать экоптицу?</h2>
        <p>Оставьте заявку — и мы свяжемся с вами в течение 15 минут.</p>
        <Link to="/contact-form" className="cta-button large">
          Оставить заявку
        </Link>
      </div>
    </section>
  );
};

export default Home;
