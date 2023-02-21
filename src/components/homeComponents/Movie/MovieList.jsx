import React, { useEffect, useState } from 'react'
import tmdbApi from '../../../api/tmdbApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard, { TVCard } from '../moviecard/MovieCard';

//top rated movie
const MovieList = () => {

    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        const getTopRated = async () => {
            try{
                const response = await tmdbApi.get('movie/top_rated')
                setTopRated(response.data.results)
                console.log(response)
            }catch{
                console.log('error')
            }
        }
        getTopRated()
    }, [])
    
  return (
    <div className="movie-list">
        <div className="container">
            <div className="movie-list__title">
                <h1>Top Rated Movies</h1>
            </div>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                grabCursor={true}
            >
                {
                    topRated.map((item, index) => (
                        <SwiperSlide key={index}>
                            <MovieCard item={item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

//trending movie
export const TrendingMovieList = () => {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        const getLatest = async () => {
            try{    
                const data = await tmdbApi.get('movie/popular')
                setTrending(data.data.results)
                
            }catch{
                console.log('error')
            }
        }
        getLatest();
    }, []);
    
    return (
        <div className="movie-list">
            <div className="container">
            <div className="movie-list__title">
                <h1>Trending Movies</h1>
            </div>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                grabCursor={true}
            >
                {
                    trending.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
    )
}

//Up coming movie
export const LatestList = () => {
    const [latest, setLatest] = useState([]);
    useEffect(() => {
        const getLatest = async () => {
            try{    
                const data = await tmdbApi.get('movie/upcoming')
                setLatest(data.data.results)
                
            }catch{
                console.log('error')
            }
        }
        getLatest();
    }, []);
    
    return (
        <div className="movie-list">
            <div className="container">
            <div className="movie-list__title">
                <h1>Latests Movies</h1>
            </div>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                grabCursor={true}
            >
                {
                    latest.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
    )
}


//trending tv 
export const TrendingTV = () => {

    const [trendingTV, setTrendingTV] = useState([]);
    useEffect(() => {
        const getTopRatedTV = async () => {
            try{    
                const data = await tmdbApi.get('tv/popular')
                setTrendingTV(data.data.results)
                console.log(data)
            }catch{
                console.log('error')
            }
        }
        getTopRatedTV();
    }, []);
    return (
        <div className="movie-list">
            <div className="container">
                <div className="movie-list__title">
                    <h1>Trending TV Series</h1>
                </div>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    grabCursor={true}
                >
                    {
                        trendingTV.map((item, i) => (
                            <SwiperSlide key={i}>
                                <TVCard item={item}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}



//top rated tv
export const TopRatedTV = () => {

    const [topRatedTV, setTopRatedTV] = useState([]);
    useEffect(() => {
        const getTopRatedTV = async () => {
            try{    
                const data = await tmdbApi.get('tv/top_rated')
                setTopRatedTV(data.data.results)
                
            }catch{
                console.log('error')
            }
        }
        getTopRatedTV();
    }, []);
    return (
        <div className="movie-list">
            <div className="container">
                <div className="movie-list__title">
                    <h1>Top Rated TV Series</h1>
                </div>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    grabCursor={true}
                >
                    {
                        topRatedTV.map((item, i) => (
                            <SwiperSlide key={i}>
                                <TVCard item={item}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default MovieList