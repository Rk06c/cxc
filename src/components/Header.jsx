import React, { useEffect } from 'react';
import {
  faCode,
  faHome,
  faUser,
  faLaptopCode,
  faProjectDiagram,
  faBriefcase,
  faEnvelope,
  faFileDownload,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const navbar = document.querySelector('.navbar');
    const navAnchors = document.querySelectorAll('.nav-links a');

    const toggleMenu = () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      navLinks.classList.toggle('active');
      mobileOverlay.classList.toggle('active');
      document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
    };

    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

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

    const handleNavClick = (e) => {
      navAnchors.forEach(link => link.classList.remove('active'));
      e.currentTarget.classList.add('active');

      if (window.innerWidth <= 768) {
        closeMenu();
      }
    };

    // Add event listeners
    menuToggle.addEventListener('click', toggleMenu);
    mobileOverlay.addEventListener('click', closeMenu);
    window.addEventListener('scroll', handleScroll);
    navAnchors.forEach(link => {
      link.addEventListener('click', handleNavClick);
      link.addEventListener('click', handleSmoothScroll);
    });

    // Initial scroll state
    handleScroll();

    // Cleanup
    return () => {
      menuToggle.removeEventListener('click', toggleMenu);
      mobileOverlay.removeEventListener('click', closeMenu);
      window.removeEventListener('scroll', handleScroll);
      navAnchors.forEach(link => {
        link.removeEventListener('click', handleNavClick);
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <a href="#" className="logo" aria-label="Homepage">
        <FontAwesomeIcon icon={faCode} />
        <span>@RK</span>
      </a>

      <ul className="nav-links" id="navLinks">
        <li><a href="#home" className="active"><FontAwesomeIcon icon={faHome} /> Home</a></li>
        <li><a href="#about"><FontAwesomeIcon icon={faUser} /> About</a> </li>
        <li><a href="#skills"><FontAwesomeIcon icon={faLaptopCode} /> Skills</a></li>
        <li><a href="#projects"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</a></li>
        <li><a href="#service"><FontAwesomeIcon icon={faBriefcase} /> Service</a></li>
        <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
      </ul>

      {/* Desktop Resume Button */}
      <a
        href="/PAELCV.pdf"
        className="resume-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Resume"
      >
        <FontAwesomeIcon icon={faFileDownload} /> <span>Resume</span>
      </a>

      {/* Mobile Hamburger Toggle */}
      <button
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded="false"
        aria-controls="navLinks"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Mobile Menu Overlay */}
      <div className="mobile-menu-overlay" id="mobileOverlay" aria-hidden="true"></div>

      {/* Mobile Resume Button */}
      <a
        href="/PALANIVELCV.pdf"
        className="mobile-resume-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Resume"
      >
        <FontAwesomeIcon icon={faFileDownload} /> <span>Resume</span>
      </a>
    </nav>
  );
};

export default Header;
