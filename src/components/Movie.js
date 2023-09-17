import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, title, summary, imgSrc, genres }) => {
    return (
        <div className="movie">
            <img src={imgSrc} alt="" />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            {/* <p>{summary}</p>
            {genres.map((item) => (
                <span key={item}>{item}</span>
            ))} */}
        </div>
    );
};
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
