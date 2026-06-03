const TechStack = () => {
    return (
        <section className="mb-24">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-8">
                Technical Expertise
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
                <div>
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                        <span className="material-icons-outlined text-primary">terminal</span>{' '}
                        Frontend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            React / Next.js
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            TypeScript
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            Tailwind CSS
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            Three.js
                        </span>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                        <span className="material-icons-outlined text-primary">dns</span> Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            Node.js / Go
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            PostgreSQL
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            Redis
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            GraphQL
                        </span>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                        <span className="material-icons-outlined text-primary">
                            settings_input_component
                        </span>{' '}
                        Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            Docker
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            Kubernetes
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            AWS / GCP
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            CI/CD
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
