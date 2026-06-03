import { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-card-dark rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-none">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header image */}
        <div className="h-48 md:h-64 overflow-hidden relative">
          <img
            alt={project.title}
            className="w-full h-full object-cover"
            src={project.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-6 left-8">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key features */}
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
            Key Features
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 list-none p-0 mb-8">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                <span className="material-icons-outlined text-primary text-lg">check_circle</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <a
              href={project.liveUrl}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold text-sm hover:bg-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-icons-outlined text-xl">rocket_launch</span>
              Live Demo
            </a>
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
    </div>
  );
};

export default ProjectModal;
