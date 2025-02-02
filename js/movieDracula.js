

import Movie from "./classMovie.js";

const apiKey = 'fa0e9ab8';
const movieTitle = 'dracula';
const movieYear = '1992';

fetch(`https://www.omdbapi.com/?t=${movieTitle}&y=${movieYear}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        
        
        const movie = new Movie(data.Title, 
            data.Year, data.Rated, data.Released, data.Runtime, 
            data.Genre, data.Director, data.Poster, data.imdbRating)

        movie.renderMovieInfo()
    })

    .catch(error =>{
        console.error('error:', error)
     })
