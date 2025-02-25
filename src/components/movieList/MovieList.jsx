import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ info }) => {
  const location = useLocation();

  if (!info || !Array.isArray(info)) {
    console.log("info is not array:", info);
    return;
  }
  console.log(info);

  return (
    <div>
      <ul className={s.trendingMovUl}>
        {info.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              className={s.trendingMovLi}
              state={location}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
