import React, { useEffect, useRef, useState } from 'react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const educationData = [
    {
      id: 1,
      institution: 'G.L. Bajaj Institute of Technology and Management',
      location: 'Greater Noida, UP',
      degree: 'B.Tech in Computer Science & Engineering (AI)',
      year: '2024 - 2028',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30',
      bgColor: 'from-blue-500/10 to-cyan-500/5',
      description: 'Currently pursuing B.Tech with specialization in Artificial Intelligence — building a strong foundation in both software engineering and AI.',
      achievements: [ '👨‍💻 Technical Member']
    },
    {
      id: 2,
      institution: 'B.D College',
      location: 'Patna, Bihar',
      degree: 'Intermediate (12th) — Science Stream',
      year: '2023',
      icon: '📚',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30',
      bgColor: 'from-purple-500/10 to-pink-500/5',
      description: 'Completed Higher Secondary Education with Science stream.',
      achievements: ['📊 81.2%', '🔬 Science Stream', '🏅 Bihar Board']
    },
    {
      id: 3,
      institution: 'S.R. Public School',
      location: 'Patna, Bihar',
      degree: 'Matriculation (10th)',
      year: '2021',
      icon: '🏫',
      color: 'from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-500/30',
      bgColor: 'from-emerald-500/10 to-teal-500/5',
      description: 'Completed Secondary Education',
      achievements: ['']
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

  return (
    <section 
      id="education" 
      ref={sectionRef} 
      className="min-h-screen py-20 bg-[#0a0e1a] relative overflow-hidden flex items-center"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-40 right-40 w-60 h-60 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute bottom-40 left-60 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-2500"></div>
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-10 left-10 text-[#4a7aaa]/5 animate-float-slow text-6xl">📚</div>
      <div className="absolute bottom-10 right-10 text-[#6aaadd]/5 animate-float-medium text-6xl">🎓</div>
      <div className="absolute top-1/2 left-5 text-[#8aaac8]/5 animate-float-fast text-4xl">✨</div>
      <div className="absolute top-1/3 right-5 text-[#4a7aaa]/5 animate-float-medium text-4xl">⭐</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#1a2236] to-[#1a2a4a] border border-[#2a3a5a] mb-5 shadow-xl shadow-[#1a2236]/30 hover:shadow-[#4a7aaa]/20 transition-all duration-500 hover:scale-105">
            <span className="w-2 h-2 bg-[#4a7aaa] rounded-full animate-ping"></span>
            <span className="text-xs font-semibold text-[#4a7aaa] tracking-[0.2em] uppercase">
              My Journey
            </span>
            <span className="w-2 h-2 bg-[#4a7aaa] rounded-full animate-ping"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Education <span className="bg-gradient-to-r from-[#4a7aaa] via-[#6aaadd] to-[#8aaac8] bg-clip-text text-transparent animate-gradient">Timeline</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-[#4a7aaa]"></div>
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-[#4a7aaa] shadow-2xl shadow-[#4a7aaa]/50 animate-pulse"></div>
              <div className="absolute -inset-3 rounded-full bg-[#4a7aaa]/20 animate-ping"></div>
            </div>
            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-[#4a7aaa]"></div>
          </div>
          <p className="text-[#8aaac8]/50 text-sm mt-5 max-w-2xl mx-auto font-light tracking-wide">
            Every step of my academic journey has shaped me into who I am today
          </p>
        </div>

        {/* Timeline - 3D Cards */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4a7aaa]/30 via-[#6aaadd]/30 to-[#4a7aaa]/30 transform md:-translate-x-1/2">
            <div className={`absolute top-0 left-0 w-0.5 bg-gradient-to-b from-[#4a7aaa] via-[#6aaadd] to-[#4a7aaa] transition-all duration-[2500ms] ${
              isVisible ? 'h-full' : 'h-0'
            }`}></div>
          </div>

          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative mb-12 md:mb-16 transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 ' + (index % 2 === 0 ? '-translate-x-8' : 'translate-x-8')
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`flex flex-col md:flex-row items-start gap-4 md:gap-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 top-1 z-10 transform -translate-x-1/2">
                  <div className={`relative w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-to-r ${edu.color} shadow-2xl shadow-[#4a7aaa]/40 flex items-center justify-center text-xs md:text-sm font-bold text-white transition-all duration-500 hover:scale-125 ${
                    hoveredCard === edu.id ? 'scale-125 shadow-2xl shadow-[#4a7aaa]/60' : ''
                  }`}>
                    {index + 1}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${edu.color} opacity-0 hover:opacity-40 transition-opacity duration-500 blur-xl`}></div>
                  </div>
                </div>

                {/* Card */}
                <div className={`w-full md:w-[calc(50%-2.5rem)] ml-[50px] md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div 
                    className={`relative bg-gradient-to-br from-[#0d1424] to-[#0a0e1a] rounded-2xl p-6 border ${edu.borderColor} transition-all duration-500 hover:shadow-2xl hover:shadow-[#1a2236]/50 group cursor-pointer ${
                      hoveredCard === edu.id ? 'scale-[1.02] shadow-2xl shadow-[#1a2236]/50 border-[#4a7aaa]/50' : 'scale-100'
                    }`}
                    style={{
                      transform: hoveredCard === edu.id ? 'rotateY(3deg) rotateX(2deg)' : 'rotateY(0) rotateX(0)',
                      transformStyle: 'preserve-3d',
                      perspective: '800px'
                    }}
                    onMouseEnter={() => setHoveredCard(edu.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* 3D Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>

                    {/* Year Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${edu.color} bg-opacity-20 border ${edu.borderColor} mb-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      <span className="text-[10px] font-bold text-white tracking-wider">{edu.year}</span>
                    </div>

                    {/* Institution */}
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-3xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">{edu.icon}</span>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#6aaadd] transition-colors duration-300">
                        {edu.institution}
                      </h3>
                    </div>

                    {/* Degree */}
                    <p className="text-[#4a7aaa] font-medium text-sm mb-2">
                      {edu.degree}
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-xs text-[#6a8aaa] mb-3">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-[#4a7aaa]">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <span>{edu.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-[#8aaac8]/75 text-sm leading-relaxed mb-3">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 rounded-full bg-[#1a2236]/50 border border-[#1a2236] text-[10px] text-[#8aaac8] hover:border-[#4a7aaa] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4a7aaa]/10"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>

                    {/* Decorative Line */}
                    <div className={`mt-4 w-16 h-0.5 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-24`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className={`mt-16 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-[#1a2236]/30 to-[#1a2a4a]/30 border border-[#2a3a5a] backdrop-blur-sm hover:border-[#4a7aaa]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#1a2236]/30 group">
            <span className="text-[#4a7aaa] animate-pulse text-lg group-hover:rotate-12 transition-transform duration-300">✦</span>
            <span className="text-xs text-[#8aaac8] font-medium tracking-wide">Every step counts — learning, growing, building</span>
            <span className="text-[#4a7aaa] animate-pulse delay-500 text-lg group-hover:-rotate-12 transition-transform duration-300">✦</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;