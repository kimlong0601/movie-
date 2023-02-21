import React, { useEffect, useState } from 'react'
import tmdbApi from '../../../api/tmdbApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper'
import 'swiper/css/autoplay';

import HeroSlideItem from './HeroSlideItem';

const HeroSlide = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try{
                const response = await tmdbApi.get('movie/popular')
                setMovies(response.data.results.slice(0,4))
                console.log(response)
            }catch{
                console.log('error')
            }
        }
        getMovies()
    }, [])
    
  return (
    <div className="hero-slide">
        {/* <div className="overlay"></div> */}
        <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 6000,
            }}
        >
            {
                    movies.map((item, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <HeroSlideItem  item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }
        </Swiper>
    </div>
  )
}

export default HeroSlide