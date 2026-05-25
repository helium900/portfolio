import React, { useState, useEffect } from 'react';
import { Server } from 'lucide-react';

const skillsData = {
  frontend: [
    { name: "React", percent: "90%" },
    { name: "Tailwind CSS", percent: "90%" },
    { name: "HTML5 & CSS3", percent: "90%" },
    { name: "JavaScript", percent: "85%" }
  ],
  backend: [],
  tools: [
    { name: "Git / GitHub", percent: "80%" },
    { name: "VS Code", percent: "95%" }
  ]
};

function Skills({ theme }) {
  const [activeTab, setActiveTab] = useState('all');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);

      // Animate progress bar widths of the newly active tab's items
      const bars = document.querySelectorAll('.skill-progress');
      bars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent;
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [activeTab]);

  // Aggregate all skills if "all" is selected, otherwise filter by category
  const activeSkills = activeTab === 'all'
    ? [...skillsData.frontend, ...skillsData.backend, ...skillsData.tools]
    : skillsData[activeTab] || [];

  const tabOptions = ['all', ...Object.keys(skillsData)];
  const isDark = theme === 'dark';

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-transparent transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16 reveal-element">
          <h2 className={`font-poppins font-bold text-3xl md:text-4xl tracking-tight mb-4 transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'
            }`}>My Skills</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className={`max-w-xl mx-auto text-base sm:text-lg transition-colors duration-500 font-medium ${isDark ? 'text-slate-200' : 'text-slate-900'
            }`}>
            Here are the core technical tools and technologies that I use to bring ideas to life.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-12 reveal-element">
          <div className={`flex flex-wrap justify-center p-1.5 rounded-2xl border backdrop-blur-md gap-1 transition-all duration-500 max-w-full ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-slate-200/50 border-slate-300/40'
            }`}>
            {tabOptions.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold font-poppins capitalize transition-all duration-300 cursor-pointer ${activeTab === tab
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/15"
                    : isDark
                      ? "text-slate-400 hover:text-white hover:bg-white/5"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-300/30"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[220px] items-center">
          {activeSkills.length > 0 ? (
            activeSkills.map((skill, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-1 ${isDark
                    ? 'bg-slate-900/40 border border-white/5 shadow-lg shadow-black/10'
                    : 'bg-white border border-slate-100 shadow-md hover:shadow-lg'
                  } ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className={`font-poppins font-semibold transition-colors duration-500 ${isDark ? 'text-slate-200' : 'text-slate-800'
                    }`}>{skill.name}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full font-poppins transition-all duration-500 ${isDark ? 'text-indigo-400 bg-indigo-500/10' : 'text-indigo-600 bg-indigo-50'
                    }`}>{skill.percent}</span>
                </div>
                <div className={`w-full h-2 rounded-full overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-800' : 'bg-slate-100'
                  }`}>
                  <div
                    className="skill-progress bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '0%' }}
                    data-percent={skill.percent}
                  ></div>
                </div>
              </div>
            ))
          ) : (
            /* Backend / Empty State */
            <div className={`col-span-full max-w-lg mx-auto w-full rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-500 transform ${isDark
                ? 'bg-slate-900/45 border border-white/5 shadow-2xl shadow-black/20'
                : 'bg-white/70 border border-slate-200/80 shadow-xl shadow-slate-100/50'
              } ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-all duration-500 ${isDark ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400' : 'bg-indigo-55 border border-indigo-100 text-indigo-600'
                }`}>
                <Server className="w-8 h-8 animate-pulse" />
              </div>
              <h3 className={`font-poppins font-bold text-xl mb-3 transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'
                }`}>Backend Stack Coming Soon</h3>
              <p className={`text-sm leading-relaxed max-w-sm mb-6 transition-colors duration-500 font-medium ${isDark ? 'text-slate-200' : 'text-slate-900'
                }`}>
                Currently focusing on mastering backend services!
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Node.js", "Express", "PostgreSQL", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs font-semibold px-3 py-1 rounded-full font-poppins transition-all duration-500 ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default Skills;
