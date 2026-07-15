import React, { useEffect, useRef, useState } from 'react';

// Import local images
import MovieMindImg from '../assets/MovieMind.jpg';
import CinebookImg from '../assets/cinebook.avif';
import AssistantImg from '../assets/Assistant.webp';
import TaskImg from '../assets/task.jpeg';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'MovieMind — GraphRAG Movie Engine',
      icon: '🎬',
      image: MovieMindImg,
      tech: ['React', 'Node.js', 'Neo4j', 'Pinecone', 'Gemini AI', 'Web Speech API'],
      description: [
        '🧠 GraphRAG Architecture — Combines graph traversal + vector similarity for hybrid search',
        '🗄️ Neo4j Graph Database — Stores 1,000+ movies with 10K+ relationships',
        '📐 Pinecone Vector Search — Semantic similarity for intelligent recommendations',
        '🤖 Google Gemini LLM — Natural language understanding and response generation',
        '🎤 Voice Input/Output — Speak queries and listen to answers',
        '📌 Currently using free Gemini API (3-4 queries/day). Will upgrade to paid for unlimited queries!'
      ],
      live: 'https://moviemind-xi.vercel.app/',
      github: 'https://github.com/Ayush8292006/MovieMind---GraphRAG',
      color: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/20'
    },
    {
      id: 2,
      title: 'CineBook — Movie Ticket Booking Platform',
      icon: '🎬',
      image: CinebookImg,
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Clerk', 'TMDB API'],
      description: [
        'Built a scalable full-stack movie booking platform with real-time seat selection supporting concurrent users.',
        'Designed secure authentication using Clerk (Google OAuth) with protected routes.',
        'Integrated Stripe payments with webhook verification and automated ticket generation.',
        'Implemented concurrency control to prevent double booking in high-traffic scenarios.'
      ],
      live: 'https://cinebook-omega.vercel.app/',
      github: 'https://github.com/Ayush8292006/CineBook-TicketBooking',
      color: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/20'
    },
    {
      id: 3,
      title: 'AI Virtual Assistant',
      icon: '🤖',
      image: AssistantImg,
      tech: ['React', 'Node.js', 'MongoDB', 'Gemini API', 'Web Speech API'],
      description: [
        'Developed a voice + text assistant using speech recognition and text-to-speech.',
        'Integrated Gemini API for contextual and intelligent responses.',
        'Implemented JWT authentication with persistent chat history in MongoDB.'
      ],
      live: 'https://virtual-chatbot-sandy.vercel.app',
      github: 'https://github.com/Ayush8292006/Virtual-Chatbot',
      color: 'from-green-500 to-emerald-500',
      glow: 'shadow-emerald-500/20'
    },
    {
      id: 4,
      title: 'ProjectFlow — Task Management App',
      icon: '📋',
      image: TaskImg,
      tech: ['React', 'TypeScript', 'Tailwind', 'Zustand'],
      description: [
        'Built task management system with Kanban board, timeline view, and drag-and-drop support.',
        'Optimized performance using virtual scrolling to handle 500+ tasks efficiently.',
        'Implemented global state management using Zustand for seamless data flow.'
      ],
      live: 'https://kanban-timeline-website.vercel.app/',
      github: 'https://github.com/Ayush8292006/kanban-timeline-website',
      color: 'from-orange-500 to-yellow-500',
      glow: 'shadow-orange-500/20'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="min-h-screen py-20 bg-[#0a0e1a] relative overflow-hidden flex items-center"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-40 right-40 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#4a7aaa]/20 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4a7aaa] to-[#6aaadd] rounded-full opacity-30 blur-2xl animate-pulse"></div>
            <div className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#1a2236] to-[#1a2a4a] border border-[#2a3a5a] shadow-2xl shadow-[#1a2236]/40 hover:shadow-[#4a7aaa]/20 transition-all duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4a7aaa] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4a7aaa]"></span>
              </span>
              <span className="text-xs font-semibold text-[#4a7aaa] tracking-widest uppercase">
                My Portfolio
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4a7aaa] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4a7aaa]"></span>
              </span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight mt-6">
            Featured <span className="bg-gradient-to-r from-[#4a7aaa] via-[#6aaadd] to-[#8aaac8] bg-clip-text text-transparent animate-gradient">Projects</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-[#4a7aaa]"></div>
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-[#4a7aaa] shadow-2xl shadow-[#4a7aaa]/50 animate-pulse"></div>
              <div className="absolute -inset-3 rounded-full bg-[#4a7aaa] opacity-20 animate-ping"></div>
            </div>
            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-[#4a7aaa]"></div>
          </div>
          <p className="text-[#8aaac8]/60 mt-5 text-sm max-w-2xl mx-auto font-light tracking-wide">
            Click on any project to explore full details
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className={`relative bg-gradient-to-br from-[#0d1424] to-[#0a0e1a] rounded-2xl overflow-hidden border border-[#1a2236] transition-all duration-500 hover:shadow-2xl hover:shadow-[#1a2236]/60 group hover:border-[#4a7aaa]/50 hover:-translate-y-2`}>
                
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  {/* Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 text-4xl animate-float-slow bg-[#0a0e1a]/50 backdrop-blur-sm p-2 rounded-xl border border-[#1a2236]">
                    {project.icon}
                  </div>
                  
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#6aaadd] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-sm">
                    <span className="text-[10px] text-green-400 font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      Live
                    </span>
                  </div>

                  {/* Gen AI Badge */}
                  {project.id === 1 && (
                    <div className="absolute top-4 left-20 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm">
                      <span className="text-[10px] text-purple-400 font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></span>
                        Gen AI
                      </span>
                    </div>
                  )}

                  {/* API Limit Badge */}
                  {project.id === 1 && (
                    <div className="absolute bottom-16 left-4 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-sm">
                      <span className="text-[9px] text-yellow-400 font-medium flex items-center gap-1.5">
                        ⚠️ Free API • 3-4 queries/day
                      </span>
                    </div>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="p-5 pt-4 border-t border-[#1a2236] bg-gradient-to-r from-[#0d1424] to-[#0a0e1a]">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-full bg-[#1a2236] text-[10px] font-medium text-[#8aaac8] border border-[#1a2236] hover:border-[#4a7aaa] transition-all duration-300 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1.5 rounded-full bg-[#1a2236] text-[10px] font-medium text-[#4a7aaa] border border-[#1a2236]">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Click Indicator */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4a7aaa]/0 via-[#4a7aaa]/5 to-[#4a7aaa]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute bottom-1/2 right-4 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-0 translate-x-4">
                  <div className="flex items-center gap-2 bg-[#1a2236] px-4 py-2 rounded-full border border-[#4a7aaa]/40 shadow-xl shadow-[#4a7aaa]/20 backdrop-blur-sm">
                    <span className="text-[#4a7aaa] animate-pulse">◆</span>
                    <span className="text-xs text-white font-medium">View Details</span>
                    <span className="text-[#4a7aaa] group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className={`mt-16 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-[#1a2236]/30 to-[#1a2a4a]/30 border border-[#2a3a5a] backdrop-blur-sm hover:border-[#4a7aaa]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#1a2236]/30 group">
            <span className="text-[#4a7aaa] animate-pulse text-lg group-hover:scale-125 transition-transform duration-300">✦</span>
            <span className="text-xs text-[#8aaac8] font-medium tracking-wide">Each project reflects my passion for building impactful solutions</span>
            <span className="text-[#4a7aaa] animate-pulse delay-500 text-lg group-hover:scale-125 transition-transform duration-300">✦</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e1a]/95 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative bg-gradient-to-br from-[#0d1424] to-[#0a0e1a] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#1a2236] shadow-2xl shadow-[#1a2236]/60 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-[#1a2236] border border-[#2a3a5a] text-[#8aaac8] hover:text-white hover:border-[#4a7aaa] transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-[#4a7aaa]/20 group"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className="p-6 md:p-8">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[16/9]">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-5xl bg-[#0a0e1a]/50 backdrop-blur-sm p-3 rounded-xl border border-[#1a2236]">
                  {selectedProject.icon}
                </div>
                <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-sm">
                  <span className="text-[10px] text-green-400 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    Live Project
                  </span>
                </div>
                {selectedProject.id === 1 && (
                  <>
                    <div className="absolute top-4 left-32 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm">
                      <span className="text-[10px] text-purple-400 font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></span>
                        Generative AI
                      </span>
                    </div>
                    <div className="absolute bottom-16 left-4 px-4 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-sm">
                      <span className="text-[9px] text-yellow-400 font-medium flex items-center gap-1.5">
                        ⚠️ Free API • 3-4 queries/day • Paid upgrade → unlimited
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                {selectedProject.title}
                <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${selectedProject.color} bg-opacity-20 text-white border border-[#1a2236]`}>
                  Featured
                </span>
              </h2>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {selectedProject.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-full bg-[#1a2236] text-xs font-medium text-[#8aaac8] border border-[#1a2236] hover:border-[#4a7aaa] transition-all duration-300 hover:text-white hover:shadow-lg hover:shadow-[#4a7aaa]/10`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-3 mb-6">
                {selectedProject.description.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#1a2236]/30 border border-[#1a2236]/30 hover:border-[#4a7aaa]/20 transition-all duration-300">
                    <span className="text-[#4a7aaa] mt-0.5 text-lg">◆</span>
                    <p className="text-[#8aaac8]/80 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-5 border-t border-[#1a2236]">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#1a2a4a] to-[#2a4a7a] text-white font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-[#1a2a4a]/50 hover:-translate-y-1"
                >
                  <span className="text-lg">🚀</span>
                  Live Demo
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1a2236] border border-[#2a3a5a] text-[#8aaac8] font-medium transition-all duration-300 hover:border-[#4a7aaa] hover:text-white hover:shadow-2xl hover:shadow-[#1a2236]/50 hover:-translate-y-1"
                >
                  <span className="text-lg">📁</span>
                  GitHub Repo
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;