import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import tmdb from '../api/tmdb';
import './MovieModal.css';

function MovieModal({ movie, onClose }) {
  const [trailer, setTrailer] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTrailer('');
    setLoading(true);
    
    async function fetchTrailer() {
      if (!movie) return;
      
      try {
        const type = movie.media_type === 'tv' ? 'tv' : 'movie';
        const response = await tmdb.get(`/${type}/${movie.id}/videos`);
        const videos = response.data.results;
        const trailerVideo = videos.find(
          (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
        ) || videos[0];
        
        if (trailerVideo) {
          setTrailer(`https://www.youtube.com/watch?v=${trailerVideo.key}`);
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrailer();
  }, [movie]);

  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        
        <div className="modal-video">
          {loading ? (
            <div className="modal-loading">Loading trailer...</div>
          ) : trailer ? (
            <ReactPlayer
              url={trailer}
              playing
              controls
              width="100%"
              height="100%"
            />
          ) : (
            <img 
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title || movie.name}
              className="modal-backdrop"
            />
          )}
        </div>

        <div className="modal-details">
          <h2>{movie.title || movie.name || movie.original_name}</h2>
          <div className="modal-info">
            <span className="modal-match">
              {Math.floor(movie.vote_average * 10)}% Match
            </span>
            <span className="modal-year">
              {(movie.release_date || movie.first_air_date || '').substring(0, 4)}
            </span>
            <span className="modal-rating">
              {movie.adult ? '18+' : 'PG-13'}
            </span>
          </div>
          <p className="modal-overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
