import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchDate() {
      const request = await axios.get(`/movie/${movieId}`);
      setMovie(request.data);
    }

    fetchDate();
  }, [movie]);

  if (!movie) return <div>...loading</div>;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
};

export default DetailPage;
