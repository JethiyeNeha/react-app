export const Card: React.FC<any> = ({ movie }) => {
  console.log('inside card', movie);
  return (
    <div className="card">
      <div className="card-image">
        <img src={movie.images} alt="movie" />
      </div>
      <div className="card-title">
        {movie.title} {movie.stock} (in stock)
      </div>
    </div>
  );
};
