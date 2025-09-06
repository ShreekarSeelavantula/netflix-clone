import { useState, useEffect } from 'react';
import tmdb from '../api/tmdb';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await tmdb.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching row data:', error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row-poster ${isLargeRow && 'row-poster-large'}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
