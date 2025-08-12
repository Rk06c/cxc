import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import ProjectsPortfolio from './router/ProjectsPortfolio';

// Lazy imports for route components
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
         <Suspense fallback={<LoadingSpinner />}>
        <main>
          <Routes>
            <Route
              path="/"
              element={
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
              }
            />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/dsa-learning" element={<DSASection />} />
            <Route path="/service-details/:id" element={<ServiceDetails />} />
             <Route path="/all-project" element={<ProjectsPortfolio />} />
          </Routes>
        </main>
      </Suspense>
    </Router>
  );
}

export default App;
