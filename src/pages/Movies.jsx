import { useState } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import MovieModal from '../components/MovieModal';
import { requests } from '../api/tmdb';
import './Home.css';

function Movies() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Row 
        title="Trending Movies" 
        fetchUrl="/trending/movie/week" 
        isLargeRow
        onMovieClick={setSelectedMovie}
      />
      <Row 
        title="Top Rated Movies" 
        fetchUrl={requests.fetchTopRated}
        onMovieClick={setSelectedMovie}
      />
      <Row 
        title="Action Movies" 
        fetchUrl={requests.fetchActionMovies}
        onMovieClick={setSelectedMovie}
      />
      <Row 
        title="Comedy Movies" 
        fetchUrl={requests.fetchComedyMovies}
        onMovieClick={setSelectedMovie}
      />
      <Row 
        title="Horror Movies" 
        fetchUrl={requests.fetchHorrorMovies}
        onMovieClick={setSelectedMovie}
      />
      <Row 
        title="Romance Movies" 
        fetchUrl={requests.fetchRomanceMovies}
        onMovieClick={setSelectedMovie}
      />
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
}

export default Movies;
