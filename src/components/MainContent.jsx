import React from "react";
import "../styles/MainContent.css";

const MainContent = () => {
  return (
    <section className="main-content">
      <div className="card">
        <h2>Широкий выбор событий</h2>
        <p>Ставки на тысячи событий по всему миру.</p>
      </div>
      <div className="card">
        <h2>Высокие коэффициенты</h2>
        <p>Получайте максимальную прибыль от своих ставок.</p>
      </div>
      <div className="card">
        <h2>Быстрые выплаты</h2>
        <p>Вывод средств в течение нескольких минут.</p>
      </div>
    </section>
  );
};

export default MainContent;