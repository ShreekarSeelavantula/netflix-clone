import { useState, useEffect } from 'react';
import tmdb, { requests } from '../api/tmdb';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await tmdb.get(requests.fetchNetflixOriginals);
        const movies = response.data.results;
        setMovie(movies[Math.floor(Math.random() * movies.length)]);
      } catch (error) {
        console.error('Error fetching banner movie:', error);
      }
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  if (!movie) return null;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner-contents">
        <div className="banner-badge">
          <span className="netflix-n">N</span>
          <span className="banner-badge-text">SERIES</span>
        </div>
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"></path>
            </svg>
            Play
          </button>
          <button className="banner-button banner-button-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            More Info
          </button>
        </div>
        <h1 className="banner-description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner-fade-bottom" />
    </header>
  );
}

export default Banner;
