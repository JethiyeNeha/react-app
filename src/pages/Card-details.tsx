import { Link, useParams } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { Button } from "../components/Button";

export const CardDetails = () => {
  const { movies } = useMovies();
  const { id } = useParams<{ id: string }>();
  console.log("id", id);
  const movie: any = movies.find((m) => m.id === Number(id));

  return (
    <>
      <Link to="/">
        <Button displayMessage="Back" />{" "}
      </Link>

      <div className="card-details">
        <div className="card-details-image">
          <img src={movie.images} alt="movie" />
        </div>
        <div className="card-details-title">
          {movie.title} - {movie.stocks} (in stock)
        </div>

        <div className="card-details-minOrder">
          Minimum order quantity - {movie.minimumOrderQuantity}
        </div>
      </div>
    </>
  );
};
