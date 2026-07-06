import { Star } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { profile, repos } from "@/lib/portfolio-data"

export function GithubSection() {
  return (
    <section id="github" className="scroll-mt-24" aria-label="GitHub">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          GitHub
        </h2>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
        >
          <GithubIcon className="size-4" />
          Ver perfil
        </a>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {repos.map((repo) => (
          <li key={repo.name}>
            <a
              href={repo.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col gap-3 rounded-lg border border-border bg-card/40 p-4 transition-colors hover:border-primary/50 hover:bg-secondary/40"
            >
              <div className="flex items-center gap-2">
                <GithubIcon className="size-4 text-muted-foreground" />
                <h3 className="font-mono text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                  {repo.name}
                </h3>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                {repo.description}
              </p>
              <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-accent" />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="size-3.5" />
                  {repo.stars}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
