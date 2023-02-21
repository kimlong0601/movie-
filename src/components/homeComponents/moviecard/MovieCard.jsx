import React from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom';



const MovieCard = props => {
    const item = props.item
    const bg = `https://image.tmdb.org/t/p/w500/${item.backdrop_path || item.poster_path}`
    const link = '/' + 'movie' + '/' + item.id
  return (
    <Link to={link}>
      <div className="movie-card"
        style={{backgroundImage: `url(${bg})`}}
      >
        <div className="play-btn">
          <i class='bx bx-play-circle'></i>
        </div>
        <div className="movie-card__detail">
          <h4 className="name">{item.title || item.name}</h4>
        </div>
      </div>
    </Link>
  )
}

export const TVCard = props => {
  const item = props.item
  const bg = `https://image.tmdb.org/t/p/w500/${item.backdrop_path || item.poster_path}`
  const link = '/' + 'tv' + '/' + item.id
return (
  <Link to={link}>
    <div className="movie-card"
      style={{backgroundImage: `url(${bg})`}}
    >
      <div className="play-btn">
        <i class='bx bx-play-circle'></i>
      </div>
      <div className="movie-card__detail">
        <h4 className="name">{item.title || item.name}</h4>
      </div>
    </div>
  </Link>
)
}

MovieCard.propTypes = {}

export default MovieCard