import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './Hero';
import ProjectsSection from './Projects';
import SkillsSection from './Skills';
import AboutSection from './About';
import ContactSection from './Contact';
// import Publications from './Publications';
// import Blog from './Blog';

const Home = () => {

  return (
    <div className="relative">
      {/* Grid Background */}
      <div className="grid-background" />

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#38FF62]/30 to-transparent"
          initial={{ top: 0 }}
          animate={{ top: ['0%', '100%'] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      {/* <Publications /> */}
      {/* <Blog /> */}
      <ContactSection />
    </div>
  );
};

export default Home;
