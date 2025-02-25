import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get("3/trending/movie/day", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGJhMWU3MThlZjMzZGMyZDA0ZTkwMDEyYzg4ZDFjNCIsIm5iZiI6MTczOTY1NTc2OC42NTUsInN1YiI6IjY3YjEwYTU4MjAxZDliZjY0ZTZjNjFjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TPB-tPGXblb1vdk0CFKGsS5PYQgtXkbvFBaABu6h0wQ",
      },
    });
    if (!data.results) {
      console.error("No results found in the response.");
      return [];
    }
    console.log(data.results);

    return data.results;
  } catch (error) {
    console.log("Api error:", error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const { data } = await axios.get(`3/movie/${movieId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGJhMWU3MThlZjMzZGMyZDA0ZTkwMDEyYzg4ZDFjNCIsIm5iZiI6MTczOTY1NTc2OC42NTUsInN1YiI6IjY3YjEwYTU4MjAxZDliZjY0ZTZjNjFjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TPB-tPGXblb1vdk0CFKGsS5PYQgtXkbvFBaABu6h0wQ",
      },
    });
    if (!data) {
      console.error("No results found in the response.");
      return [];
    }
    console.log(data);

    return data;
  } catch (error) {
    console.log("Api error:", error);
    return [];
  }
};

export const fetchCastByMovieId = async (movieId) => {
  try {
    const { data } = await axios.get(`3/movie/${movieId}/credits`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGJhMWU3MThlZjMzZGMyZDA0ZTkwMDEyYzg4ZDFjNCIsIm5iZiI6MTczOTY1NTc2OC42NTUsInN1YiI6IjY3YjEwYTU4MjAxZDliZjY0ZTZjNjFjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TPB-tPGXblb1vdk0CFKGsS5PYQgtXkbvFBaABu6h0wQ",
      },
    });
    if (!data) {
      console.error("No results found in the response.");
      return [];
    }
    console.log(data);

    return data.cast;
  } catch (error) {
    console.log("Api error:", error);
    return [];
  }
};

export const fetchReviewsByMovieId = async (movieId) => {
  try {
    const { data } = await axios.get(`3/movie/${movieId}/reviews`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGJhMWU3MThlZjMzZGMyZDA0ZTkwMDEyYzg4ZDFjNCIsIm5iZiI6MTczOTY1NTc2OC42NTUsInN1YiI6IjY3YjEwYTU4MjAxZDliZjY0ZTZjNjFjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TPB-tPGXblb1vdk0CFKGsS5PYQgtXkbvFBaABu6h0wQ",
      },
    });
    if (!data) {
      console.error("No results found in the response.");
      return [];
    }
    console.log(data);

    return data.results;
  } catch (error) {
    console.log("Api error:", error);
    return [];
  }
};

export const fetchMovieByQuery = async (query) => {
  try {
    const { data } = await axios.get(`3/search/movie?query=${query}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGJhMWU3MThlZjMzZGMyZDA0ZTkwMDEyYzg4ZDFjNCIsIm5iZiI6MTczOTY1NTc2OC42NTUsInN1YiI6IjY3YjEwYTU4MjAxZDliZjY0ZTZjNjFjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TPB-tPGXblb1vdk0CFKGsS5PYQgtXkbvFBaABu6h0wQ",
      },
    });
    if (!data) {
      console.error("No results found in the response.");
      return [];
    }
    console.log(data);

    return data.results;
  } catch (error) {
    console.log("Api error:", error);
    return [];
  }
};
