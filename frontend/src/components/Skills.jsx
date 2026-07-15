import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      id: 1,
      title: 'Programming Languages',
      icon: '💻',
      color: 'from-blue-400 to-cyan-400',
      skills: ['C++ (DSA)', 'JavaScript (ES6+)', 'TypeScript', 'Python', 'Java (Basic)']
    },
    {
      id: 2,
      title: 'Frontend Development',
      icon: '🎨',
      color: 'from-purple-400 to-pink-400',
      skills: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Tailwind CSS', 'Responsive Design']
    },
    {
      id: 3,
      title: 'Backend Development',
      icon: '⚙️',
      color: 'from-green-400 to-emerald-400',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'OAuth', 'WebSockets']
    },
    {
      id: 4,
      title: 'Database',
      icon: '🗄️',
      color: 'from-orange-400 to-yellow-400',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Database Design', 'Query Optimization']
    },
    {
      id: 5,
      title: 'AI & Machine Learning',
      icon: '🧠',
      color: 'from-pink-400 to-rose-400',
      skills: ['Deep Learning', 'Generative AI', 'LLMs (GPT, Gemini)', 'Neural Networks', 'AI Integration']
    },
    {
      id: 6,
      title: 'Tools & Platforms',
      icon: '🛠️',
      color: 'from-indigo-400 to-purple-400',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'MongoDB Compass', 'Pinecone', 'Neo4j']
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
      id="skills" 
      ref={sectionRef} 
      className="min-h-screen py-20 bg-[#0a0e1a] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-40 right-40 w-60 h-60 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#1a2236] to-[#1a2a4a] border border-[#2a3a5a] shadow-xl shadow-[#1a2236]/30">
            <span className="w-2 h-2 bg-[#4a7aaa] rounded-full animate-ping"></span>
            <span className="text-[10px] font-semibold text-[#4a7aaa] tracking-[0.2em] uppercase">
              Tech Stack
            </span>
            <span className="w-2 h-2 bg-[#4a7aaa] rounded-full animate-ping"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 mt-4">
            My <span className="bg-gradient-to-r from-[#4a7aaa] via-[#6aaadd] to-[#8aaac8] bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-[#8aaac8]/50 text-sm max-w-2xl mx-auto">
            Languages, frameworks, databases, AI, and tools I work with
          </p>
        </div>

        {/* Skills Grid - 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={`transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="group relative bg-gradient-to-br from-[#0d1424] to-[#0a0e1a] rounded-2xl p-5 border border-[#1a2236]/50 hover:border-[#4a7aaa]/40 transition-all duration-400 hover:shadow-2xl hover:shadow-[#1a2236]/40 hover:-translate-y-1">
                
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>

                {/* Header */}
                <div className="relative flex items-center gap-3 mb-4 pb-3 border-b border-[#1a2236]/50">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-10 flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className={`text-base font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.title}
                    </h3>
                    <p className="text-[9px] text-[#6a8aaa] tracking-wider uppercase">
                      {category.skills.length} Skills
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="relative flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-xl bg-[#1a2236]/40 text-xs font-medium text-[#8aaac8] border border-[#1a2236]/30 hover:border-[#4a7aaa]/50 transition-all duration-300 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#4a7aaa]/10 cursor-default ${
                        hoveredSkill === `${category.id}-${idx}` ? 'border-[#4a7aaa]/50 text-white scale-105 shadow-lg shadow-[#4a7aaa]/10' : ''
                      }`}
                      onMouseEnter={() => setHoveredSkill(`${category.id}-${idx}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decorative Line */}
                <div className={`mt-4 h-0.5 bg-gradient-to-r ${category.color} transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:w-full w-0`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* All Skills - Tag Cloud */}
        <div className={`mt-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '700ms' }}>
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white">
              Everything I <span className="bg-gradient-to-r from-[#4a7aaa] to-[#6aaadd] bg-clip-text text-transparent">Use</span>
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#4a7aaa] to-[#6aaadd] mx-auto rounded-full mt-2"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {[
              // Languages
              'C++', 'JavaScript', 'TypeScript', 'Python', 'Java',
              // Frontend
              'HTML5', 'CSS3', 'React.js', 'Next.js', 'Tailwind CSS',
              // Backend
              'Node.js', 'Express.js', 'REST APIs', 'JWT', 'OAuth', 'WebSockets',
              // Database
              'MongoDB', 'MySQL', 'PostgreSQL', 'Database Design',
              // AI/ML
              'Deep Learning', 'Generative AI', 'LLMs', 'Neural Networks',
              // Tools
              'Git', 'GitHub', 'VS Code', 'Postman', 'MongoDB Compass', 'Pinecone', 'Neo4j'
            ].map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-xl bg-[#1a2236]/30 text-xs font-medium text-[#8aaac8] border border-[#1a2236]/20 hover:border-[#4a7aaa]/40 hover:text-white hover:bg-[#1a2236]/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4a7aaa]/10 cursor-default ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${750 + index * 15}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className={`mt-12 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#1a2236]/30 to-[#1a2a4a]/30 border border-[#2a3a5a] backdrop-blur-sm hover:border-[#4a7aaa]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#1a2236]/30">
            <span className="text-[#4a7aaa] animate-pulse text-lg">✦</span>
            <span className="text-[10px] text-[#8aaac8] font-medium tracking-wide">Building with passion, learning every day</span>
            <span className="text-[#4a7aaa] animate-pulse delay-500 text-lg">✦</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;