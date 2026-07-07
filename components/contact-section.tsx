import { Mail } from "lucide-react"
import { WhatsappIcon } from "@/components/brand-icons"
import { profile } from "@/lib/portfolio-data"

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-24 p-2" aria-label="Contato">
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">
        Contato
      </h2>

      <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
        Quer conversar sobre um projeto de dados, uma vaga ou apenas trocar ideia?
        Estou sempre aberto a boas conversas.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={profile.socials.email}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="size-4" />
          E-mail
        </a>

        <a
          href={profile.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-green-500 px-5 py-3 text-sm font-medium text-white transition-opacity hover:bg-green-600"
        >
          <WhatsappIcon className="size-4" />
          WhatsApp
        </a>
      </div>

      <p className="mt-10 font-mono text-xs text-muted-foreground">
        {profile.location}
      </p>
    </section>
  )
}