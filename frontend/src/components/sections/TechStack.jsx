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
                            React
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            JavaScript
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            HTML5
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            CSS3
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            Tailwind CSS
                        </span>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                        <span className="material-icons-outlined text-primary">dns</span> Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            PHP
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            Python
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            C#
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            MySQL
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
                            Git / GitHub
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            Unity 6
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            Vercel
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            XAMPP
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            PyTorch
                        </span>
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700">
                            ONNX
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
