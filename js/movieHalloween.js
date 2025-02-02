

import Movie from "./classMovie.js";

const apiKey = 'fa0e9ab8';
const movieTitle = 'halloween';

fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
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
