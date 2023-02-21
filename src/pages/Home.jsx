import React from 'react'
import HeroSlide from '../components/homeComponents/hero-slide/HeroSlide'
import MovieList, { LatestList, TopRatedTV, TrendingMovieList, TrendingTV } from '../components/homeComponents/Movie/MovieList'


const Home = () => {
  return (
    <>
      <HeroSlide/>
      <TrendingMovieList/>
      <MovieList/>
      <LatestList/>
      <TrendingTV/>
      <TopRatedTV/>
    </>
  )
}

export default Home