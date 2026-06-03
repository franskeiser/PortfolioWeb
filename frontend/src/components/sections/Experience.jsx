const Experience = () => {
    return (
        <section className="mb-24">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-12">
                Professional Experience
            </h3>
            <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="w-32 flex-shrink-0 pt-1">
                        <span className="font-bold text-slate-900 dark:text-white">Senior SWE</span>
                        <p className="text-sm text-slate-500">2021 — Present</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-1">TechFlow Systems</h4>
                        <p className="text-slate-500 mb-4 font-medium italic">
                            Leading the Core Platform Team
                        </p>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2">
                                <span className="material-icons-outlined text-primary text-sm mt-1">
                                    check_circle
                                </span>
                                Architected a micro-frontend architecture using Module Federation,
                                reducing build times by 40%.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-icons-outlined text-primary text-sm mt-1">
                                    check_circle
                                </span>
                                Mentored a team of 5 junior developers and implemented standardized code
                                review processes.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="w-32 flex-shrink-0 pt-1">
                        <span className="font-bold text-slate-900 dark:text-white">Full Stack Dev</span>
                        <p className="text-sm text-slate-500">2018 — 2021</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-1">Lumina Creative</h4>
                        <p className="text-slate-500 mb-4 font-medium italic">Early Stage Engineer</p>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2">
                                <span className="material-icons-outlined text-primary text-sm mt-1">
                                    check_circle
                                </span>
                                Developed and maintained the company's primary e-commerce engine serving
                                50k+ monthly users.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-icons-outlined text-primary text-sm mt-1">
                                    check_circle
                                </span>
                                Improved lighthouse performance scores from 65 to 98 across all core pages.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
