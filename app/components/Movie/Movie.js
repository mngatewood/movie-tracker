import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({title, release_date, overview, backdrop_path, vote_average}) => {
  // console.log(backdrop_path)
  return (
    <div className='movie'>
      <div className='no-image-container'>
        <p className='no-image'>NO IMAGE</p>
      </div>
      <div className='movie-title-container'>
        <div className='movie-title-background'></div>
        <div className='inner-title-container'>
          <h2 className='movie-title'>{title}</h2>
        </div>
      </div>
      <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
      <div className='info-container-background'></div>
      <div className='info-container'>
        <div className='favorite-button'>
          <p className='favorite-button-title'>FAVORITE</p>
        </div>
        <h2 className='movie-title2'>{title}</h2>
        <h4 className='vote' >SCORE:  {vote_average}</h4>
        <h4 className='release' >RELEASE DATE:  {release_date}</h4>
        <p className='overview' >{overview}</p>
      </div>
    </div>
  )
}

export default Movie