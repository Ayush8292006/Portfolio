import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState('');
  const [showCopyPopup, setShowCopyPopup] = useState(false);

 const API_URL = import.meta.env.VITE_API_URL;
 console.log("API URL:", API_URL);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log('📤 Sending to:', API_URL);
    console.log('📤 Data:', formData);

    try {
      const response = await axios.post(
        `${API_URL}/contact`,
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log('✅ Response:', response.data);

      if (response.data.success) {
        setPopupType('success');
        setShowPopup(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      }
    } catch (error) {
      console.error('❌ Error:', error);
      console.error('❌ Response:', error.response);
      setPopupType('error');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('aksrivastav0825@gmail.com');
    setShowCopyPopup(true);
    setTimeout(() => setShowCopyPopup(false), 2000);
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-[#0a0e1a] relative overflow-hidden flex items-center">
      
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-40 right-40 w-60 h-60 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#1a2236] to-[#1a2a4a] border border-[#2a3a5a] mb-4 shadow-xl shadow-[#1a2236]/30 hover:shadow-[#4a7aaa]/20 transition-all duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4a7aaa] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4a7aaa]"></span>
            </span>
            <span className="text-[10px] font-semibold text-[#4a7aaa] tracking-[0.2em] uppercase">
              Let's Connect
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4a7aaa] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4a7aaa]"></span>
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact <span className="bg-gradient-to-r from-[#4a7aaa] via-[#6aaadd] to-[#8aaac8] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-[#4a7aaa]"></div>
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-[#4a7aaa] shadow-lg shadow-[#4a7aaa]/50 animate-pulse"></div>
              <div className="absolute -inset-2 rounded-full bg-[#4a7aaa]/20 animate-ping"></div>
            </div>
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-[#4a7aaa]"></div>
          </div>
          <p className="text-[#8aaac8]/50 text-sm mt-4 max-w-2xl mx-auto">
            Have a question or want to collaborate? Let's talk!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          
          <div className="md:col-span-2 space-y-4">
            <div className="bg-gradient-to-br from-[#0d1424] to-[#0a0e1a] rounded-2xl p-6 border border-[#1a2236]/50 hover:border-[#4a7aaa]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#1a2236]/30 group">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-2xl group-hover:scale-110 transition-transform">💬</span> 
                Let's Talk
              </h3>
              <p className="text-[#8aaac8]/60 text-sm leading-relaxed">
                I'm always open to new opportunities, collaborations, or just a friendly chat about tech and innovation.
              </p>
              
              <div className="mt-5 space-y-3">
                <button
                  onClick={copyEmail}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#1a2236]/40 border border-[#1a2236]/30 hover:border-[#4a7aaa]/40 transition-all duration-300 group hover:bg-[#1a2236]/60 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#1a2a4a] to-[#2a4a7a] flex items-center justify-center text-lg group-hover:scale-110 transition-transform shadow-lg shadow-[#1a2a4a]/30">
                    📧
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-[#6a8aaa] uppercase tracking-wider">Email (Click to Copy)</p>
                    <p className="text-sm text-[#8aaac8] font-medium">aksrivastav0825@gmail.com</p>
                  </div>
                </button>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1a2236]/40 border border-[#1a2236]/30 hover:border-[#4a7aaa]/40 transition-all duration-300 group hover:bg-[#1a2236]/60">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#1a2a4a] to-[#2a4a7a] flex items-center justify-center text-lg group-hover:scale-110 transition-transform shadow-lg shadow-[#1a2a4a]/30">
                    📍
                  </div>
                  <div>
                    <p className="text-[10px] text-[#6a8aaa] uppercase tracking-wider">Location</p>
                    <p className="text-sm text-[#8aaac8] font-medium">India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1a2236]/40 border border-[#1a2236]/30 hover:border-[#4a7aaa]/40 transition-all duration-300 group hover:bg-[#1a2236]/60">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#1a2a4a] to-[#2a4a7a] flex items-center justify-center text-lg group-hover:scale-110 transition-transform shadow-lg shadow-[#1a2a4a]/30">
                    ⏰
                  </div>
                  <div>
                    <p className="text-[10px] text-[#6a8aaa] uppercase tracking-wider">Response Time</p>
                    <p className="text-sm text-[#8aaac8] font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0d1424] to-[#0a0e1a] rounded-2xl p-6 border border-[#1a2236]/50 hover:border-[#4a7aaa]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#1a2236]/30">
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-lg">🔗</span> Connect with me
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.linkedin.com/in/ayush-kumar-35499a32b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#1a2236]/40 border border-[#1a2236]/30 hover:border-[#0a66c2]/50 transition-all duration-300 hover:bg-[#1a2a4a] group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform text-[#0a66c2]">💼</span>
                  <span className="text-xs text-[#8aaac8] group-hover:text-white transition-colors">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Ayush8292006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#1a2236]/40 border border-[#1a2236]/30 hover:border-[#6aaadd]/50 transition-all duration-300 hover:bg-[#1a2a4a] group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform text-[#6aaadd]">🐙</span>
                  <span className="text-xs text-[#8aaac8] group-hover:text-white transition-colors">GitHub</span>
                </a>

                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#1a2236]/40 border border-[#1a2236]/30 hover:border-[#ea4335]/50 transition-all duration-300 hover:bg-[#1a2a4a] group cursor-pointer"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform text-[#ea4335]">📧</span>
                  <span className="text-xs text-[#8aaac8] group-hover:text-white transition-colors">Copy Email</span>
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#0d1424] to-[#0a0e1a] rounded-2xl p-6 border border-[#1a2236]/50 hover:border-[#4a7aaa]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#1a2236]/30">
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-medium text-[#8aaac8] uppercase tracking-wider mb-1.5">
                    👤 Full Name <span className="text-[#4a7aaa]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1a2236]/60 border border-[#1a2236]/50 text-white placeholder-[#6a8aaa]/60 focus:outline-none focus:border-[#4a7aaa] transition-all duration-300 focus:shadow-lg focus:shadow-[#4a7aaa]/10"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-medium text-[#8aaac8] uppercase tracking-wider mb-1.5">
                    📧 Email Address <span className="text-[#4a7aaa]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1a2236]/60 border border-[#1a2236]/50 text-white placeholder-[#6a8aaa]/60 focus:outline-none focus:border-[#4a7aaa] transition-all duration-300 focus:shadow-lg focus:shadow-[#4a7aaa]/10"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-medium text-[#8aaac8] uppercase tracking-wider mb-1.5">
                    📝 Subject <span className="text-[#4a7aaa]">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl bg-[#1a2236]/60 border border-[#1a2236]/50 text-white placeholder-[#6a8aaa]/60 focus:outline-none focus:border-[#4a7aaa] transition-all duration-300 focus:shadow-lg focus:shadow-[#4a7aaa]/10"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-medium text-[#8aaac8] uppercase tracking-wider mb-1.5">
                    💬 Message <span className="text-[#4a7aaa]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1a2236]/60 border border-[#1a2236]/50 text-white placeholder-[#6a8aaa]/60 focus:outline-none focus:border-[#4a7aaa] transition-all duration-300 resize-none focus:shadow-lg focus:shadow-[#4a7aaa]/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1a2a4a] to-[#2a4a7a] text-white font-medium text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-[#1a2a4a]/50 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <>
                        <span>🚀</span>
                        Send Message
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#2a4a7a] to-[#4a7aaa] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showPopup && popupType === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e1a]/80 backdrop-blur-md animate-fadeIn">
          <div className="relative bg-gradient-to-br from-[#0d1424] to-[#0a0e1a] rounded-3xl max-w-md w-full p-8 border border-green-500/30 shadow-2xl shadow-green-500/20 animate-scaleIn overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-2xl animate-pulse"></div>
            <div className="relative flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center animate-bounce-slow">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl shadow-green-500/50">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-emerald-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-green-300 rounded-full animate-ping delay-700"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mt-6 mb-2">
                Thank You! 🙏
              </h3>
              <p className="text-[#8aaac8] text-sm leading-relaxed">
                Your message has been sent successfully!<br />
                <span className="text-green-400 font-medium">I'll get back to you within 24 hours.</span>
              </p>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {showPopup && popupType === 'error' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e1a]/80 backdrop-blur-md animate-fadeIn">
          <div className="relative bg-gradient-to-br from-[#0d1424] to-[#0a0e1a] rounded-3xl max-w-md w-full p-8 border border-red-500/30 shadow-2xl shadow-red-500/20 animate-scaleIn overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 blur-2xl animate-pulse"></div>
            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center animate-bounce-slow">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500/30 to-pink-500/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-red-500/50">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mt-6 mb-2">
                Oops! 😅
              </h3>
              <p className="text-[#8aaac8] text-sm leading-relaxed">
                Something went wrong.<br />
                <span className="text-red-400 font-medium">Please try again later.</span>
              </p>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {showCopyPopup && (
        <div className="fixed bottom-8 right-8 z-50 bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 rounded-xl px-5 py-3 shadow-2xl animate-slideIn">
          <p className="text-blue-300 text-sm font-medium">📧 Email copied to clipboard!</p>
        </div>
      )}
    </section>
  );
};

export default Contact;