import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const SkillsSection = () => {
  const allSkills = Object.values(skills).flat();

  return (
    <section id="skills" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="label mb-4">TECHNICAL EXPERTISE</p>
          <h2 className="title-big">SKILLS & TOOLS</h2>
        </div>

        <div className="border border-[#2a2a2a]" style={{ background: 'rgba(0,0,0,0.5)' }}>

          {/* Terminal header */}
          <div className="flex items-center justify-between px-8 py-4 border-b border-[#2a2a2a] bg-[#0d0d0d]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-[#38FF62]/60" />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em' }} className="text-white/40">
              skills.sh
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }} className="text-white/30">
              {allSkills.length} modules
            </span>
          </div>

          {/* Skills grid */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.05 }}
                className="mb-10"
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-5">
                  <span
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.15em' }}
                    className="text-[#38FF62]"
                  >
                    # {category}
                  </span>
                  <div className="flex-1 h-px bg-[#2a2a2a]" />
                </div>

                {/* Skill rows */}
                <div className="space-y-4">
                  {items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.05 + i * 0.04 }}
                    >
                      {/* Name */}
                      <span
                        className="w-36 flex-shrink-0 text-white"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.04em' }}
                      >
                        {item.name}
                      </span>

                      {/* Bar track */}
                      <div className="flex-1 h-1 bg-[#1f1f1f] relative">
                        <motion.div
                          className="absolute top-0 left-0 h-1"
                          style={{
                            background: item.percent >= 80
                              ? '#38FF62'
                              : item.percent >= 60
                              ? 'rgba(56,255,98,0.5)'
                              : 'rgba(56,255,98,0.2)',
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: catIndex * 0.05 + i * 0.04, ease: 'easeOut' }}
                        />
                      </div>

                      {/* Percent */}
                      <span
                        className="w-10 text-right flex-shrink-0"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          letterSpacing: '0.06em',
                          color: item.percent >= 80
                            ? '#38FF62'
                            : item.percent >= 60
                            ? 'rgba(255,255,255,0.4)'
                            : 'rgba(255,255,255,0.2)',
                        }}
                      >
                        {item.percent}%
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-[#2a2a2a] flex items-center gap-3">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#38FF62' }}>$</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#38FF62' }}
          >
          </motion.span>
        </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;