import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CardMovie({ movie }) {
  const imgLink = "https://image.tmdb.org/t/p/w500/";
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="3"
      className="my-3 shadow bg-body-tertiary rounded"
    >
      <Link style={{textDecoration:"none"}}  to={`/movie/${movie.id}`}>
        <div className="card card-scale">
          <img
            src={imgLink + movie.poster_path}
            alt="card img"
            className="card-img"
          />
          <div className="text-center w-100 p-2">
            <p className="fw-bold text-success">Movie name: {movie.title}</p>
            <p
              className="text-start text-success-emphasis

"
            >
              Released date: {movie.release_date}
            </p>
            <p
              className="  text-start text-success-emphasis

"
            >
              Type: Animation
            </p>
            <p className="fw-light text-start text-success-emphasis">
              Evaluation: {movie.vote_average}{" "}
            </p>
          </div>
        </div>
      </Link>
    </Col>
  );
}
