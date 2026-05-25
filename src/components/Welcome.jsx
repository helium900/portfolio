import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

function Welcome({ theme }) {
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handleScrollDown = () => {
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
      const offsetPosition = overviewSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 md:px-12 bg-transparent relative overflow-hidden text-center"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      {/* Main Content Container (Glassmorphism and borders removed) */}
      <div 
        className={`max-w-4xl mx-auto w-full flex flex-col items-center justify-center relative z-10 transition-all duration-1000 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Heading */}
        <h1 className={`font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-6 transition-colors duration-500 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Divyashish Negi</span>
        </h1>

        {/* Description */}
        <p className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10 transition-colors duration-500 font-medium ${
          isDark ? 'text-slate-200' : 'text-slate-900'
        }`}>
          I am a passionate web developer. Specializing in front-end development, I build interfaces that are both beautiful and functional.
        </p>

        {/* Call to Action Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href="#projects" 
            onClick={handleProjectsClick}
            className={`group px-8 py-4 font-poppins text-sm md:text-base font-semibold rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg btn-glow cursor-pointer ${
              isDark 
                ? 'bg-white text-slate-950 hover:bg-slate-100 shadow-black/10' 
                : 'bg-indigo-600 border border-indigo-500 text-white hover:bg-indigo-500 shadow-slate-100/30'
            }`}
          >
            View My Work 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Premium Pulsing Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-10 select-none animate-bounce"
        onClick={handleScrollDown}
      >
        <span className={`text-xs tracking-widest font-poppins font-bold uppercase transition-colors duration-500 ${
          isDark ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-indigo-600'
        }`}>
          Scroll Down
        </span>
        <ChevronDown className={`w-8 h-8 transition-colors duration-500 ${
          isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
        }`} />
      </div>
    </section>
  );
}

export default Welcome;
