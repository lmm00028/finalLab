import React, { useEffect } from "react" ;
import { useState } from "react" ;
import axios from 'axios' ;
import { Link } from "react-router-dom";

const Movies = () => {

    const [movies, setMovies] = useState([]);
    
    useEffect(()=>{
        const fetchAllMovies = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/movies");
                setMovies(res.data);
                console.log(res);
            }catch(err){
                console.log(err);
            }
        };
        fetchAllMovies();
    },[]);

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/movies/"+id)
            window.location.reload();
        }catch(err){
            console.log(err) 
        }
    }

    return (
        <div>
         <h1>Luke's Movie Reviews</h1>  
         <div className="movies">
            {movies.map((movie)=>(
               <div className="movie" key={movie.id} >
                {movie.cover && <img src={movie.cover} alt="" />}
               <h2>{movie.title}</h2>
               <p>{movie.desc}</p>
               <span>{movie.duration}</span>
               <button className="delete" onClick={()=>handleDelete(movie.id)}>Delete</button>
               <button className="update"><Link to={`/update/${movie.id}`}>Update</Link></button>

               </div>
            ))}
         </div>
         <button>
            <Link to ="/add">Add a new movie</Link>
         </button>
     </div>
    );
};

export default Movies