import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import { publications, talks } from '../data';
// import { personalInfo, about, mockPublications as publications, mockTalks as talks } from '../mockData';

const Publications = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00FF88]">
              Research Output
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">Publications</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Peer-reviewed papers, preprints, and conference presentations in robotics and AI.
            </p>  
          </div>

          {/* Publications List */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Papers</h2>
            <div className="space-y-6">
              {publications.map((pub) => (
                <div 
                  key={pub.id}
                  className="bg-[#141414] border border-white/10 p-6 hover:border-[#00FF88]/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs font-mono uppercase px-2 py-1 ${
                      pub.type === 'Conference' ? 'bg-[#00FF88]/20 text-[#00FF88]' : 'bg-white/10 text-white/70'
                    }`}>
                      {pub.type}
                    </span>
                    <span className="text-sm font-mono text-white/50">{pub.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                  <p className="text-sm text-white/70 mb-3">{pub.authors}</p>
                  <p className="text-sm font-mono text-white/50 mb-4">{pub.venue}</p>
                  <div className="flex gap-3">
                    <a 
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono uppercase tracking-wide text-[#00FF88] hover:underline inline-flex items-center"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      View Online
                    </a>
                    {pub.pdf && (
                      <a 
                        href={pub.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono uppercase tracking-wide text-white/70 hover:text-white inline-flex items-center"
                      >
                        <FileText size={14} className="mr-2" />
                        PDF
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Talks & Demos */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Talks & Demos</h2>
            <div className="space-y-6">
              {talks.map((talk) => (
                <div 
                  key={talk.id}
                  className="bg-[#141414] border border-white/10 p-6"
                >
                  <span className="text-xs font-mono uppercase px-2 py-1 bg-white/10 text-white/70">
                    {talk.type}
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2">{talk.title}</h3>
                  <p className="text-sm text-white/70">{talk.event}</p>
                  <p className="text-sm font-mono text-white/50 mt-1">{talk.location} • {talk.date}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Publications;