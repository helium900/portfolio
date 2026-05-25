import React from 'react';
import { Github } from './Icons.jsx';

const projectsList = [
  {
    title: "Chat-Application",
    image: "\Screenshot 2026-05-22 235140.png",
    technologies: ["React", "TailwindCSS", "Appwrite Realtime"],
    description: "Built a real-time chat app  featuring authentication, messaging, image sharing, and live updates.",
    githubLink: "https://github.com/helium900/chat-application",
    delay: "0ms"
  },
  {
    title: "my-todo",
    image: "\Screenshot 2026-05-22 213928.png",
    technologies: ["React", "Tailwind CSS", "Recharts"],
    description: "A Todo featuring  CRUD operations, task toggling, and a dynamic stats dashboard.",
    githubLink: "https://github.com/helium900/my-todo",
    delay: "150ms"
  },
  {
    title: "Currency-Converter",
    image: "Screenshot 2026-05-22 215039.png",
    technologies: ["React", "Tailwind CSS", "REST API",],
    description: "A currency converter that fetch real-time exchange rates for accurate currency conversion.",
    githubLink: "https://github.com/helium900/Currency-Converter",
    delay: "300ms"
  },
  {
    title: "Portfolio",
    image: "Screenshot 2026-05-22 214059.png",
    technologies: ["React"],
    description: "Portfolio website to showcase my skills.",
    githubLink: "https://github.com/helium900/Currency-Converter",
    delay: "350ms"
  }
];

function Projects({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-transparent relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16 reveal-element">
          <h2 className={`font-poppins font-bold text-3xl md:text-4xl tracking-tight mb-4 transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'
            }`}>Featured Projects</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className={`max-w-xl mx-auto text-base sm:text-lg transition-colors duration-500 font-medium ${isDark ? 'text-slate-200' : 'text-slate-900'
            }`}>
            A selection of web applications I have built, showcasing full-stack design and API integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col h-full reveal-element ${isDark
                ? 'bg-slate-900/45 border-white/5 shadow-lg shadow-black/10 hover:shadow-black/20 hover:border-indigo-500/30'
                : 'bg-slate-50/80 border-slate-200/60 shadow-sm hover:shadow-xl hover:bg-slate-50'
                }`}
              style={{ transitionDelay: project.delay }}
            >
              {/* Thumbnail Wrapper */}
              <div className="relative overflow-hidden aspect-[3/2] bg-slate-200">
                <img
                  src={project.image}
                  alt={`${project.title} project thumbnail`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/20 transition-colors"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className={`font-poppins font-semibold text-lg mb-2 transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'
                    }`}>{project.title}</h3>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md transition-all duration-500 ${idx === 0
                          ? isDark ? "bg-indigo-500/15 text-indigo-400 border border-indigo-500/20" : "bg-indigo-100 text-indigo-700"
                          : idx === 1
                            ? isDark ? "bg-purple-500/15 text-purple-400 border border-purple-500/20" : "bg-purple-100 text-purple-700"
                            : isDark ? "bg-slate-800 text-slate-300 border border-slate-700" : "bg-slate-200 text-slate-700"
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 transition-colors duration-500 font-medium ${isDark ? 'text-slate-200' : 'text-slate-900'
                    }`}>
                    {project.description}
                  </p>
                </div>

                {/* Action Button */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 text-white rounded-lg flex items-center justify-center gap-2 transition-colors text-xs font-semibold font-poppins cursor-pointer ${isDark ? 'bg-slate-850 hover:bg-indigo-600' : 'bg-slate-900 hover:bg-indigo-600'
                    }`}
                >
                  <Github className="w-4 h-4" /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
