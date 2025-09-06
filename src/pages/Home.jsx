import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import { requests } from '../api/tmdb';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Row title="Popular on Netflix" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Blockbuster Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Only on Netflix" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Pics for You" fetchUrl={requests.fetchActionMovies} />
      <div className="home-footer">
        <div className="footer-social">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <span>Audio Description</span>
            <span>Investor Relations</span>
            <span>Legal Notices</span>
          </div>
          <div className="footer-column">
            <span>Help Centre</span>
            <span>Jobs</span>
            <span>Cookie Preferences</span>
          </div>
          <div className="footer-column">
            <span>Gift Cards</span>
            <span>Terms of Use</span>
            <span>Corporate Information</span>
          </div>
          <div className="footer-column">
            <span>Media Centre</span>
            <span>Privacy</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
