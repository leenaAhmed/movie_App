import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../services/axios";
import CardDetials from "../moveCardDeials/index";

function MoviesDetails() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  useEffect(() => {
    axiosInstance
      .get(`movie/${params.id}?api_key=6354f454eb60c40b4787fe8e3cb0fbf0`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" moveCard">
      <CardDetials
        title={movie.original_title}
        id={movie.id}
        overview={movie.overview}
        release_date={movie.release_date}
        vote_average={movie.vote_average}
        tagline={movie.status}
        srcImge={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      />
    </div>
  );
}

export default MoviesDetails;
