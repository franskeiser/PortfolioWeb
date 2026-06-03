const Stats = () => {
    return (
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-12 border-y border-slate-200 dark:border-slate-800">
            <div>
                <p className="text-3xl font-bold mb-1">4+</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">
                    Years Learning
                </p>
            </div>
            <div>
                <p className="text-3xl font-bold mb-1">15+</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">
                    Projects Built
                </p>
            </div>
            <div>
                <p className="text-3xl font-bold mb-1">5+</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">
                    Technologies Explored
                </p>
            </div>
            <div>
                <p className="text-3xl font-bold mb-1">100%</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">
                    Curiosity & Growth
                </p>
            </div>
        </section>
    );
};

export default Stats;
