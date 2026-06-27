const categories = [
    {
        title: 'Languages',
        icon: 'code',
        skills: ['Java', 'C#', 'Python', 'JavaScript', 'PHP', 'SQL', 'HTML/CSS'],
    },
    {
        title: 'Frameworks & Tools',
        icon: 'widgets',
        skills: [
            'Spring Boot (JPA, Spring Security, JWT)',
            'ASP.NET Core MVC',
            'Entity Framework Core',
            '.NET MAUI / Blazor',
            'React',
            'Vite',
            'Tailwind CSS',
            'Unity 6',
        ],
    },
    {
        title: 'AI / ML',
        icon: 'psychology',
        skills: [
            'PyTorch',
            'Reinforcement Learning (Deep Q-Networks)',
            'Google Gemini API integration',
            'ONNX model inference',
            'A* pathfinding',
        ],
    },
    {
        title: 'Databases',
        icon: 'storage',
        skills: [
            'PostgreSQL',
            'SQL Server',
            'MySQL',
            'H2',
            'Relational design (ERD)',
            'REST APIs',
        ],
    },
    {
        title: 'Cloud & Tools',
        icon: 'cloud',
        skills: [
            'Supabase',
            'Vercel',
            'Git & GitHub',
            'Maven',
            'Apache PDFBox',
            'Agile',
            'Documentation',
        ],
    },
];

const TechStack = () => {
    return (
        <section className="mb-24">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-8">
                Technical Expertise
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
                {categories.map((category) => (
                    <div key={category.title}>
                        <h4 className="font-bold mb-4 flex items-center gap-2">
                            <span className="material-icons-outlined text-primary">
                                {category.icon}
                            </span>{' '}
                            {category.title}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm border border-slate-200 dark:border-slate-700"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
