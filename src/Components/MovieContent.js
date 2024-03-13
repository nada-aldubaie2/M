import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/dist";
import axios from "axios";
import { useState, useEffect } from "react";
const MovieContent = () => {
  const [movie, setMovie] = useState([]);
  const params = useParams();
  console.log(params.id);
  const imgLink = "https://image.tmdb.org/t/p/w500/";

  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=d42d38fd9b1aec47f43d967a99d7a95b&lnaguage=en-US`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <>
      <Row>
        <Col >
          <div className="card card-details d-flex align-item-center">
        <Row>
              <Col xs="5" sm="5" md="4" lg="5" className="mt-4">
                <img
                  src={imgLink + movie.poster_path}
                  alt="card img"
                  className="card-img w-30"
                />
              </Col>
                <Col xs="7" sm="7" md="8" lg="7" className="mt-4">
              <div className="text-center mx-auto justify-content-center align-items-center" >
                  <p className="card-text-details fs-4 fw-bold">
                    Movie name: {movie.title}
                  </p>
                  <p className="card-text-details fs-5 ">
                    Releaser date: {movie.release_date}
                  </p>
                  <p className="card-text-details fs-5">
                    Type: Animation
                  </p>
                  <p className="card-text-details">
                    Evaluation: {movie.vote_average}
                  </p>
              </div>
                </Col>
        </Row>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex flex-column align-item-start">
            <div className="   p-4">
              <p className="card-text-title fs-2 fw-bold text-success border-bottom">Movie Story</p>
            </div>
            <div className=" px-2">
              <p className="card-text-title ">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="12"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center"
        >
          <Link to="/">
            <button className="btn btn-primary mx-2">Back Home</button>
          </Link>
          <a href={movie.homepage}>
            <button className="btn btn-primary mx-2">Watch movie</button>
          </a>
          <div className="text-end p-4"></div>
        </Col>
      </Row>
    </>
  );
};

export default MovieContent;
