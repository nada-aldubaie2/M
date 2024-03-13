import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Pagination from "./Pagination";
const MoviesList = ({ movies, getPages, pageCount }) => {
  console.log(movies.length);
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })
      ) : (
        <h2 className="text-center mt-4">There's no movies</h2>
      )}
      {movies.length >= 1 ? (
        <Pagination getPages={getPages} pageCount={pageCount} />
      ) : null}
    </Row>
  );
};

export default MoviesList;
