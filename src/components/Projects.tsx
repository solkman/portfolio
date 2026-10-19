import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
    {
        title: "Folkaet",
        description: "[What the product is and what you built on it.]",
        role: "[Your role]",
        impact: "[What you achieved: a concrete result or the part you owned.]",
        tags: ["React", "TypeScript", "Python"],
    },
    {
        title: "vtipnejsivyhrava.sk",
        description: "A joke site with a cookie-based rating system, built to learn Laravel.",
        role: "Solo developer",
        tags: ["Laravel", "PHP", "Tailwind"],
    },
    {
        title: "Alfa IT",
        description: "[What the company does and what you worked on.]",
        role: "[Your role]",
        impact: "[A concrete result or responsibility.]",
        tags: ["C#", ".NET Core", "SQL"],
    },
];

function Projects() {
    return (
        <section id="projects" className="max-w-7xl mx-auto px-10 py-24">
            <div className="mb-16 flex flex-col gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">What I've built</span>
                <h2 className="font-display text-4xl font-bold tracking-tight text-heading md:text-5xl">
                    Selected projects I've worked on
                </h2>
                <p className="max-w-xl leading-relaxed text-muted">
                    [One or two sentences introducing your work.]
                </p>
            </div>

            <div>
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} {...project} index={index} />
                ))}
            </div>
        </section>
    );
}

export default Projects;