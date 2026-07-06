"use client"

import { useEffect, useState } from "react"
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/brand-icons"
import { profile } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const sections = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "github", label: "GitHub" },
  { id: "relatorios", label: "Relatórios" },
  { id: "contato", label: "Contato" },
]

export function Sidebar() {
  const [active, setActive] = useState("sobre")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
          {profile.name}
        </h1>
        <h2 className="mt-3 text-lg font-medium text-primary">{profile.role}</h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground text-pretty">
          {profile.tagline}
        </p>

        {/* Navegação com destaque da seção ativa */}
        <nav className="mt-16 hidden lg:block" aria-label="Navegação da seção">
          <ul className="flex flex-col gap-4">
            {sections.map(({ id, label }) => {
              const isActive = active === id
              return (
                <li key={id}>
                  <a href={`#${id}`} className="group flex items-center gap-4 py-1">
                    <span
                      className={cn(
                        "h-px transition-all",
                        isActive
                          ? "w-16 bg-foreground"
                          : "w-8 bg-muted-foreground/40 group-hover:w-16 group-hover:bg-foreground",
                      )}
                    />
                    <span
                      className={cn(
                        "text-xs font-semibold uppercase tracking-widest transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <ul className="mt-8 flex items-center gap-5" aria-label="Redes sociais">
        <li>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <span className="sr-only">GitHub</span>
            <GithubIcon className="size-5" />
          </a>
        </li>
        <li>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon className="size-5" />
          </a>
        </li>
        <li>
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <span className="sr-only">WhatsApp</span>
            <WhatsappIcon className="size-5" />
          </a>
        </li>
        <li>
          <a
            href={profile.socials.email}
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <span className="sr-only">Email</span>
            <Mail className="size-5" />
          </a>
        </li>
      </ul>
    </header>
  )
}
