import { Route, Routes } from "react-router-dom";
import "./App.css";
/* import HomePage from "./pages/homePage/HomePage"; */
import Navigation from "./components/navigation/Navigation";
/* import MoviesPage from "./pages/moviesPage/MoviesPage"; */
/* import NotFoundPage from "./pages/notFoundPage/NotFoundPage"; */
import MovieCast from "./components/movieCast/MovieCast";
import MovieReviews from "./components/movieReviews/MovieReviews";
/* import MovieDetailsPage from "./pages/movieDetailsPage/MovieDetailsPage"; */
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/moviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("./pages/notFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/movieDetailsPage/MovieDetailsPage")
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />}></Route>
            <Route path="reviews" element={<MovieReviews />}></Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
