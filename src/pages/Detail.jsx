import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import tmdbApi from '../api/tmdbApi';
import Button, { OutlineButton } from '../components/button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../components/homeComponents/moviecard/MovieCard';

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  
  useEffect(() => {
    const getDetail = async () => {
        const response = await tmdbApi.get(category + '/' + id);
        setItem(response.data);
        console.log(response)
        window.scrollTo(0,0);
    }
    getDetail();
}, [category, id]);
// const bg = `https://image.tmdb.org/t/p/w500/${item.backdrop_path || item.poster_path}`

return (
   
    <>
        {
            item && (
                        
                <div className="detail" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path})`}}>
                    <div className="container">
                        <div className="detail-container">
                            <div className="detail-container__poster">
                                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                            </div>
                            <div className="detail-container__info">
                                <div className="detail-container__info__title">
                                    <h1>{item.title || item.name}</h1>
                                </div>
                                
                                <div className="detail-container__info__genres">
                                    <div className="genres">
                                        {
                                            item.genres && item.genres.slice(0,4).map((genre, i) => (
                                                <span key={i} className="genres__item">{genre.name}</span>
                                            ))
                                        }
                                    </div>
                                    <div className="line"></div>
                                    <div className="release-date">
                                        Release Date: {item.release_date}
                                    </div>
                                </div>
                                <div className="detail-container__info__overview">
                                    {item.overview}
                                </div>
                                <div className="detail-container__info__casts">
                                    <h2>Casts: </h2>
                                    <CastList id={item.id}/>
                                </div>
                                <div className="detail-container__info__btn">
                                    <Button>
                                        Watch Movie
                                    </Button>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <Videos id={item.id}/>
                    <Similar id={item.id}/>
                </div>
            )
        }
    </>
       
);
}




const CastList = props => {
    const {category} = useParams();
    const [casts, setCasts] = useState([]);
    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.get(category + '/' + props.id + '/credits');
            setCasts(response.data.cast.slice(0,5));
            
        }
        getCredits();
    }, [category, props.id]);

return (
    <div className="casts">
        {
            casts.map((item, i) => (
                <div className="casts__item" key={i}>
                    <div className="casts__item__image">
                        <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt="" />
                    </div>
                    <div className="casts__item__name">
                        <p>
                            {item.name}
                        </p>
                    </div>
                </div>
            ))
        }
    </div>
)
}


const Similar = props => {
    const { category} = useParams();
    const item = props.item
    const [similar, setSimilar] = useState([]);
    useEffect(() => {
        const getLatest = async () => {
            try{    
                const data = await tmdbApi.get(category + '/' + props.id + '/similar')
                setSimilar(data.data.results)
                
            }catch{
                console.log('error')
            }
        }
        getLatest();
    }, [category, props.id]);
return (
    // <div className="movie-list">
    //     <div className="container">
    //     <div className="movie-list__title">
    //         <h1>Similar</h1> 
    //     </div>
    //     <Swiper
    //         slidesPerView={'auto'}
    //         spaceBetween={10}
    //         grabCursor={true}
    //     >
    //         {
    //             similar.map((item, i) => (
    //                 <SwiperSlide key={i}>
    //                     <Link to={category + item.id}>
    //                         <div className="movie-card"
    //                             style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})`}}
    //                             >
    //                             <div className="play-btn">
    //                                 <i class='bx bx-play-circle'></i>
    //                             </div>
    //                             <div className="movie-card__detail">
    //                                 <h4 className="name">{item.title || item.name}</h4>
    //                             </div>
    //                         </div>
    //                     </Link>
    //                 </SwiperSlide>
    //             ))
    //         }
    //     </Swiper>
    //     </div>
    // </div>

    <div className="movie-list">
      <div className="container">
      <div className="movie-list__title">
            <h1>Similar</h1>
        </div>
      <Swiper
            slidesPerView={'auto'}
            spaceBetween={10}
            grabCursor={true}
        >
            
            {
                similar.map((item, i) => (
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

const Videos = props => {
    const {category} = useParams();

    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const getVideos = async () => {
            const res = await tmdbApi.get(category + '/' + props.id + '/' + '/videos');
            setVideos(res.data.results.slice(0, 4));
        }
        getVideos();
    }, [category, props.id]);
    return (
       <div className="video">
         <div className="container">
            
           <div className="video-list">
            {
                    videos.map((item, i) => (
                        <div className="video-card" key={i}>
                            <div className="video-card__title">
                                <h2>{item.name}</h2>
                            </div>
                            <iframe
                                src={`https://www.youtube.com/embed/${item.key}`}
                                width="100%"
                                height="400px"
                                title="video"
                            ></iframe>
                        </div>
                    ))
                }
           </div>
        </div>
       </div>
    )
}

export default Detail