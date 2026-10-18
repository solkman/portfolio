const stats = [
    { value: "3+", label: "Years of coding" },
    { value: "3", label: "Countries lived in" },
    { value: "2", label: "Companies worked at" },
];

function About() {
    return (
        <section id="about" className="max-w-7xl mx-auto px-10 py-24">
            <div className="flex flex-col md:flex-row-reverse gap-12">

                <div className="w-full flex flex-col gap-4">
                    <h2 className="mb-2 font-display text-5xl font-black uppercase leading-[0.9] tracking-tighter text-heading">
                        Who am <span className="text-ghost">I?</span>
                    </h2>
                    <p className="leading-relaxed text-muted">
                        Lorem ipsum dolor sit amet...
                    </p>
                    <p className="leading-relaxed text-muted">
                        Lorem ipsum dolor sit amet...
                    </p>
                    <p className="leading-relaxed text-muted">
                        Lorem ipsum dolor sit amet...
                    </p>

                    <dl className="mt-4 grid grid-cols-3 gap-6 border-t border-line pt-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col gap-1">
                                <dt className="order-2 font-mono text-sm text-muted">{stat.label}</dt>
                                <dd className="font-display text-4xl font-black text-accent">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="w-full flex flex-col gap-3">
                    <p className="font-mono text-base text-accent">Wait a minute, who are you?</p>
                    <div className="w-1/2 flex-1 min-h-80 rounded-2xl bg-ghost"></div>
                </div>

            </div>
        </section>
    );
}

export default About