import { Button } from '../components/Button.tsx'
import { Card } from "../components/Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { movies } = useMovies();

  const handleLoading = () => {
    console.log("Clicked");
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const limit = 10;
  const totalPages = Math.ceil(movies.length / limit);
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const currentMovies = movies.slice(startIndex, endIndex);

  return (
    <>
      <div className="home">
        {currentMovies.map((movie) => (
          <Link to={`${movie.id}`}>
            {" "}
            <Card key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
      <Button displayMessage="Show More" handleClick={handleLoading} />
    </>
  );
};
