import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import Navbar from '../components/Navbar';
import MovieModal from '../components/MovieModal';
import './MyList.css';

function MyList() {
  const [myList, setMyList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const savedList = localStorage.getItem(`mylist_${auth.currentUser?.uid}`);
    if (savedList) {
      setMyList(JSON.parse(savedList));
    }
  }, []);

  const removeFromList = (movieId) => {
    const newList = myList.filter(movie => movie.id !== movieId);
    setMyList(newList);
    localStorage.setItem(`mylist_${auth.currentUser?.uid}`, JSON.stringify(newList));
  };

  return (
    <div className="mylist-page">
      <Navbar />
      <div className="mylist-container">
        <h1 className="mylist-title">My List</h1>
        {myList.length === 0 ? (
          <div className="mylist-empty">
            <p>Your list is empty</p>
            <p className="mylist-subtitle">Add movies and shows to keep track of what you want to watch</p>
          </div>
        ) : (
          <div className="mylist-grid">
            {myList.map((movie) => (
              <div key={movie.id} className="mylist-item">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
                  alt={movie.title || movie.name}
                  onClick={() => setSelectedMovie(movie)}
                />
                <button 
                  className="mylist-remove"
                  onClick={() => removeFromList(movie.id)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
}

export default MyList;
