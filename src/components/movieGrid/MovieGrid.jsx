import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams, useNavigate, Link } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';
import Input from '../input/Input';
import Button, { OutlineButton } from '../button/Button';
import MovieCard from '../homeComponents/moviecard/MovieCard';
import axios from './../../api/tmdbApi';


const MovieGrid = props => {
    const [item, setItems] = useState([]);
    const { keyword } = useParams();
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    
   useEffect(() => {
        const getMovieList = async () => {
            let response = null;
            
            if(keyword === undefined){
                const params = {};
                   switch(props.category){
                        case 'tv': 
                            response = await tmdbApi.get('tv/on_the_air', {params});
                            break;
                        default:
                            response = await tmdbApi.get('movie/upcoming', {params});
                   }
                }
            else{
                const params ={
                    query: keyword
                }
                response = await tmdbApi.get('search/' + props.category,{params});
            }
            setItems(response.data.results);
            setTotalPage(response.data.total_pages);
        }
        getMovieList();
   }, [props.category, keyword]);


   const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
        const params = {
            page: page + 1
        };
        switch(props.category) {
            case 'movie':
                response = await tmdbApi.get('movie/upcoming', {params});
                break;
            default:
                response = await tmdbApi.get('tv/popular', {params});
        }
    } else {
        const params = {
            page: page + 1,
            query: keyword
        }
        response = await tmdbApi.search(props.category, {params});
    }
    setItems([...item, ...response.data.results]);
    setPage(page + 1);
}

   const link = '/' + 'movie' + '/' + item.id
    
  return (
    <>
        <div className="search-section">
            <Search category={props.category} keyword={keyword}/>
        </div>
        <div className="movie-grid">
            {
                item.map((item, i) => (
                  <MovieCard key={i} item={item} category={props.category}/>
                ))
            }
        </div>
        {
                page < totalPage ? (
                    <div className="load-more">
                        <OutlineButton onClick={loadMore}>Load more</OutlineButton>
                    </div>
                ) : null
        }
    </>
  )
}


export const Search = props => {
    
    const navigate =  useNavigate();
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');
    const gotoSearch = useCallback(
        () => {
            if(keyword.trim().length > 0){
                navigate(`/${props.category}/search/${keyword}`)
            }
        },[keyword,props.category,navigate]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                gotoSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, gotoSearch]);
    return (
            <div className="movie-search">
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className="small" onClick={gotoSearch}>Search</Button>
        </div>
    )
}
MovieGrid.propTypes = {}

export default MovieGrid