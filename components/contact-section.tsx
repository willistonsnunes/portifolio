import { Mail } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-24" aria-label="Contato">
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">
        Contato
      </h2>
      <p className="max-w-md leading-relaxed text-muted-foreground text-pretty">
        Quer conversar sobre um projeto de dados, uma vaga ou apenas trocar ideia?
        Estou sempre aberto a boas conversas.
      </p>
      <a
        href={profile.socials.email}
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Mail className="size-4" />
        {profile.email}
      </a>
      <p className="mt-10 font-mono text-xs text-muted-foreground">
        {profile.location} · Desenvolvido com Next.js e Tailwind CSS
      </p>
    </section>
  )
}
