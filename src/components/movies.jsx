import React, { useState, useEffect } from 'react';

import axiosInstance from '../axiosConfig';
import MoviesCard from './moviesCard';
import SearchBar from './searchBar';

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [valueFilter, setValueFilter] = useState();

  const goToPrevPage = () => {
    if (pageNum === 1) return;
    setPageNum(pageNum - 1);
  };

  const goToNextPage = () => {
    if (pageNum === 500) return;
    setPageNum(pageNum + 1);
  };

  const Search = value => {
    setValueFilter(value);
  };

  useEffect(() => {
    axiosInstance
      .get('/movie/popular?&page=' + pageNum)
      .then(res => setMoviesList(res.data.results))
      .catch(err => console.log(err));
  }, [pageNum]);

  useEffect(() => {
    if (valueFilter) {
      axiosInstance
        .get('/search/movie?&query=' + valueFilter)
        .then(res => {
          setMoviesList(res.data.results);
        })
        .catch(err => console.log(err));
    }
  }, [valueFilter]);

  return (
    <>
      <h4 className='ms-5 my-3'>Movies</h4>

      <SearchBar onSearch={Search} />

      <div className='d-flex flex-wrap justify-content-center'>
        {moviesList.map(movie => {
          const { poster_path, original_title, vote_average, id } = movie;

          return (
            <div key={movie.id}>
              <MoviesCard
                path={poster_path}
                title={original_title}
                vote={vote_average}
                id={id}
                page={'movies'}
              />
            </div>
          );
        })}
      </div>
      <div className='container mt-5 d-flex justify-content-between'>
        <button
          type='button'
          className='btn btn-secondary'
          onClick={goToPrevPage}
        >
          Previous
        </button>
        <h2>{pageNum}</h2>
        <button
          type='button'
          className='btn btn-secondary'
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Movies;
