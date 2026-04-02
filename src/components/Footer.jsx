import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';
import { personalInfo } from '../data';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    // { icon: BookOpen, href: personalInfo.scholar, label: 'Google Scholar' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

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

  const footerLinks = [
    { name: 'HOME', sectionId: 'home' },
    { name: 'PROJECTS', route: 'projects' },
    { name: 'SKILLS', sectionId: 'skills' },
    { name: 'ABOUT', sectionId: 'about' },
    { name: 'CONTACT', sectionId: 'contact' }
  ];

  const handleLinkClick = (link) => {
    if (link.route) {
      navigate(link.route);
    } else if (link.sectionId) {
      scrollToSection(link.sectionId);
    }
  };

  return (
    <footer className="relative border-t border-[#2a2a2a] bg-[#0a0a0a] mt-32">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="label text-[#38FF62] mb-6">
              braib
            </div>
            <p className="text-body max-w-xs">
              {personalInfo.footerTagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="label mb-6">QUICK LINKS</h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className="text-body hover:text-[#38FF62] transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="label mb-6">CONNECT</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-white hover:border-[#38FF62] hover:text-[#38FF62] transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <p className="text-body mt-6">
              {personalInfo.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="label-small">
            © {currentYear} {personalInfo.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;