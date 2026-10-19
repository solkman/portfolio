function Contact() {
    return (
        <section id="contact" className="max-w-7xl mx-auto px-10 pt-24 pb-10">
            <div className="flex flex-col gap-10 rounded-3xl bg-accent p-10 text-on-accent md:p-16">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-accent/75">Get in touch</span>

                <h2 className="font-display text-6xl font-black uppercase leading-[0.88] tracking-tighter md:text-8xl lg:text-9xl">
                    Let's
                    <br />
                    <span className="text-on-accent/40">talk</span>
                </h2>

                <p className="max-w-xl text-lg leading-relaxed text-on-accent/85">
                    [One or two sentences: you are open to software engineering roles in Denmark.]
                </p>

                <a
                    href="mailto:YOUR_EMAIL"
                    className="self-start break-all font-display text-2xl font-bold tracking-tight underline decoration-on-accent/40 decoration-2 underline-offset-8 transition hover:decoration-on-accent md:text-4xl"
                >
                    YOUR_EMAIL
                </a>

                <div className="flex flex-wrap gap-3">
                    <a
                        href="https://github.com/solkman"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border-2 border-on-accent/45 px-5 py-3 font-semibold transition hover:border-on-accent"
                    >
                        GitHub
                    </a>
                    <a
                        href="YOUR_LINKEDIN_URL"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border-2 border-on-accent/45 px-5 py-3 font-semibold transition hover:border-on-accent"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="#"
                        className="rounded-lg border-2 border-on-accent bg-on-accent px-5 py-3 font-semibold text-accent transition hover:bg-transparent hover:text-on-accent"
                    >
                        My Resume
                    </a>
                </div>
            </div>

            <footer className="mt-8 flex flex-wrap justify-between gap-3 text-sm text-muted">
                <span>© {new Date().getFullYear()} Quido Huba</span>
                <span>Built with React and Tailwind CSS</span>
            </footer>
        </section>
    );
}

export default Contact;