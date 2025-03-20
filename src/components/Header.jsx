import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">Pari Match</div>
      <nav>
        <a href="#">Главная</a>
        <a href="#">Ставки</a>
        <a href="#">Результаты</a>
        <a href="#">Акции</a>
        <a href="#">Поддержка</a>
      </nav>
    </header>
  );
};

export default Header;