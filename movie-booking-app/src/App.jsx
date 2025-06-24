import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';
import BookingForm from './Components/BookingForm';
import Confirmation from './Components/Confirmation';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
