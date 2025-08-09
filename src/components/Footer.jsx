import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  faChevronRight,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../styles/footer.css';  
//import '../styles/Footer.css'; // Assuming you have a CSS file for styling


const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const handleSmoothScroll = (e) => {
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId || targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const offset = targetElement.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  // Handle nav link click
  const handleNavClick = (e) => {
    // Remove active class from all links
    document.querySelectorAll('.footer-links a').forEach(link => {
      link.classList.remove('active');
    });
    
    // Add active class to clicked link
    e.currentTarget.classList.add('active');

    // Smooth scroll to target
    handleSmoothScroll(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage({ text: 'Please enter your email', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await axios.post('http://localhost:5000/subscribe', {
        email: email
      });

      if (response.data.success) {
        setMessage({ text: 'Subscription successful!', type: 'success' });
        setEmail('');
      } else {
        setMessage({ text: response.data.message || 'Subscription failed', type: 'error' });
      }
    } catch (error) {
      setMessage({ 
        text: error.response?.data?.message || 'An error occurred', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setMessage({ text: '', type: '' });
      }, 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${scrolled ? 'scrolled' : ''}`}>
      <div className="footer-container">
        {/* About Column */}
        <div className="footer-col">
          <h3>About Me</h3>
          <p>
            Full-stack developer specializing in MERN stack applications with 
            expertise in building scalable, performant web solutions.
          </p>
          <div className="social-links">
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home" onClick={handleNavClick}><FontAwesomeIcon icon={faChevronRight} /> Home</a></li>
            <li><a href="#about" onClick={handleNavClick}><FontAwesomeIcon icon={faChevronRight} /> About</a></li>
            <li><a href="#skills" onClick={handleNavClick}><FontAwesomeIcon icon={faChevronRight} /> Skills</a></li>
            <li><a href="#projects" onClick={handleNavClick}><FontAwesomeIcon icon={faChevronRight} /> Projects</a></li>
            <li><a href="#contact" onClick={handleNavClick}><FontAwesomeIcon icon={faChevronRight} /> Contact</a></li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul className="footer-links">
          <li>
  <Link to="/not-found" onClick={handleNavClick}>
    <FontAwesomeIcon icon={faChevronRight} /> Web Development
  </Link>
</li>
 <li>
  <Link to="/not-found" onClick={handleNavClick}>
    <FontAwesomeIcon icon={faChevronRight} /> API Development
  </Link>
</li>
 <li>
  <Link to="/not-found" onClick={handleNavClick}>
    <FontAwesomeIcon icon={faChevronRight} />  Mobile Apps
  </Link>
</li>
 <li>
  <Link to="/not-found" onClick={handleNavClick}>
    <FontAwesomeIcon icon={faChevronRight} /> UI/UX Design
  </Link>
</li>
 <li>
  <Link to="/dsa-learning" onClick={handleNavClick}>
    <FontAwesomeIcon icon={faChevronRight} /> DSA Learning
  </Link>
</li>


            {/* <li><a href="#" onClick={handleNavClick}><FontAwesomeIcon icon={faChevronRight} /> Mobile Apps</a></li> */}
            {/* <li><a href="#" onClick={handleNavClick}><FontAwesomeIcon icon={faChevronRight} /> API Development</a></li> */}
            {/* <li><a href="#" onClick={handleNavClick}><FontAwesomeIcon icon={faChevronRight} /> UI/UX Design</a></li> */}
            {/* <li><a href="#" onClick={handleNavClick}><FontAwesomeIcon icon={faChevronRight} /> Consulting</a></li> */}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>Subscribe to my newsletter for the latest updates and articles.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="newsletter-btn"
              disabled={isSubmitting}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
          {message.text && (
            <div className={`newsletter-message ${message.type}`}>
              {message.text}
            </div>
          )}
        </div>
      </div>

      <div className="copyright">
        &copy; <span>{currentYear}</span> All Rights Reserved. Designed by <a href="#">@rk</a>
      </div>
    </footer>
  );
};

export default Footer;