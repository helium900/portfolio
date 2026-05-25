import React from 'react';

function Footer({ theme }) {
  const handleHomeClick = (e) => {
    e.preventDefault();
    const homeSection = document.getElementById('home');
    if (homeSection) {
      const offsetPosition = homeSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isDark = theme === 'dark';

  return (
    <footer className={`py-12 bg-transparent border-t text-center transition-colors duration-500 relative z-10 font-medium ${
      isDark ? 'border-white/5 text-slate-300' : 'border-slate-200/50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center gap-6">
        
        <a 
          href="#home" 
          onClick={handleHomeClick}
          className={`font-poppins font-bold text-lg tracking-tight transition-colors ${
            isDark ? 'text-white hover:text-indigo-400' : 'text-slate-800 hover:text-indigo-650'
          }`}
        >
          Divyashish Negi
        </a>

      </div>

 
      <div className={`max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t text-xs transition-colors font-medium ${
        isDark ? 'border-white/5 text-slate-500' : 'border-slate-200/50 text-slate-800'
      }`}>
        &copy; {new Date().getFullYear()} Divyashish Negi. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
