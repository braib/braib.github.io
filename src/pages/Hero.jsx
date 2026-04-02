import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-24">
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.p className="label mb-8" variants={itemVariants}>
            ROBOTICS ENGINEER
          </motion.p>
          <motion.h1 className="hero-title mb-12" variants={itemVariants}>
            {personalInfo.name.toUpperCase()}
          </motion.h1>
          <motion.p className="text-big max-w-3xl mx-auto mb-12" variants={itemVariants}>
            {personalInfo.tagline}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <a href="#projects" className="btn-accent">
              VIEW PROJECTS
            </a>
            <a href="#contact" className="btn-primary">
              GET IN TOUCH
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
