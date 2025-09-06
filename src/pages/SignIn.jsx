import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Auth.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
        <form className="auth-form" onSubmit={handleSignIn}>
          <h1>Sign In</h1>
          {error && <div className="auth-error">{error}</div>}
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
            Sign In
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
            New to Netflix? <span onClick={() => navigate('/signup')}>Sign Up Now</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
