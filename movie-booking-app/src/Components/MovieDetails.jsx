import { useParams, Link } from 'react-router-dom';
import { movies } from '../data';

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div style={{ padding: '20px' }}>
      <img src={movie.image} alt={movie.title} width="300" />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`}>
        <button>Book Seat</button>
      </Link>
    </div>
  );
}

export default MovieDetails;
