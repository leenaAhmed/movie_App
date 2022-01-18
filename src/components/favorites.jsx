import React from 'react';
import { useSelector } from 'react-redux';

import MoviesCard from './moviesCard';

const Favorites = () => {
  const favList = useSelector(state => state.favList);

  return (
    <>
      <div
        className='d-flex flex-wrap justify-content-center mt-5 mb-5'
        style={{ minHeight: '54vh' }}
      >
        {favList.length === 0 ? (
          <h1>There are no favorite movies</h1>
        ) : (
          favList.map(movie => {
            const { path, title, vote, id } = movie;

            return (
              <div key={movie.id + 1}>
                <MoviesCard
                  path={path}
                  title={title}
                  vote={vote}
                  id={id}
                  page={'favorites'}
                />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Favorites;
