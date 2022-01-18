import React from "react";
import "./stylee.css";
function CardDetials(props) {
  return (
    <div>
      <figure className="movie mt-5 ms-5">
        <div className="movie__hero">
          <img src={props.srcImge} alt="" className="movie__img" />
        </div>
        <div className="movie__content">
          <div className="movie__title">
            <h1 className="heading__primary">
              {props.title}
              <i className="fas fa-fire"></i>
            </h1>
            <div className="movie__tag movie__tag--1 mt-4">{props.tagline}</div>
          </div>
          <p className="movie__description mb-4">{props.overview}</p>

          <div className="movie__details">
            <p className="movie__detail"></p>
            <p className="movie__detail">
              <span className="icons icons-grey">
                <i className="fas fa-clock"></i>
              </span>
              {props.release_date}
            </p>
            <p className="movie__detail">
              <span className="icons icons-yellow">
                <i className="fas fa-file-invoice-dollar"></i>
              </span>
              rate : {props.vote_average}
            </p>
            {props.production_companies}
          </div>
        </div>
      </figure>
    </div>
  );
}

export default CardDetials;
