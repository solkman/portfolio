export type Project = {
    title: string;
    description: string;
    role: string;
    impact?: string;
    tags: string[];
    image?: string;
    imageAlt?: string;
};

type ProjectCardProps = Project & { index: number };

function ProjectCard({ title, description, role, impact, tags, image, imageAlt, index }: ProjectCardProps) {
    const number = String(index + 1).padStart(2, "0");

    return (
        <article className="flex flex-col gap-10 border-t border-line py-16 first:border-t-0 first:pt-0 md:flex-row md:items-center md:gap-16 md:even:flex-row-reverse">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-chip md:flex-1">
                {image && <img src={image} alt={imageAlt ?? title} className="size-full object-cover" />}
            </div>

            <div className="flex flex-col gap-4 md:flex-1">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Project {number}</span>
                <h3 className="font-display text-3xl font-bold tracking-tight text-heading">{title}</h3>
                <p className="leading-relaxed text-muted">{description}</p>

                <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-sm">
                    <dt className="font-mono text-accent">Role:</dt>
                    <dd className="text-muted">{role}</dd>
                    {impact && (
                        <>
                            <dt className="font-mono text-accent">Impact:</dt>
                            <dd className="leading-relaxed text-muted">{impact}</dd>
                        </>
                    )}
                </dl>

                <ul className="flex flex-wrap gap-2 pt-2">
                    {tags.map((tag) => (
                        <li key={tag} className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-heading">
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default ProjectCard;