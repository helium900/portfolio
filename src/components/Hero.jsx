import React from 'react';
import { Download, ArrowRight, Mail } from 'lucide-react';

function Hero({ theme }) {
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetPosition = contactSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offsetPosition = projectsSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isDark = theme === 'dark';

  return (
    <section id="overview" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 md:px-12 bg-transparent relative overflow-hidden">
      {/* Ambient decorative background glows */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Hero Info (Left Column) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left reveal-element">
          <span className={`px-3 py-1 text-xs font-semibold tracking-wider border rounded-full font-poppins mb-6 transition-all duration-500 ${
            isDark 
              ? 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' 
              : 'text-indigo-600 bg-indigo-50/80 border-indigo-200'
          }`}>
            Available for Projects & Internships
          </span>
          <h1 className={`font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none mb-4 transition-colors duration-500 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Crafting <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Digital</span> Masterpieces
          </h1>
          <h2 className={`font-poppins font-semibold text-lg sm:text-xl lg:text-2xl mb-6 transition-colors duration-500 ${
            isDark ? 'text-slate-300' : 'text-slate-900'
          }`}>
            Frontend Specialist & Web Developer
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed max-w-xl mb-8 transition-colors duration-500 font-medium ${
            isDark ? 'text-slate-200' : 'text-slate-900'
          }`}>
            Leveraging modern design paradigms and solid software architecture to build intuitive, high-fidelity web experiences that drive results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {/* Download CV Button */}
            <a 
              href="/resume.pdf" 
              download="Divyashish_Negi_Resume.pdf"
              className={`px-7 py-3.5 font-poppins text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg btn-glow ${
                isDark 
                  ? 'bg-white text-slate-950 hover:bg-slate-100 shadow-black/10' 
                  : 'bg-indigo-600 border border-indigo-500 text-white hover:bg-indigo-500 shadow-slate-100/30'
              }`}
            >
              Download CV <Download className="w-4 h-4" />
            </a>
            {/* Get in touch smooth scroll button */}
            <a 
              href="#contact" 
              onClick={handleContactClick} 
              className={`px-7 py-3.5 border font-poppins text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-900 border-slate-800 text-white hover:bg-slate-800' 
                  : 'bg-white/80 border border-slate-200 text-slate-900 hover:bg-white'
              }`}
            >
              Get In Touch <Mail className="w-4 h-4" />
            </a>
          </div>


        </div>

        {/* Hero Illustration (Right Column) */}
        <div className="lg:col-span-5 flex justify-center relative reveal-element" style={{ transitionDelay: '200ms' }}>
          {/* Glow background behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          {/* Floating image */}
          <div className={`relative w-full max-w-[400px] aspect-square rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 animate-float ${
            isDark ? 'shadow-indigo-950/40 border border-white/5' : 'shadow-slate-300/40 border border-slate-200'
          }`}>
            <img src="/hero-illustration.png" alt="Full Stack Coding Illustration" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
