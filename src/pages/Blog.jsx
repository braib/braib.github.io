import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
// import { blogPosts } from '../mockData';

export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with ROS 2",
    excerpt: "A practical introduction to ROS 2 for robotics developers.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["ROS2", "Robotics"]
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00FF88]">
              Technical Writing
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">Blog & Notes</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Technical posts, tutorials, and notes on robotics, AI/ML, and system design.
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-[#141414] border border-white/10 p-8 hover:border-[#00FF88]/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4 text-sm text-white/50">
                  <span className="font-mono">{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center font-mono">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3 hover:text-[#00FF88] transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs font-mono uppercase px-2 py-1 border border-white/20 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Placeholder for empty state */}
          <div className="mt-12 text-center py-12 border border-dashed border-white/20">
            <p className="text-white/50 font-mono text-sm">
              More posts coming soon. Stay tuned for tutorials on ROS 2, MPC, and VLMs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;