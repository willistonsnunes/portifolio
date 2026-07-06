import { ArrowUpRight, FileText } from "lucide-react"
import { reports } from "@/lib/portfolio-data"

export function ReportsSection() {
  return (
    <section id="relatorios" className="scroll-mt-24" aria-label="Relatórios">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground">
        Relatórios &amp; Artigos
      </h2>
      <ul className="flex flex-col divide-y divide-border">
        {reports.map((report) => (
          <li key={report.title}>
            <a
              href={report.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 py-5 transition-colors"
            >
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary/50 text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-accent">
                <FileText className="size-4" />
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-foreground transition-colors group-hover:text-accent">
                    {report.title}
                  </h3>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {report.description}
                </p>
                <div className="mt-2 flex items-center gap-3 font-mono text-xs text-muted-foreground">
                  <span className="text-accent">{report.tag}</span>
                  <span>{report.date}</span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
