import Movie from "./Movie";
function Movies(props) {
    const {movies} = props
    return (
        <div className="movies">
            {movies.map((movie) => <Movie key={movie['imdbID']} title={movie['Title']} year = {movie['Year']} type={movie['Type']} image__link={movie['Poster']} />)}
        </div>
    )
}

export default Movies;