import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieDetails } from "../../service/api";
import { useState, useEffect, useRef } from "react";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.addInfoLink, isActive && s.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? "/movies");

  useEffect(() => {
    const getDetails = async () => {
      const movies = await fetchMovieDetails(movieId);
      setMovieDetails(movies);
      console.log(movies);
    };
    getDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  const roundedScore = Math.round(movieDetails.popularity);
  const movieGenres = movieDetails.genres;
  const releaseYear = movieDetails.release_date.slice(0, 4);
  console.log("Genres", movieGenres);

  return (
    <div>
      <div className={s.allDetails}>
        <Link className={s.button} to={goBackUrl.current}>
          ← Go back
        </Link>
        <div className={s.movieInfo}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
          ></img>
          <div className={s.movieDetails}>
            <h1 className={s.movieTitle}>
              {movieDetails.title} ({releaseYear})
            </h1>
            <p>User score: {roundedScore}%</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <p className={s.genresTitle}>Genres</p>
            <ul className={s.ulGenres}>
              {movieGenres.map((genre) => (
                <li key={genre.id} className={s.liGenres}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={s.additionalInfoDiv}>
        <p className={s.addInfoTitle}>Additional information</p>
        <div className={s.linkDiv}>
          <NavLink
            to={`/movies/${movieDetails.id}/cast`}
            className={buildLinkClass}
          >
            Cast
          </NavLink>
          <NavLink
            to={`/movies/${movieDetails.id}/reviews`}
            className={buildLinkClass}
          >
            Reviews
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
