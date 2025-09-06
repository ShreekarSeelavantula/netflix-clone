import { useState } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import MovieModal from '../components/MovieModal';
import { requests } from '../api/tmdb';
import './Home.css';

function TVShows() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Row 
        title="Netflix Originals" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow 
        onMovieClick={setSelectedMovie}
      />
      <Row 
        title="Trending TV Shows" 
        fetchUrl="/trending/tv/week"
        onMovieClick={setSelectedMovie}
      />
      <Row 
        title="Top Rated TV Shows" 
        fetchUrl="/tv/top_rated"
        onMovieClick={setSelectedMovie}
      />
      <Row 
        title="Action & Adventure" 
        fetchUrl="/discover/tv?with_genres=10759"
        onMovieClick={setSelectedMovie}
      />
      <Row 
        title="Comedy TV Shows" 
        fetchUrl="/discover/tv?with_genres=35"
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

export default TVShows;
