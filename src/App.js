import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

// Helper component that redirects to home and scrolls to a section
const RedirectToSection = ({ sectionId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      }
    }, 100);
  }, []);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App bg-[#0a0a0a] min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/projects" element={<RedirectToSection sectionId="projects" />} />
          <Route path="/skills" element={<RedirectToSection sectionId="skills" />} />
          <Route path="/about" element={<RedirectToSection sectionId="about" />} />
          <Route path="/contact" element={<RedirectToSection sectionId="contact" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;