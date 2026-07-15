import React, { useEffect, useRef, useState } from 'react';

// Custom SVG Icons
const Icons = {
  User: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  GraduationCap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/>
    </svg>
  ),
  Code: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  Award: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  ),
  Brain: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M9 3a3 3 0 0 1 6 0v12a3 3 0 0 1-6 0V3z"/>
      <path d="M12 3v18"/>
      <path d="M9 12h6"/>
    </svg>
  ),
  TrendingUp: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Rocket: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  MapPin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Calendar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Sparkles: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M12 3L14 8L19 8L15 12L16.5 17L12 14.5L7.5 17L9 12L5 8L10 8L12 3Z"/>
      <path d="M19 21L20 19L22 19L20.5 17L21 15L19 16L17 15L17.5 17L16 19L18 19L19 21Z"/>
    </svg>
  ),
  Zap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const counterRefs = useRef([]);

  const stats = [
    { 
      icon: <Icons.Code />, 
      value: 250, 
      label: 'DSA Problems', 
      suffix: '+', 
      color: 'from-yellow-500 to-orange-500' 
    },
    { 
      icon: <Icons.Award />, 
      value: 5, 
      label: 'Certifications', 
      suffix: '+', 
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      icon: <Icons.Users />, 
      value: 12, 
      label: 'Projects', 
      suffix: '+', 
      color: 'from-purple-500 to-pink-500' 
    },
    { 
      icon: <Icons.Sparkles />, 
      value: 3, 
      label: 'Gen AI Projects', 
      suffix: '+', 
      color: 'from-green-500 to-emerald-500' 
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      counterRefs.current.forEach((counter, index) => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
          step++;
          current += increment;
          if (step >= steps) {
            current = target;
            clearInterval(timer);
          }
          counter.textContent = Math.floor(current) + (stats[index].suffix || '');
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 bg-[#0a0e1a] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-40 right-40 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#4a7aaa]/15 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1a2236] to-[#1a2a4a] border border-[#2a3a5a] mb-4 shadow-xl shadow-[#1a2236]/30">
            <span className="w-1.5 h-1.5 bg-[#4a7aaa] rounded-full animate-pulse"></span>
            <span className="text-[10px] font-semibold text-[#4a7aaa] tracking-[0.2em] uppercase">
              Who I Am
            </span>
            <Icons.Sparkles className="w-3 h-3 text-[#4a7aaa] animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-[#4a7aaa] via-[#6aaadd] to-[#8aaac8] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#4a7aaa]"></div>
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-[#4a7aaa] shadow-lg shadow-[#4a7aaa]/50 animate-pulse"></div>
              <div className="absolute -inset-2 rounded-full bg-[#4a7aaa]/20 animate-ping"></div>
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#4a7aaa]"></div>
          </div>
          <p className="text-[#8aaac8]/50 text-sm mt-4 max-w-2xl mx-auto font-light tracking-wide">
            Full Stack Developer | AI/ML Enthusiast | Problem Solver
          </p>
        </div>

        {/* Profile Card */}
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-br from-[#0d1424] via-[#0a0e1a] to-[#0d1424] rounded-3xl p-8 border border-[#1a2236]/50 hover:border-[#4a7aaa]/30 transition-all duration-700 shadow-2xl shadow-[#0a0e1a] hover:shadow-[#1a2a4a]/40 group ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            
            <div className="relative">
              {/* Header with Avatar */}
              <div className="flex items-start gap-6 flex-wrap">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1a2a4a] to-[#2a4a7a] flex items-center justify-center text-4xl font-bold text-white shadow-2xl shadow-[#1a2a4a]/40 group-hover:shadow-[#4a7aaa]/40 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    A
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#4a7aaa] to-[#6aaadd] rounded-2xl opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-500"></div>
                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-1.5 border-2 border-[#0a0e1a] shadow-lg shadow-green-500/30">
                    <span className="block w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                  </div>
                </div>
                
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3 flex-wrap">
                    Ayush
                    <span className="text-[10px] font-medium text-[#6a8aaa] bg-[#1a2236] px-3 py-1 rounded-full border border-[#2a3a5a]">
                      🎓 3rd Year
                    </span>
                    <span className="text-[10px] font-medium text-[#4a7aaa] bg-[#1a2236] px-3 py-1 rounded-full border border-[#4a7aaa]/30">
                      <Icons.Zap className="w-3 h-3 inline mr-1" />
                      Active Learner
                    </span>
                  </h3>
                  <p className="text-[#4a7aaa] font-medium text-sm">B.Tech CSE (AI) • Full Stack Developer</p>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1a2236]/40 border border-[#1a2236]/20">
                      <Icons.MapPin className="text-[#4a7aaa] w-3 h-3" />
                      <span className="text-xs text-[#8aaac8]">India</span>
                    </div>
                    
                    
                    <span className="w-0.5 h-4 bg-[#2a3a5a]"></span>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-green-500/10 border border-green-500/20">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-xs text-green-400 font-medium">Available for Work</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== REALISTIC & AUTHENTIC CONTENT ===== */}
              <div className="mt-6 pt-6 border-t border-[#1a2236]">
                <div className="text-[#8aaac8]/90 text-sm leading-relaxed space-y-4">
                  
                  {/* Introduction - Simple & Real */}
                  <div className="bg-gradient-to-r from-[#1a2236]/30 to-[#1a2236]/10 p-4 rounded-xl border border-[#1a2236]/30 hover:border-[#4a7aaa]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#4a7aaa]/5">
                    <p className="text-[#8aaac8]">
                      I'm <span className="text-white font-semibold">Ayush</span>, a 
                      <span className="text-white font-semibold"> Full Stack Developer</span> and 
                      <span className="text-white font-semibold"> AI/ML enthusiast</span> currently pursuing my B.Tech in CSE with AI specialization. 
                      I love building things that people actually use — from web apps to AI-powered tools.
                    </p>
                  </div>

                  {/* Tech Stack - Honest */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-[#1a2236]/20 to-transparent border-l-4 border-[#4a7aaa] hover:border-l-[6px] transition-all duration-300 hover:bg-[#1a2236]/10">
                    <p>
                      On the technical side, I work with the <span className="text-white font-semibold">MERN stack</span> 
                      (MongoDB, Express, React, Node.js) and <span className="text-white font-semibold">MySQL</span> for relational databases. 
                      I focus on writing <span className="text-white font-semibold">clean, maintainable code</span> that performs well — 
                      nothing fancy, just solid engineering.
                    </p>
                  </div>

                  {/* DSA - Honest */}
                  <div className="p-4 rounded-xl bg-gradient-to-l from-[#1a2236]/20 to-transparent border-r-4 border-[#6aaadd] hover:border-r-[6px] transition-all duration-300 hover:bg-[#1a2236]/10">
                    <p>
                      I've solved <span className="text-white font-semibold">250+ DSA problems</span> on LeetCode, 
                      which has honestly helped me think more clearly about problem-solving and write better code. 
                      I enjoy breaking down complex problems into <span className="text-white font-semibold">simple, logical solutions</span>.
                    </p>
                  </div>

                  {/* AI/ML - Real & Grounded */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#1a2236]/30 to-[#1a2236]/5 border border-[#4a7aaa]/20 hover:border-[#4a7aaa]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#4a7aaa]/10">
                    <p className="text-[#8aaac8]">
                      Lately, I've been exploring <span className="text-white font-semibold">Generative AI</span> and 
                      <span className="text-white font-semibold"> Deep Learning</span> — not to chase hype, but because I genuinely find it 
                      fascinating how AI can augment what we build. I'm currently working on 
                      <span className="text-white font-semibold"> AI-integrated projects</span> that combine my full-stack skills 
                      with modern AI capabilities.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-2.5 py-1 rounded-full bg-[#1a2236] text-[10px] text-[#6aaadd] border border-[#2a3a5a]">🧠 Deep Learning</span>
                      <span className="px-2.5 py-1 rounded-full bg-[#1a2236] text-[10px] text-[#6aaadd] border border-[#2a3a5a]">⚡ Generative AI</span>
                      <span className="px-2.5 py-1 rounded-full bg-[#1a2236] text-[10px] text-[#6aaadd] border border-[#2a3a5a]">🤖 LLMs</span>
                      <span className="px-2.5 py-1 rounded-full bg-[#1a2236] text-[10px] text-[#6aaadd] border border-[#2a3a5a]">🔥 AI Integration</span>
                    </div>
                  </div>

                  {/* What I'm Working On - Real */}
                  <div className="p-4 rounded-xl bg-gradient-to-tr from-[#1a2236]/20 to-[#1a2236]/5 border border-[#1a2236]/30 hover:border-[#4a7aaa]/20 transition-all duration-300">
                    <p className="text-[#8aaac8] text-sm font-medium mb-2">
                      Currently focused on:
                    </p>
                    <ul className="space-y-2.5">
                      <li className="text-sm text-[#8aaac8] flex items-start gap-3 group hover:translate-x-1 transition-all duration-300">
                        <span className="text-[#4a7aaa] mt-0.5 group-hover:text-[#6aaadd] transition-colors">✦</span>
                        <span><span className="text-white font-medium">Building AI-powered applications</span> — practical projects that solve real problems</span>
                      </li>
                      <li className="text-sm text-[#8aaac8] flex items-start gap-3 group hover:translate-x-1 transition-all duration-300">
                        <span className="text-[#4a7aaa] mt-0.5 group-hover:text-[#6aaadd] transition-colors">✦</span>
                        <span><span className="text-white font-medium">Deepening my understanding of LLMs</span> — how they work, and how to use them effectively</span>
                      </li>
                      <li className="text-sm text-[#8aaac8] flex items-start gap-3 group hover:translate-x-1 transition-all duration-300">
                        <span className="text-[#4a7aaa] mt-0.5 group-hover:text-[#6aaadd] transition-colors">✦</span>
                        <span><span className="text-white font-medium">Looking for internship opportunities</span> — I'm excited to learn from real-world engineering</span>
                      </li>
                    </ul>
                  </div>

                  {/* Closing - Genuine */}
                  <div className="text-[#6a8aaa] italic text-center py-3 px-6 bg-gradient-to-r from-[#1a2236]/20 to-[#1a2236]/20 rounded-full border border-[#1a2236]/30 hover:border-[#4a7aaa]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#4a7aaa]/5">
                    <p className="text-sm">
                      <span className="text-[#8aaac8]">I'm just someone who enjoys building things, solving problems, and learning something new every day.</span>
                    </p>
                  </div>
                </div>
              </div>

             

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#1a2236]">
                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1a2236] to-[#1a2a4a] text-[#8aaac8] text-[10px] border border-[#2a3a5a] hover:border-[#4a7aaa] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#4a7aaa]/10 transition-all duration-300 cursor-default">
                  🚀 Full Stack
                </span>
                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1a2236] to-[#1a2a4a] text-[#8aaac8] text-[10px] border border-[#2a3a5a] hover:border-[#4a7aaa] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#4a7aaa]/10 transition-all duration-300 cursor-default">
                  🤖 Generative AI
                </span>
                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1a2236] to-[#1a2a4a] text-[#8aaac8] text-[10px] border border-[#2a3a5a] hover:border-[#4a7aaa] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#4a7aaa]/10 transition-all duration-300 cursor-default">
                  🧠 Deep Learning
                </span>
                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1a2236] to-[#1a2a4a] text-[#8aaac8] text-[10px] border border-[#2a3a5a] hover:border-[#4a7aaa] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#4a7aaa]/10 transition-all duration-300 cursor-default">
                  💻 250+ DSA
                </span>
                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1a2236] to-[#1a2a4a] text-[#8aaac8] text-[10px] border border-[#2a3a5a] hover:border-[#4a7aaa] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#4a7aaa]/10 transition-all duration-300 cursor-default">
                  ⚡ MERN Stack
                </span>
                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1a2236] to-[#1a2a4a] text-[#8aaac8] text-[10px] border border-[#2a3a5a] hover:border-[#4a7aaa] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#4a7aaa]/10 transition-all duration-300 cursor-default">
                  🎯 Problem Solver
                </span>
                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1a2236] to-[#1a2a4a] text-[#8aaac8] text-[10px] border border-[#2a3a5a] hover:border-[#4a7aaa] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#4a7aaa]/10 transition-all duration-300 cursor-default">
                  📚 AI/ML
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;