import { Mail } from "lucide-react"
import { WhatsappIcon } from "@/components/brand-icons"
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
        className="mt-6 p-1 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Mail className="size-4" />
        E-mail
      </a>
      <a
        href={profile.socials.whatsapp}
        className="mt-6 p-1 inline-flex items-center gap-2 rounded-md bg-green-500 px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        <WhatsappIcon className="size-4" />
        WhatsApp
      </a>
      <p className="mt-10 font-mono text-xs text-muted-foreground">
        {profile.location}
      </p>
    </section>
  )
}
