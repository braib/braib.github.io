import React from 'react';
import { BookOpen, ExternalLink, Award, MonitorPlay, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { publications, talks, patents } from '../data';

const ResearchSection = () => {
  return (
    <section id="research" className="relative py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label mb-4">ACADEMIC WORK</p>
          <h2 className="title-big mb-8">RESEARCH</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-regular mb-8 flex items-center gap-3">
              <BookOpen size={24} className="text-[#38FF62]" />
              Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub) => (
                <div key={pub.id} className="card">
                  <h4 className="text-body font-semibold mb-3">{pub.title}</h4>
                  <p className="label-small mb-2">{pub.authors}</p>
                  <p className="text-body mb-4">
                    {pub.venue}, {pub.year}
                  </p>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost p-0 flex items-center gap-2"
                    >
                      <ExternalLink size={14} /> READ PAPER
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Talks & Demos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-regular mb-8 flex items-center gap-3">
              <Award size={24} className="text-[#38FF62]" />
              Talks & Demos
            </h3>
            <div className="space-y-6">
              {talks.map((talk) => (
                <div key={talk.id} className="card">
                  <h4 className="text-body font-semibold mb-3">{talk.title}</h4>
                  {talk.speakers && (
                    <p className="label-small text-white/50 mb-2">{talk.speakers}</p>
                  )}
                  <p className="text-body mb-2">{talk.event}</p>
                  <p className="label-small text-[#38FF62] mb-4">{talk.date}</p>
                  {talk.link && (
                    <a
                      href={talk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost p-0 flex items-center gap-2"
                    >
                      <MonitorPlay size={14} /> WATCH TALK
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Patents */}
            {patents && patents.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12"
              >
                <h3 className="text-regular mb-8 flex items-center gap-3">
                  <Shield size={24} className="text-[#38FF62]" />
                  Patents
                </h3>
                <div className="space-y-6">
                  {patents.map((patent) => (
                    <div key={patent.id} className="card">
                      <h4 className="text-body font-semibold mb-3">{patent.title}</h4>
                      {patent.inventors && (
                        <p className="label-small mb-2">{patent.inventors}</p>
                      )}
                      <div className="flex flex-wrap gap-4 mt-2">
                        {patent.filingDate && (
                          <p className="label-small text-white/50">
                            Filed: {patent.filingDate}
                          </p>
                        )}
                        {patent.applicationNumber && (
                          <p className="label-small text-white/50">
                            {patent.applicationNumber}
                          </p>
                        )}
                        {patent.status && (
                          <p className="label-small text-[#38FF62]">{patent.status}</p>
                        )}
                      </div>
                      {patent.link && (
                        <a
                          href={patent.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost p-0 flex items-center gap-2 mt-4"
                        >
                          <ExternalLink size={14} /> VIEW PATENT
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;