const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row gap-12 items-start mb-24">
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Available for new opportunities
                </div>
                <h1 className="text-5xl font-bold mb-6 tracking-tight">Franz Calumpit</h1>
                <h2 className="text-2xl font-semibold text-slate-600 dark:text-slate-400 mb-6">
                    Computer Science Undergraduate Student
                </h2>
                <div className="flex gap-4">
                    <a
                        className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        href="#contact"
                    >
                        Get in touch
                    </a>
                    <a
                        className="border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 px-6 py-3 rounded-lg font-medium transition-colors"
                        href="./public/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Resume
                    </a>
                </div>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
                <div className="absolute inset-0 bg-primary rounded-2xl rotate-6 opacity-20"></div>
                <img
                    alt="Profile"
                    className="w-full h-full object-cover rounded-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"
                    src="./src\assets\profile.jpg"
                />
            </div>
        </section>
    );
};

export default Hero;
