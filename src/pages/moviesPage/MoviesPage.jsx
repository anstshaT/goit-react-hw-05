import { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import { fetchMovieByQuery } from "../../service/api";
import MovieList from "../../components/movieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;
    const getDetails = async () => {
      const movies = await fetchMovieByQuery(query);
      setSearchMovie(movies);
      console.log(movies);
    };
    getDetails();
  }, [query]);

  const handleSearchQuery = (value) => {
    searchParams.set("query", value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <SearchBar handleSearchQuery={handleSearchQuery} query={query} />
      <MovieList info={searchMovie} />
    </div>
  );
};

export default MoviesPage;
