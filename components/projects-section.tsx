import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/portfolio-data"

export function ProjectsSection() {
  return (
    <section id="projetos" className="scroll-mt-24" aria-label="Projetos">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground">
        Projetos
      </h2>
      <ul className="flex flex-col gap-3">
        {projects.map((project) => (
          <li key={project.title}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col gap-3 rounded-lg border border-transparent p-4 transition-colors hover:border-border hover:bg-secondary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-semibold text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {project.period}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {project.metric && (
                  <span className="rounded-full bg-primary/15 px-2.5 py-1 font-mono text-xs font-medium text-primary">
                    {project.metric}
                  </span>
                )}
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
