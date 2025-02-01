
export default class Movie {
    constructor(Title, Year, Rated, Released, Runtime, Genre, 
        Director, Poster, imdbRating) {
        this.Title = Title,
        this.Year = Year,
        this.Rated = Rated,
        this.Released = Released,
        this.Runtime = Runtime,
        this.Genre = Genre,
        this.Director = Director,
        this.Poster = Poster,
        this.imdbRating = imdbRating
    }

    renderMovieInfo() {

        const filmPoster = document.querySelector('.film-poster');
        filmPoster.src = this.Poster

        const filmInfo = document.querySelector('.film-info');
        const spanItem = document.querySelector('.span-item');
        const filmIntroInner = document.querySelector('.film-intro__inner');
        const movieTitle = document.querySelector('.tite-film')
        
        movieTitle.innerHTML = `${this.Title} (${this.Year})`;

        const spanRated = document.createElement('span');
        spanRated.innerHTML = this.Rated;
        const spanReleased = document.createElement('span');
        spanReleased.innerHTML = this.Released;
        const spanGenre = document.createElement('span');
        spanGenre.innerHTML = this.Genre;
        const spanRuntime = document.createElement('span');
        spanRuntime.innerHTML = this.Runtime;
        spanItem.append(spanRated, spanReleased, spanGenre, spanRuntime);
        

        const paragraphDirector = document.createElement('p');
        paragraphDirector.innerHTML = this.Director;
        const paragrapImdb = document.createElement('p');
        paragrapImdb.innerHTML = `IMDb ${this.imdbRating}`

        filmInfo.append(paragraphDirector, paragrapImdb);
        
    }
}