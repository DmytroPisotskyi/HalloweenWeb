export default class Movie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Poster: string;
    imdbRating: string;

    constructor(Title: string, Year: string, Rated: string, Released: string, Runtime: string, Genre: string, 
        Director: string, Poster: string, imdbRating: string) {
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
        const filmPoster = document.querySelector<HTMLImageElement>('.film-poster');
        if(filmPoster) {
            filmPoster.src = this.Poster
        }

        const filmInfo = document.querySelector<HTMLTitleElement>('.film-info');
        const spanItem = document.querySelector<HTMLSpanElement>('.span-item');
        const filmIntroInner = document.querySelector('.film-intro__inner');
        const movieTitle = document.querySelector<HTMLElement>('.tite-film')
        
        if(movieTitle) {
            movieTitle.innerHTML = `${this.Title} (${this.Year})`;
        }

        const spanRated = document.createElement('span');
        spanRated.innerHTML = this.Rated;
        const spanReleased = document.createElement('span');
        spanReleased.innerHTML = this.Released;
        const spanGenre = document.createElement('span');
        spanGenre.innerHTML = this.Genre;
        const spanRuntime = document.createElement('span');
        spanRuntime.innerHTML = this.Runtime;
        if(spanItem) {
            spanItem.append(spanRated, spanReleased, spanGenre, spanRuntime);
        }
        

        const paragraphDirector = document.createElement('p');
        paragraphDirector.innerHTML = this.Director;
        const paragrapImdb = document.createElement('p');
        paragrapImdb.innerHTML = `IMDb ${this.imdbRating}`

        if(filmInfo) {
            filmInfo.append(paragraphDirector, paragrapImdb);
        }
        
    }
}