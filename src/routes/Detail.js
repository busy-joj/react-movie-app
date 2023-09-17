/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();
  const getMovieDetail = async () => {
    const res = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(res.data.movie);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div>
      {isLoading ? <h1>Loading....</h1> : <div>{movieDetail.title}</div>}
    </div>
  );
};

export default Detail;
