import React, { useState } from "react"
import axios from 'axios' ;
import { useNavigate } from "react-router-dom";



const Add = () => {
    const [movie, setMovie] = useState({
        title:"",
        desc:"",
        duration:null,
        cover:"",

    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setMovie(prev=>({...prev, [e.target.name]:e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/movies", movie)
        navigate("/")
        }catch(err){
            console.log(err)
        }
    }
    

    console.log(movie);
    return (
        <div className='form'>
            <h1>Add a New Movie</h1>
            <input type="text" placeholder='title' onChange={handleChange} name="title" />
            <input type="text" placeholder='desc' onChange={handleChange} name="desc"/>
            <input type="number" placeholder='duration' onChange={handleChange} name="duration" />
            <input type="text" placeholder='cover' onChange={handleChange} name="cover"/>

            <button className="formButton" onClick={handleClick}> Add Movie </button>
            </div>
    );
};

export default Add