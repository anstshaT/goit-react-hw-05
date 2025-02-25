import { useEffect, useState } from "react";
import { fetchReviewsByMovieId } from "../../service/api";
import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getInfo = async () => {
      const reviews = await fetchReviewsByMovieId(movieId);
      setReviewsInfo(reviews);
      console.log("Cast:", reviews);
    };
    getInfo();
  }, [movieId]);

  return (
    <div>
      <ul className={s.reviewsUl}>
        {reviewsInfo.map((review) => (
          <li key={review.id}>
            <p className={s.author}>Author: {review.author}</p>
            <p className={s.authorContent}> {review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
