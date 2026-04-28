import { useState, useEffect } from "react"; 
import { MovieSummary } from "./types"; 

import axios from "axios";

const API_KEY = "4743d76def129c8ae597e0e3102b0482";

export default function Page (){
    const [movies, setMovies] = useState<MovieSummary[]>([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`).then((res)=>{
            setMovies(res.data.results);
        });
    }, []);

    return 
        <ul>
        {movies.map((movie)=>(
            <li key={movie.id}></li>
        ))}</ul>;
}