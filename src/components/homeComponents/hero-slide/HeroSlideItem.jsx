import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../button/Button'
import { OutlineButton } from './../../button/Button';
import { useNavigate } from 'react-router-dom';

const HeroSlideItem = props => {
    const negative = useNavigate();
    const item = props.item
    const bg = `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`
    const imgPath = `https://image.tmdb.org/t/p/w500/${item.poster_path}`
  return (
    <div className={`hero-slide__item ${props.className}`}
        style={{backgroundImage: `url(${bg})`}}
    >
         <div className="container">
            <div className="hero-item__content">
               
                <div className="hero-item__content__poster">
                    <img src={imgPath} alt={item.name} />
                </div>
                <div className="hero-item__content__info">
                    <h1 className="title">{item.title || item.name}</h1>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                    <Button onClick={() => negative('/movie/' + item.id)}>
                        Watch Now
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

HeroSlideItem.propTypes = {}

export default HeroSlideItem