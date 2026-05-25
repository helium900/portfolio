import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Welcome from './components/Welcome.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import SkyBackground from './components/SkyBackground.jsx';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    const pref = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return pref ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    
    const revealElements = document.querySelectorAll('.reveal-element');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.05, 
      rootMargin: '0px 0px -20px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    
    const progressBars = document.querySelectorAll('.skill-progress');
    const progressObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const percent = bar.getAttribute('data-percent');
          bar.style.width = percent;
          observer.unobserve(bar); 
        }
      });
    }, {
      threshold: 0.1
    });

    progressBars.forEach(bar => progressObserver.observe(bar));

   
    return () => {
      revealObserver.disconnect();
      progressObserver.disconnect();
    };
  }, [theme]);

  return (
    <div className={`font-sans antialiased min-h-screen relative transition-colors duration-500 overflow-x-hidden ${
      theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
    }`}>
      <SkyBackground theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Welcome theme={theme} />
        <Hero theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
}

export default App;

