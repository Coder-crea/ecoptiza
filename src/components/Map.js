import React from "react";
import { useLayoutEffect } from "react";
import "./Map.css";

const Map = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="map-section">
      <div className="container">
        <h2>Где нас найти</h2>
        <p className="map-subtitle">
          Приезжайте к нам на ферму — посмотрите, как живут наши птицы, и
          заберите свежее мясо прямо с производства.
        </p>
        <div className="map-container">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A5306726af532de89a8c4c547089e521f708106193625f5c6c437f316bfb5b140&amp;source=constructor"
            width="100%"
            height="500"
            frameBorder="0"
            title="Местоположение фермы Экоптица"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
