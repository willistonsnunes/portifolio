import { profile, skills } from "@/lib/portfolio-data"

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-24" aria-label="Sobre">
      <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
        Sobre
      </h2>
      <div className="flex flex-col gap-4">
        {profile.about.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-muted-foreground text-pretty">
            {paragraph}
          </p>
        ))}
      </div>

      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tecnologias">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-accent"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
