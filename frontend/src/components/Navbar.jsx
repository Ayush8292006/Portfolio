import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase, Mail, User, BookOpen, Code, Mic, MicOff, Volume2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <User size={18} /> },
    { name: 'About', href: '#about', icon: <User size={18} /> },
    { name: 'Education', href: '#education', icon: <BookOpen size={18} /> },
    { name: 'Skills', href: '#skills', icon: <Code size={18} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={18} /> },
  ];

  const handleVoiceNavigation = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice recognition is not supported in your browser. Please use Chrome or Edge.');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    setIsListening(true);
    setTranscript('🎤 Listening...');

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase().trim();
      setTranscript(`🗣️ "${command}"`);
      
      const commandMap = {
        'home': '#home',
        'about': '#about',
        'education': '#education',
        'skill': '#skills',
        'skills': '#skills',
        'project': '#projects',
        'projects': '#projects',
        'contact': '#contact',
        'go to home': '#home',
        'go to about': '#about',
        'go to education': '#education',
        'go to skills': '#skills',
        'go to projects': '#projects',
        'go to contact': '#contact',
      };

      let targetHref = null;
      for (const [key, value] of Object.entries(commandMap)) {
        if (command.includes(key)) {
          targetHref = value;
          break;
        }
      }

      if (targetHref) {
        const linkName = targetHref.replace('#', '');
        setActiveLink(linkName);
        
        const element = document.querySelector(targetHref);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        
        const sectionName = targetHref.replace('#', '');
        speakText(`Navigating to ${sectionName}`);
      } else {
        speakText("Command not recognized. Please say home, about, education, skills, projects, or contact.");
      }
      
      setIsListening(false);
      setTimeout(() => setTranscript(''), 3000);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setTranscript('❌ Error: ' + event.error);
      setIsListening(false);
      setTimeout(() => setTranscript(''), 3000);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) return;

    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.lang = 'en-US';
    
    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const welcomeMessage = () => {
      setTimeout(() => {
        speakText("Welcome to Ayush's portfolio.");
      }, 1000);
    };
    welcomeMessage();
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
        ${scrolled 
          ? 'bg-[#0a0e1a]/90 backdrop-blur-2xl border-b border-[#1a2236]/50 shadow-2xl shadow-[#0a0e1a]/50' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Premium Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="flex items-center gap-3 group"
              onClick={() => setActiveLink('home')}
            >
              <div className="relative">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1a2a4a] to-[#2a4a7a] flex items-center justify-center shadow-xl shadow-[#1a2a4a]/30 group-hover:shadow-[#2a4a7a]/50 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <span className="text-white font-bold text-2xl tracking-tight">A</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#4a7aaa] to-[#6aaadd] rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                <div className="absolute -inset-2 bg-gradient-to-r from-[#4a7aaa]/20 to-[#6aaadd]/20 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-white tracking-tight group-hover:text-[#6aaadd] transition-colors duration-300">
                  AYUSH
                </span>
                <span className="block text-[10px] text-[#6a8aaa] font-medium tracking-[0.2em] uppercase group-hover:text-[#8aaac8] transition-colors duration-300">
                  Developer
                </span>
              </div>
            </a>
          </div>

          {/* Premium Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-[#0d1424]/40 backdrop-blur-sm rounded-2xl p-1 border border-[#1a2236]/50 shadow-lg shadow-[#0a0e1a]/30">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name.toLowerCase())}
                className={`
                  px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  flex items-center gap-2 relative group
                  ${activeLink === link.name.toLowerCase()
                    ? 'bg-gradient-to-r from-[#1a2a4a] to-[#2a4a7a] text-white shadow-lg shadow-[#1a2a4a]/50'
                    : 'text-[#8aaac8]/70 hover:text-white hover:bg-[#1a2236]/50'
                  }
                `}
              >
                <span className={`transition-colors duration-300 ${
                  activeLink === link.name.toLowerCase() 
                    ? 'text-[#6aaadd]' 
                    : 'text-[#4a6a8a] group-hover:text-[#6aaadd]'
                }`}>
                  {link.icon}
                </span>
                <span className="relative">
                  {link.name}
                  {activeLink === link.name.toLowerCase() && (
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-[#4a7aaa] to-[#6aaadd] rounded-full shadow-lg shadow-[#4a7aaa]/50" />
                  )}
                </span>
              </a>
            ))}
          </div>

          {/* Right Side - Premium */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Premium Voice Assistant */}
            <div className="relative">
              <button
                onClick={handleVoiceNavigation}
                className={`
                  p-2.5 rounded-xl transition-all duration-300 relative
                  ${isListening 
                    ? 'bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-400 ring-2 ring-red-500/50 shadow-lg shadow-red-500/20' 
                    : 'text-[#8aaac8] hover:text-white hover:bg-[#1a2236]/50 hover:shadow-lg hover:shadow-[#1a2236]/30'
                  }
                  ${isSpeaking ? 'ring-2 ring-blue-500/50 bg-blue-500/10' : ''}
                  hover:scale-110 active:scale-95
                `}
                aria-label="Voice assistant"
                title="Click to use voice commands"
              >
                {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                
                {/* Animated Status Dots */}
                {isListening && (
                  <span className="absolute -top-1 -right-1">
                    <span className="flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                    </span>
                  </span>
                )}
                {isSpeaking && (
                  <span className="absolute -top-1 -right-1">
                    <span className="flex h-3 w-3">
                      <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500" />
                    </span>
                  </span>
                )}
              </button>
            </div>

            {/* Voice Transcript - Premium */}
            {transcript && (
              <div className={`
                hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-xl
                bg-[#1a2236]/80 backdrop-blur-sm border border-[#2a3a5a]/50
                text-xs text-[#8aaac8] animate-slideIn
                shadow-lg shadow-[#0a0e1a]/30
                ${transcript.includes('✅') ? 'border-green-500/30 text-green-400' : ''}
                ${transcript.includes('❌') ? 'border-red-500/30 text-red-400' : ''}
              `}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4a7aaa] animate-pulse" />
                {transcript}
              </div>
            )}

            {/* Premium Contact Button */}
            <a
              href="#contact"
              onClick={() => setActiveLink('contact')}
              className={`
                hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl
                font-medium text-sm transition-all duration-300
                group relative overflow-hidden
                text-white bg-gradient-to-r from-[#1a2a4a] to-[#2a4a7a]
                hover:shadow-2xl hover:shadow-[#1a2a4a]/50
                transform hover:-translate-y-1 hover:scale-105
              `}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={18} />
                Contact
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#2a4a7a] to-[#4a7aaa] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute -inset-1 bg-gradient-to-r from-[#4a7aaa]/20 to-[#6aaadd]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </a>

            {/* Mobile Menu Button - Premium */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                md:hidden p-2.5 rounded-xl transition-all duration-300
                text-[#8aaac8] hover:text-white hover:bg-[#1a2236]/50
                hover:shadow-lg hover:shadow-[#1a2236]/30
                ${isOpen ? 'bg-[#1a2236]/50' : ''}
              `}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Premium Mobile Navigation */}
      <div
        className={`
          md:hidden fixed inset-x-0 top-16 sm:top-20
          bg-[#0a0e1a]/98 backdrop-blur-2xl border-b border-[#1a2236]/50
          shadow-2xl shadow-[#0a0e1a]/50
          transform transition-all duration-500 ease-in-out
          ${isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-6 pointer-events-none'
          }
        `}
      >
        <div className="px-4 py-6 space-y-1.5">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setIsOpen(false);
                setActiveLink(link.name.toLowerCase());
              }}
              className={`
                flex items-center gap-3 px-4 py-3.5 rounded-xl
                transition-all duration-300 transform hover:translate-x-2
                text-[#8aaac8] hover:text-white hover:bg-[#1a2236]/50
                animate-slideIn group
              `}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <span className={`text-[#4a7aaa] transition-colors duration-300 group-hover:text-[#6aaadd]`}>
                {link.icon}
              </span>
              <span className="font-medium">{link.name}</span>
              {activeLink === link.name.toLowerCase() && (
                <span className="ml-auto flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4a7aaa] to-[#6aaadd] animate-pulse" />
                  <span className="text-[10px] text-[#4a7aaa] font-medium">Active</span>
                </span>
              )}
            </a>
          ))}
          
          {/* Mobile Contact Button - Premium */}
          <a
            href="#contact"
            onClick={() => {
              setIsOpen(false);
              setActiveLink('contact');
            }}
            className={`
              flex items-center justify-center gap-2
              w-full mt-5 px-5 py-4 rounded-xl
              text-white font-medium text-sm
              bg-gradient-to-r from-[#1a2a4a] to-[#2a4a7a]
              hover:shadow-2xl hover:shadow-[#1a2a4a]/50
              transform hover:-translate-y-1
              transition-all duration-300
              group relative overflow-hidden
            `}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail size={18} />
              Contact Me
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#2a4a7a] to-[#4a7aaa] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>

          {/* Voice Status - Mobile Premium */}
          {transcript && (
            <div className={`
              mt-4 px-4 py-3 rounded-xl text-center text-sm
              bg-[#1a2236]/50 backdrop-blur-sm border border-[#2a3a5a]/50
              text-[#8aaac8] flex items-center justify-center gap-2
              ${transcript.includes('✅') ? 'border-green-500/30 text-green-400' : ''}
              ${transcript.includes('❌') ? 'border-red-500/30 text-red-400' : ''}
            `}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4a7aaa] animate-pulse" />
              {transcript}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;