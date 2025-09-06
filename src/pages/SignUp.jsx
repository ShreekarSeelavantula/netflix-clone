import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Auth.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-background"></div>
      <div className="auth-logo" onClick={() => navigate('/')}>NETFLIX</div>
      <div className="auth-form-container">
        <form className="auth-form" onSubmit={handleSignUp}>
          <h1>Sign Up</h1>
          {error && <div className="auth-error">{error}</div>}
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-submit-btn">
            Sign Up
          </button>
          <div className="auth-remember">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
            <span className="auth-help">Need Help?</span>
          </div>
          <div className="auth-signup-link">
            Already have account? <span onClick={() => navigate('/signin')}>Sign In Now</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
