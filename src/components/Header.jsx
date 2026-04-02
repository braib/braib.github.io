import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import { Mail, FileText } from 'lucide-react';
import { FileText } from 'lucide-react';
import { personalInfo } from '../data';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only detect sections on home page
      if (location.pathname === '/') {
        const sections = ['home', 'projects', 'skills', 'about', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Update active section when route changes
  useEffect(() => {
    if (location.pathname === '/projects' || location.pathname.startsWith('/project/')) {
      setActiveSection('projects');
    } else if (location.pathname === '/') {
      // Will be set by scroll handler
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    }
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleProjectsClick = () => {
    if (location.pathname === '/') {
      scrollToSection('projects');
    } else {
      navigate('/projects');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#2a2a2a] ${
        isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-[#38FF62] hover:opacity-70 transition-opacity font-bold text-base"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            braib
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-bold transition-all relative ${
                activeSection === 'home' && location.pathname === '/'
                  ? 'text-[#38FF62]'
                  : 'text-white hover:text-[#38FF62]'
              }`}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              HOME
              {activeSection === 'home' && location.pathname === '/' && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#38FF62]" />
              )}
            </button>
            <button
              onClick={handleProjectsClick}
              className={`font-bold transition-all relative ${
                activeSection === 'projects' || location.pathname === '/projects' || location.pathname.startsWith('/project/')
                  ? 'text-[#38FF62]'
                  : 'text-white hover:text-[#38FF62]'
              }`}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              PROJECTS
              {(activeSection === 'projects' || location.pathname === '/projects' || location.pathname.startsWith('/project/')) && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#38FF62]" />
              )}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`font-bold transition-all relative ${
                activeSection === 'skills' && location.pathname === '/'
                  ? 'text-[#38FF62]'
                  : 'text-white hover:text-[#38FF62]'
              }`}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              SKILLS
              {activeSection === 'skills' && location.pathname === '/' && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#38FF62]" />
              )}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-bold transition-all relative ${
                activeSection === 'about' && location.pathname === '/'
                  ? 'text-[#38FF62]'
                  : 'text-white hover:text-[#38FF62]'
              }`}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              ABOUT
              {activeSection === 'about' && location.pathname === '/' && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#38FF62]" />
              )}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-bold transition-all relative ${
                activeSection === 'contact' && location.pathname === '/'
                  ? 'text-[#38FF62]'
                  : 'text-white hover:text-[#38FF62]'
              }`}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              CONTACT
              {activeSection === 'contact' && location.pathname === '/' && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#38FF62]" />
              )}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-5 py-3 border border-white/20 text-white hover:border-[#38FF62] hover:text-[#38FF62] transition-all font-bold"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <FileText size={16} />
              CV
            </a>
            {/* <a
              href="mailto:alex@robotics.edu"
              className="flex items-center gap-2 px-5 py-3 bg-[#38FF62] hover:bg-[#2AE052] transition-colors font-bold"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0a0a0a' }}
            >
              <Mail size={16} style={{ color: '#0a0a0a' }} />
              <span style={{ color: '#0a0a0a' }}>EMAIL</span>
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;