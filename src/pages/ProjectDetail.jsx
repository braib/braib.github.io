import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, Play, ExternalLink, FileText, LineChart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { allProjects } from '../data';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = allProjects.find(p => p.slug === slug);
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Always scroll to top when project detail mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element = document.getElementById('projects');
                if (element) {
                  window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
                }
              }, 100);
            }}
            className="text-[#38FF62] hover:underline cursor-pointer"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const getIcon = (iconName) => {
    const icons = { Github, Play, ExternalLink, FileText, LineChart };
    return icons[iconName] || ExternalLink;
  };

  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleBackToProjects = () => {
    // Read saved home scroll position
    const homeScroll = sessionStorage.getItem('home-scroll');
    navigate('/');
    setTimeout(() => {
      if (homeScroll) {
        window.scrollTo({ top: parseInt(homeScroll), behavior: 'instant' });
      } else {
        const element = document.getElementById('projects');
        if (element) {
          window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        }
      }
    }, 80);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="grid-background" />

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Back Button */}
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center text-white/70 hover:text-[#38FF62] transition-colors mb-12 cursor-pointer"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span className="font-mono text-sm uppercase tracking-wide">Back to Projects</span>
          </button>

          {/* Project Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.category.map((cat) => (
                <span key={cat} className="label px-3 py-1 border border-[#38FF62] text-[#38FF62]">
                  {cat}
                </span>
              ))}
              {project.details?.status && (
                <span className="label px-3 py-1 border border-white/20 text-white/60">
                  {project.details.status}
                </span>
              )}
            </div>
            <h1 className="title-big mb-6">{project.title}</h1>
            <p className="text-big text-white/80 leading-relaxed">{project.shortDesc}</p>

            {project.details && (
              <div className="flex flex-wrap gap-6 mt-6 text-body text-white/60">
                {project.details.duration && (
                  <div><span className="label-small">DURATION:</span> {project.details.duration}</div>
                )}
                {project.details.team && (
                  <div><span className="label-small">TEAM:</span> {project.details.team}</div>
                )}
              </div>
            )}
          </motion.div>

          {/* Media Gallery */}
          {project.media && project.media.length > 0 && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="label mb-6">MEDIA GALLERY</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.media.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative cursor-pointer group"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedMedia(item)}
                  >
                    <div className="border border-white/10 overflow-hidden bg-[#1a1a1a] aspect-video relative">
                      {item.type === 'image' && (
                        <>
                          <img
                            src={item.url}
                            alt={item.caption || `Media ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <ExternalLink className="text-white" size={32} />
                          </div>
                        </>
                      )}
                      {item.type === 'youtube' && (
                        <>
                          <img
                            src={`https://img.youtube.com/vi/${getYouTubeId(item.url)}/maxresdefault.jpg`}
                            alt={item.caption || `Video ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Play className="text-[#38FF62]" size={48} fill="#38FF62" />
                          </div>
                        </>
                      )}
                    </div>
                    {item.caption && (
                      <p className="text-body text-white/60 mt-2">{item.caption}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Full Description */}
          {project.fullDescription && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="label mb-6">PROJECT OVERVIEW</h2>
              <div className="card prose prose-invert max-w-none">
                <div className="text-body whitespace-pre-line">
                  {project.fullDescription}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tech Stack */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="label mb-4">TECH STACK</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span key={tech} className="label-small px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] text-[#38FF62]">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Results & Metrics */}
          {project.metrics && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="label mb-4">RESULTS & IMPACT</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.metrics.performance && (
                  <div className="card">
                    <div className="text-regular text-[#38FF62] mb-2">{project.metrics.performance}</div>
                    <div className="label-small text-white/50">PERFORMANCE</div>
                  </div>
                )}
                {project.metrics.accuracy && (
                  <div className="card">
                    <div className="text-regular text-[#38FF62] mb-2">{project.metrics.accuracy}</div>
                    <div className="label-small text-white/50">ACCURACY</div>
                  </div>
                )}
                {project.metrics.custom && project.metrics.custom.map((metric, index) => (
                  <div key={index} className="card">
                    <div className="text-regular text-[#38FF62] mb-2">{metric.value}</div>
                    <div className="label-small text-white/50">{metric.label.toUpperCase()}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tags */}
          {project.details?.tags && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="label mb-4">TAGS</h2>
              <div className="flex flex-wrap gap-2">
                {project.details.tags.map((tag) => (
                  <span key={tag} className="label-small px-3 py-1 border border-white/20 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Links */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {project.links && project.links.map((link, index) => {
              const Icon = getIcon(link.icon || link.type);
              const isAccent = link.type === 'demo';
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isAccent ? 'btn-accent' : 'btn-primary'} inline-flex items-center`}
                >
                  <Icon size={16} className="mr-2" />
                  {link.label}
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Media Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-[#38FF62] transition-colors"
              onClick={() => setSelectedMedia(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              className="max-w-6xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'image' && (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.caption}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
              )}
              {selectedMedia.type === 'youtube' && (
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${getYouTubeId(selectedMedia.url)}?autoplay=1`}
                    title={selectedMedia.caption}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              {selectedMedia.caption && (
                <p className="text-center text-body text-white/80 mt-4">{selectedMedia.caption}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
