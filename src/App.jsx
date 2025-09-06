import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import MyList from './pages/MyList';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/tvshows" 
          element={
            <ProtectedRoute>
              <TVShows />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/movies" 
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/mylist" 
          element={
            <ProtectedRoute>
              <MyList />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
