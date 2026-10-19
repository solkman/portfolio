type SkillGroup = {
    category: string;
    skills: string[];
};

const skillGroups: SkillGroup[] = [
    { category: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS", "HTML & CSS"] },
    { category: "Backend", skills: ["Python", "C# / .NET Core", "PHP / Laravel", "Java", "SQL"] },
    { category: "Data & ML", skills: ["Pandas", "NumPy", "SciPy", "scikit-learn", "Matplotlib"] },
    { category: "Tools", skills: ["Git", "Docker", "Linux / Plesk"] },
];

function Skills() {
    return (
        <section id="skills" className="max-w-7xl mx-auto px-10 py-24">
            <div className="mb-14 flex flex-col gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">What I work with</span>
                <h2 className="font-display text-4xl font-bold tracking-tight text-heading md:text-5xl">
                    Skills and tools
                </h2>
                <p className="max-w-xl leading-relaxed text-muted">
                    [One sentence: what you are strongest at and what you are learning right now.]
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {skillGroups.map((group, index) => (
                    <div
                        key={group.category}
                        className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-8"
                    >
                        <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
                            <h3 className="font-display text-2xl font-bold tracking-tight text-heading">
                                {group.category}
                            </h3>
                        </div>

                        <ul className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="rounded-md border border-line bg-bg px-3 py-1.5 font-mono text-sm text-heading"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <p className="mt-8 text-muted">
                <span className="font-mono text-accent">Also used:</span> C, Flutter (university project)
            </p>
        </section>
    );
}

export default Skills;