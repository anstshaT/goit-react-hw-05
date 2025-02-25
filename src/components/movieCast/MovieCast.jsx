import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastByMovieId } from "../../service/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getInfo = async () => {
      const cast = await fetchCastByMovieId(movieId);
      setCastInfo(cast);
      console.log("Cast:", cast);
    };
    getInfo();
  }, [movieId]);

  return (
    <div>
      <ul className={s.castUl}>
        {castInfo.map((cast) => (
          <li key={cast.id} className={s.castLi}>
            <img
              src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
            ></img>
            <div>
              <p className={s.name}>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
