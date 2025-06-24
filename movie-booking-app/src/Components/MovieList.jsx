import { Link } from 'react-router-dom';
import { movies } from '../data';

function MovieList() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px' }}>
      {movies.map(movie => (
        <div key={movie.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
          <img src={movie.image} alt={movie.title} width="100%" />
          <h3>{movie.title}</h3>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
