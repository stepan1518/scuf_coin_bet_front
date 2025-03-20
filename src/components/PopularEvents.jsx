import React, { useState } from "react";
import "../styles/PopularEvents.css";

const PopularEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    [
      {
        teams: [
          { name: "Реал Мадрид", logo: "#" },
          { name: "Барселона", logo: "#" },
        ],
        coefficients: [
          { name: "П1", current: "2.5", old: "2.2" },
          { name: "П2", current: "3.3", old: "3.0" },
        ],
      },
      {
        teams: [
          { name: "Манчестер Сити", logo: "#" },
          { name: "Ливерпуль", logo: "#" },
        ],
        coefficients: [
          { name: "П1", current: "2.0", old: "1.8" },
          { name: "П2", current: "2.8", old: "2.5" },
        ],
      },
      {
        teams: [
          { name: "Челси", logo: "#" },
          { name: "Арсенал", logo: "#" },
        ],
        coefficients: [
          { name: "П1", current: "2.1", old: "1.9" },
          { name: "П2", current: "3.0", old: "2.7" },
        ],
      },
    ],
    [
      {
        teams: [
          { name: "Бавария", logo: "#" },
          { name: "Боруссия", logo: "#" },
        ],
        coefficients: [
          { name: "П1", current: "1.8", old: "1.6" },
          { name: "П2", current: "2.5", old: "2.3" },
        ],
      },
      {
        teams: [
          { name: "ПСЖ", logo: "#" },
          { name: "Лион", logo: "#" },
        ],
        coefficients: [
          { name: "П1", current: "1.7", old: "1.5" },
          { name: "П2", current: "2.4", old: "2.2" },
        ],
      },
      {
        teams: [
          { name: "Ювентус", logo: "#" },
          { name: "Милан", logo: "#" },
        ],
        coefficients: [
          { name: "П1", current: "2.0", old: "1.8" },
          { name: "П2", current: "2.7", old: "2.5" },
        ],
      },
    ],
  ];

  return (
    <section className="popular-events">
      <h2>Популярные события</h2>
      <div className="popular-slider">
        <div
          className="popular-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="popular-slide" key={index}>
              {slide.map((event, i) => (
                <div className="event" key={i}>
                  <div className="teams">
                    {event.teams.map((team, j) => (
                      <div className="team" key={j}>
                        <div className="team-logo"></div>
                        <div className="team-name">{team.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="coefficients">
                    {event.coefficients.map((coeff, j) => (
                      <div className="coefficient" key={j}>
                        <div className="name">{coeff.name}</div>
                        <div className="current">{coeff.current}</div>
                        <div className="old">{coeff.old}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="popular-controls">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default PopularEvents;