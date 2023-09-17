import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Header from "../components/header/Header";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMoives] = useState([]);
    const getMovies = async () => {
        const res = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();
        setMoives(res.data.movies);
        setIsLoading(false);
    };
    console.log(movies);
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <Header />
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <div className="movie-wrap">
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            summary={movie.summary}
                            imgSrc={movie.medium_cover_image}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
