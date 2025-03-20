import React, { useState, useEffect } from "react";
import "../styles/TopEvents.css";

const TopEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://avatars.mds.yandex.net/i?id=71eea46d2d5d6e7ffbb8f40848b5dc15_l-5245206-images-thumbs&n=13",
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
      image:
        "https://speedskating.ru/images/football/england/2021/04-10-mancity-liverpool.jpg",
      teams: [
        { name: "Манчестер Сити", logo: "#" },
        { name: "Ливерпуль", logo: "#" },
      ],
      coefficients: [
        { name: "П1", current: "2.0", old: "1.8" },
        { name: "П2", current: "2.8", old: "2.5" },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="top-events">
      <h2>Топовые события</h2>
      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.image} alt={`Слайд ${index + 1}`} />
              <div className="slide-content">
                <div className="teams">
                  {slide.teams.map((team, i) => (
                    <div className="team" key={i}>
                      <div className="team-logo"></div>
                      <div className="team-name">{team.name}</div>
                    </div>
                  ))}
                </div>
                <div className="coefficients">
                  {slide.coefficients.map((coeff, i) => (
                    <div className="coefficient" key={i}>
                      <div className="name">{coeff.name}</div>
                      <div className="current">{coeff.current}</div>
                      <div className="old">{coeff.old}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-controls">
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

export default TopEvents;