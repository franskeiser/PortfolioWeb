import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_PROJECTS } from '../../data/projects';
import ProjectModal from '../ui/ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="mb-24">
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">
                        Portfolio
                    </h3>
                    <h4 className="text-4xl font-bold">Featured Projects</h4>
                </div>
                <Link
                    to="/archive"
                    className="text-sm font-medium flex items-center gap-1 hover:text-primary transition-colors"
                >
                    View Archive <span className="material-icons-outlined text-sm">arrow_forward</span>
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {FEATURED_PROJECTS.map((project) => (
                    <div
                        key={project.id}
                        className="group relative bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                src={project.image}
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex gap-2 mb-4">
                                <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded">
                                    {project.category}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-1 rounded">
                                    {project.year}
                                </span>
                            </div>
                            <h5 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                                {project.shortDesc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-mono text-slate-500">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-4 flex items-center gap-1 text-xs text-slate-400 group-hover:text-primary transition-colors">
                                <span className="material-icons-outlined text-sm">open_in_new</span>
                                View details
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;
