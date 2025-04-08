import React, { useState, useEffect } from "react";
import { getAllEvents } from '../api_client/events';

import "../styles/PopularEvents.css";

const PopularEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    getAllEvents()
    .then(resp => {      
      const chunkSize = 3;

      resp.data = resp.data.map(event => {
        if (event.superIssue == null)
          event.superIssue = {'issueResults' : []}
        event.superIssue.issueResults = event.superIssue.issueResults.sort((a, b) => b.orderWeight - a.orderWeight);

        return event;
      })

      const new_slides = Array.from(
        { length: Math.ceil(resp.data.length / chunkSize) },
        (_, i) => resp.data.slice(i * chunkSize, (i + 1) * chunkSize)
      );
      setSlides(new_slides);
    })
    .catch(err => console.log(err))
  }, [])

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
                  <h2>{event.name}</h2>
                  <div className="teams">
                    {event.teams.map((team, j) => (
                      <div className="team" key={j}>
                        <div className="team-logo"></div>
                        <div className="team-name">{team.name}</div>
                      </div>
                    ))}
                  </div>
                  <h3>{ event.superIssue.name }</h3>
                  <div className="coefficients">
                    {event.superIssue.issueResults.map((coeff, j) => (
                      <div className="coefficient" key={j}>
                        <div className="name">{coeff.name}</div>
                        <div className="current">{coeff.rate}</div>
                        {coeff.oldRate != null && <div className="old">{coeff.oldRate}</div>}
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