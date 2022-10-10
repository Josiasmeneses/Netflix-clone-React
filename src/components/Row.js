import React, {useEffect} from 'react'
import { getMovies } from '../Api';
import "./Row.css";

const imageHost = "https://image.tmdb.org/t/p/w500";

function Row({title, path,  isLarge}) {
    const [movies, setMovies] =React.useState([]);
    
    const fetchMovies = async(_path) =>{
        try{
            const data = await getMovies(_path);
            setMovies (data?.results);
            } catch (error) { 
            console.log("fetchMovies error:",error);
        }
    };

    useEffect(() => {
      fetchMovies(path);
    }, [path]);
    
    return( 
        
        <div className="row-coontainer">
            <h2 className="row-header">{title}</h2>
            <div className="row-cards">
                {movies?.map(movie => {
                    return(
                        <img className={`movie-card ${isLarge && "movie-card-large"}`}
                        key={movie.id}
                        src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path}`}
                        alt={movie.name}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Row;