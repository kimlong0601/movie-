import React from 'react'
import { useParams } from 'react-router-dom';
import MovieGrid, { TVGrid } from '../components/movieGrid/MovieGrid';

const Catalog = () => {
    const { category } = useParams();

  return (
    <div className="catalog">

        <div className="container">
            <div className="catalog-title">
                <h1>
                {
                    category === 'movie' ? 'Movie' : 'TV Series'
                }
                </h1>
            </div>
            
            <div className="catalog">
                <MovieGrid category={category}/>
            </div>
        </div>

    </div>
  )
}

export default Catalog