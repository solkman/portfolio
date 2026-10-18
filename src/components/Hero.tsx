import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
    { label: "GitHub", href: "#", icon: FaGithub },
    { label: "LinkedIn", href: "#", icon: FaLinkedin },
    { label: "Email", href: "#", icon: FaEnvelope },
];

function Hero() {

    return (
        <section className="max-w-7xl mx-auto px-10 py-16 min-h-svh">

            <div className=" flex flex-col md:flex-row-reverse gap-12">
                <div className="flex-1 min-w-0 flex flex-col gap-6 ">
                    <p className="self-start inline-flex px-2 py-2 bg-chip text-sm rounded-full items-center gap-2 font-mono">
                        <span className=" w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        Open to opportunities in Denmark
                    </p>
                    <h1 className=" text-5xl md:text-7xl lg:text-8xl uppercase font-display font-black leading-[0.9] tracking-tighter text-heading">Software <br/> <span className="text-ghost">engineer</span></h1>
                    <p className="text-2xl font-semibold text-muted">I'm <span className="inline-block text-accent font-black animate-pulse">Quido</span>, [a short line on what you build].</p>
                    <p className="text-lg leading-relaxed text-muted max-w-xl">[Two or three sentences in your own words: MSc from SDU, what you enjoy, what you want next.]</p>
                    <div className="flex flex-wrap gap-3">
                        <a href="#" className="px-6 py-3 bg-accent border border-accent rounded-lg text-on-accent font-semibold capitalize hover:bg-accent-hover transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">see my projects </a>
                        <a href="#" className="px-6 py-3 bg-surface border border-line rounded-lg text-heading font-semibold capitalize hover:border-accent transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Say hello</a>
                    </div>
                </div>
                <div className="md:w-1/3 shrink-0 bg-surface border border-line rounded-3xl  flex flex-col items-center text-center gap-4 p-8">
                    <div className="bg-accent rounded-2xl w-full flex-1 min-h-64"></div>
                    <h2 className="font-display font-black text-3xl text-heading">Quido Huba </h2>
                    <p className="text-muted">[One short line: who you are in a sentence.] </p>
                    <div className="flex gap-3">
                        {socialLinks.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noreferrer" : undefined}
                                className="flex size-11 items-center justify-center rounded-xl bg-chip text-accent transition duration-300 hover:bg-accent hover:text-on-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                            >
                                <Icon className="size-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero