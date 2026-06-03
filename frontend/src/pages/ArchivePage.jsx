import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProjectModal from '../components/ui/ProjectModal';
import { ARCHIVE_PROJECTS } from '../data/projects';

const ArchivePage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Back link */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors font-medium"
          >
            <span className="material-icons-outlined text-sm">arrow_back</span>
            Back to Portfolio
          </Link>
        </div>

        {/* Page Header */}
        <section className="mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Project Archive
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl">
            A curated collection of explorations, technical experiments, and collaborations.
            Click any card to learn more about the project.
          </p>
        </section>

        {/* Project Grid */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ARCHIVE_PROJECTS.map((project) => (
              <button
                key={project.id}
                className="text-left flex items-center gap-6 p-6 bg-slate-50 dark:bg-card-dark rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:shadow-xl transition-all group relative"
                onClick={() => setSelectedProject(project)}
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={project.image}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-bold group-hover:text-primary transition-colors text-slate-900 dark:text-slate-100 truncate pr-2">
                      {project.title}
                    </h5>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex-shrink-0">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed line-clamp-2">
                    {project.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 text-slate-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <Footer />
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ArchivePage;
