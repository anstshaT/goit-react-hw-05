import MovieList from "../../components/movieList/MovieList";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../service/api";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const movies = await fetchTrendingMovies();
      setInfo(movies);
      console.log(movies);
    };
    getInfo();
  }, []);

  return (
    <div className={s.homeDiv}>
      <h1 className={s.homeTitle}>Trending today</h1>
      <MovieList info={info} />
    </div>
  );
};

export default HomePage;
