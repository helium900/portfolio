import React from 'react';
import { Code, Palette, MonitorSmartphone } from 'lucide-react';

function About({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 reveal-element">
          <h2 className={`font-poppins font-bold text-3xl md:text-4xl tracking-tight mb-4 transition-colors duration-500 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>What I Do</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className={`max-w-xl mx-auto text-base sm:text-lg transition-colors duration-500 font-medium ${
            isDark ? 'text-slate-200' : 'text-slate-900'
          }`}>
            Here is a look at my primary services and focus areas as a Full Stack Web Developer.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service Card 1: Web Development */}
          <div className={`rounded-2xl p-8 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-2 card-glow reveal-element ${
            isDark ? 'glass-card-dark' : 'glass-card-light'
          }`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
              isDark ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border border-indigo-100 text-indigo-600'
            }`}>
              <Code className="w-6 h-6" />
            </div>
            <h3 className={`font-poppins font-semibold text-xl mb-4 transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>Web Development</h3>
            <p className={`text-sm leading-relaxed transition-colors duration-500 font-medium ${
              isDark ? 'text-slate-200' : 'text-slate-900'
            }`}>
              Building responsive and scalable server-rendered or single-page applications. Designing secure backends, RESTful APIs, and optimizing query performance using industry standard architectures.
            </p>
          </div>

          {/* Service Card 2: UI/UX Design */}
          <div className={`rounded-2xl p-8 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-2 card-glow reveal-element ${
            isDark ? 'glass-card-dark' : 'glass-card-light'
          }`} style={{ transitionDelay: '150ms' }}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
              isDark ? 'bg-purple-500/10 border border-purple-500/20 text-purple-400' : 'bg-purple-50 border border-purple-100 text-purple-600'
            }`}>
              <Palette className="w-6 h-6" />
            </div>
            <h3 className={`font-poppins font-semibold text-xl mb-4 transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>UI/UX Design</h3>
            <p className={`text-sm leading-relaxed transition-colors duration-500 font-medium ${
              isDark ? 'text-slate-200' : 'text-slate-900'
            }`}>
              Creating intuitive interfaces and user experiences. Focusing on minimalist design aesthetics, premium glassmorphism, responsive hierarchies, clear layouts, and elegant interactive feedback.
            </p>
          </div>

          {/* Service Card 3: Responsive Websites */}
          <div className={`rounded-2xl p-8 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-2 card-glow reveal-element ${
            isDark ? 'glass-card-dark' : 'glass-card-light'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
              isDark ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border border-emerald-100 text-emerald-600'
            }`}>
              <MonitorSmartphone className="w-6 h-6" />
            </div>
            <h3 className={`font-poppins font-semibold text-xl mb-4 transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>Responsive Websites</h3>
            <p className={`text-sm leading-relaxed transition-colors duration-500 font-medium ${
              isDark ? 'text-slate-200' : 'text-slate-900'
            }`}>
              Developing mobile-first code architectures that adjust seamlessly across desktop, tablet, and mobile screens. Ensuring fluid transitions and optimized performance speeds across devices.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
