import React from 'react';
import { Github, Linkedin, Mail, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo, about } from '../data';

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label mb-4">GET TO KNOW ME</p>
          <h2 className="title-big mb-8">ABOUT</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Profile & Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#38FF62] shadow-lg shadow-[#38FF62]/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="text-regular mb-6">Background</h3>
                  <div className="space-y-4">
                    {about.bio.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-body">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-regular mb-6 flex items-center gap-3">
                <GraduationCap size={24} className="text-[#38FF62]" />
                Education
              </h3>
              <div className="space-y-6">
                {about.education.map((edu, index) => (
                  <div key={index} className="card">
                    <h4 className="label mb-2">{edu.degree}</h4>
                    <p className="text-body mb-1">{edu.institution}</p>
                    <p className="label-small text-[#38FF62]">{edu.year}</p>
                    {edu.marks && <p className="label-small text-white/50 mt-1">{edu.marks}</p>}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-regular mb-6 flex items-center gap-3">
                <Briefcase size={24} className="text-[#38FF62]" />
                Experience
              </h3>
              <div className="space-y-6">
                {about.experience.map((exp, index) => (
                  <div key={index} className="card">
                    <h4 className="label mb-2">{exp.role}</h4>
                    <p className="text-body mb-1">{exp.organization}</p>
                    {exp.location && <p className="label-small text-white/50 mb-1">{exp.location}</p>}
                    <p className="label-small text-[#38FF62]">{exp.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Connect */}
          <div className="space-y-8">
            <motion.div
              className="card sticky top-24"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="label mb-6">CONNECT</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-body hover:text-[#38FF62] transition-colors break-all"
                >
                  <Mail size={18} className="flex-shrink-0" />
                  {personalInfo.email}
                </a>
                <div className="flex gap-3 pt-4">
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;