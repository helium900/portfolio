import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 40);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; 
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
     
      const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isDark = theme === 'dark';

 
  const baseHeaderClasses = "fixed top-0 left-0 w-full z-50 transition-all duration-300 h-20 flex items-center justify-between px-6 md:px-12";
  let headerClasses = baseHeaderClasses;

  if (scrolled) {
    if (isDark) {
      headerClasses += " glass-nav text-white border-b border-white/5 shadow-md";
    } else {
      headerClasses += " glass-nav-light text-slate-900 border-b border-slate-200/50 shadow-md";
    }
  } else {
    headerClasses += isDark ? " text-white" : " text-slate-900";
  }

 
  const logoClasses = `font-poppins font-bold text-xl md:text-2xl tracking-tight transition-colors ${
    isDark ? "text-white hover:text-indigo-400" : "text-slate-900 hover:text-indigo-600"
  }`;

  const navLinkClasses = `transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300 drop-shadow-sm ${
    isDark ? "text-slate-100 hover:text-white" : "text-slate-900 hover:text-indigo-700"
  }`;

  const mobileBtnColor = isDark ? "text-white hover:text-indigo-400" : "text-slate-900 hover:text-indigo-600";

  return (
    <header id="navbar" className={headerClasses}>
      
      <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className={logoClasses}>
        Divyashish Negi
      </a>

      <nav className="hidden md:flex items-center space-x-8 font-poppins text-base font-semibold tracking-wide">
        <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className={navLinkClasses}>About</a>
        <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')} className={navLinkClasses}>Skills</a>
        <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className={navLinkClasses}>Projects</a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className={navLinkClasses}>Contact</a>
        
      
        <button 
          onClick={toggleTheme}
          className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
            isDark
              ? 'border-white/10 hover:bg-white/5 text-amber-400 hover:text-amber-300'
              : 'border-slate-200 hover:bg-slate-100 text-indigo-600 hover:text-indigo-700'
          }`}
          aria-label="Toggle dark/light theme"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </nav>

     
      <div className="flex items-center gap-3 md:hidden">
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-xl border transition-all duration-300 ${
            isDark
              ? 'border-white/10 text-amber-400 hover:text-amber-300'
              : 'border-slate-200 text-indigo-600 hover:text-indigo-700'
          }`}
          aria-label="Toggle dark/light theme"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <button 
          onClick={() => setIsOpen(true)} 
          className={`p-2 focus:outline-none transition-colors ${mobileBtnColor}`} 
          aria-label="Open navigation menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

     
      <div className={`fixed inset-0 top-0 left-0 w-full h-screen backdrop-blur-lg z-45 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } ${
        isDark ? 'bg-[#030712]/98 text-slate-200' : 'bg-white/98 text-slate-800'
      }`}>
        <button 
          onClick={() => setIsOpen(false)} 
          className={`absolute top-6 right-6 p-2 focus:outline-none transition-colors ${
            isDark ? 'text-white hover:text-indigo-400' : 'text-slate-900 hover:text-indigo-600'
          }`} 
          aria-label="Close menu"
        >
          <X className="w-8 h-8" />
        </button>
        <nav className="flex flex-col space-y-8 font-poppins text-2xl font-semibold text-center">
          <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className={isDark ? "text-slate-100 hover:text-white transition-colors" : "text-slate-900 hover:text-indigo-700 transition-colors"}>About</a>
          <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')} className={isDark ? "text-slate-100 hover:text-white transition-colors" : "text-slate-900 hover:text-indigo-700 transition-colors"}>Skills</a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className={isDark ? "text-slate-100 hover:text-white transition-colors" : "text-slate-900 hover:text-indigo-700 transition-colors"}>Projects</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className={isDark ? "text-slate-100 hover:text-white transition-colors" : "text-slate-900 hover:text-indigo-700 transition-colors"}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
