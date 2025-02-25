import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.notFoundDiv}>
      <p className={s.errorType}>404</p>
      <p className={s.errorContent}>Not Found </p>
      <Link to="/" className={s.link}>
        Home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
