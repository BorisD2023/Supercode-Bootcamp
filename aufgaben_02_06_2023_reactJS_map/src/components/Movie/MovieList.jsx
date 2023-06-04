import movies from "../Data/Data"
import Movie from "./Movie";

const MovieList = () =>{
    console.log(movies);

    return (
        
        <section className="movie-section">
            {movies.map((elm, index) => <Movie movie={elm} key={index} />)}
        </section>
        
    )
}

export default MovieList