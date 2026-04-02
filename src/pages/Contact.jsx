import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="label mb-4">GET IN TOUCH</p>
          <h2 className="title-big">CONTACT</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-regular mb-8">Let's Build Something Together</h3>
              <p className="text-body mb-8">
                I'm always open to discussing new projects, research collaborations, or opportunities in robotics and AI.
              </p>
            </div>

            <div className="card">
              <h4 className="label mb-6">CONTACT INFORMATION</h4>
              <div className="space-y-6">

                <div>
                  <p className="label-small mb-2">EMAIL</p>
                  <p className="text-body text-[#38FF62] break-all">
                    {personalInfo.email}
                  </p>
                </div>

                <div>
                  <p className="label-small mb-2">LOCATION</p>
                  <p className="text-body">{personalInfo.location}</p>
                </div>

                <div>
                  <p className="label-small mb-2">RESPONSE TIME</p>
                  <p className="text-body">Typically within 24-48 hours</p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card flex flex-col items-center justify-center text-center py-16"
          >
            <Mail size={48} className="text-[#38FF62] mb-6" />
            <h3 className="text-regular mb-6">Ready to Collaborate?</h3>
            <p className="text-body max-w-md mx-auto mb-10">
              Whether it's a new project, research opportunity, or just a conversation about robotics and AI.
            </p>

            <div className="w-full border border-[#2a2a2a] px-6 py-5 flex flex-col items-center gap-4">
              <p className="label-small text-white/40">EMAIL ADDRESS</p>
              <p className="text-body text-[#38FF62] break-all">
                {personalInfo.email}
              </p>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-6 py-3 border border-[#2a2a2a] hover:border-[#38FF62] text-white/70 hover:text-white transition-all"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                {copied
                  ? <><Check size={14} className="text-[#38FF62]" /> COPIED</>
                  : <><Copy size={14} /> COPY EMAIL</>
                }
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;