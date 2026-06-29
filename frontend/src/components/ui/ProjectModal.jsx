import { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <article className="relative w-full max-w-3xl bg-white dark:bg-card-dark rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors z-10"
          onClick={onClose}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero image with title overlay */}
        <div className="h-56 md:h-72 overflow-hidden relative">
          <img alt={project.title} className="w-full h-full object-cover" src={project.image} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-primary text-white px-2.5 py-1 rounded">
                {project.category}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white px-2.5 py-1 rounded">
                {project.year}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Blog body */}
        <div className="max-h-[55vh] overflow-y-auto">
          <div className="p-8">
            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2 pb-6 mb-6 border-b border-slate-100 dark:border-slate-800">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Blog narrative */}
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">
              How I Built It
            </p>
            <div className="space-y-5">
              {project.story.map((paragraph, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-8 mt-8 border-t border-slate-100 dark:border-slate-800">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold text-sm hover:bg-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-icons-outlined text-xl">rocket_launch</span>
                  Live Demo
                </a>
              )}
              <a
                href={project.githubUrl}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-icons-outlined text-xl">code</span>
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectModal;
