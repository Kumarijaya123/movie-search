/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import { useState } from "react";
import "./Video.css"
import MovieSearchForm from "../MovieSearchForm";
import MovieList from "../MovieList";
import spinner from "../assets/spinner.png"
import "../MovieBox.css"
import video from "../assets/video.mp4"


function Home() {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [movies, setMovies] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    function addNewMovies(newMoviesArray){
        setMovies(newMoviesArray)
        
    }
   
    return(
        <div className="movieBox">
            <h1>movieBox</h1>
            
        <MovieSearchForm 
        addNewMovies={addNewMovies}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
        setErrorMessage={setErrorMessage}
        />
        {/*
       <div className="video">
       <video controls>
       <source src={video} type="video/mp4" />
       </video>
       </div>
    */}
        {isLoading ? (
        <img src={spinner} alt="Loading..."
        className="spinner" />
        ) : (  
            <>
            {isError ? (<h1 style={{textAlign: "center", margin: "2rem auto"}}>{errorMessage}</h1>
            ) : ( 
            <MovieList movies={movies} 
           
        />
        )}
        </>
        )}
       
        </div>
    )
    
}

export default Home;

//`https://omdbapi.com/?s=spiderman&apikey=1325f738`