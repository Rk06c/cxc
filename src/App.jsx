import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import LoadingMon from './components/LoadingMon';
import ProjectsPortfolio from './router/ProjectsPortfolio';

// Lazy imports
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Service = lazy(() => import('./components/Service'));
const Footer = lazy(() => import('./components/Footer'));
const FrontendSkill = lazy(() => import('./components/FrontendSkill'));
const BackendSkill = lazy(() => import('./components/BackendSkill'));
const NotFound = lazy(() => import('./router/NotFount'));
const DSASection = lazy(() => import('./router/DSASection'));
const ServiceDetails = lazy(() => import('./router/ServiceDetails'));

function App() {
  return (
    <Router>
      <main>
        <Routes>
          {/* Home page routes with LoadingMon */}
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingMon />}>
                <>
                  <Header />
                  <Hero />
                  <About />
                  <FrontendSkill />
                  <BackendSkill />
                  <Projects />
                  <Service />
                  <Contact />
                  <Footer />
                </>
              </Suspense>
            }
          />

          {/* Other routes with LoadingSpinner */}
          <Route
            path="/not-found"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <NotFound />
              </Suspense>
            }
          />
          <Route
            path="/dsa-learning"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <DSASection />
              </Suspense>
            }
          />
          <Route
            path="/service-details/:id"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ServiceDetails />
              </Suspense>
            }
          />
          <Route
            path="/all-project"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ProjectsPortfolio />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
