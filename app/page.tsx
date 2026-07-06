import { Sidebar } from "@/components/sidebar"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { GithubSection } from "@/components/github-section"
import { ReportsSection } from "@/components/reports-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Brilho indigo sutil no topo */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 h-96 bg-[radial-gradient(60%_100%_at_50%_0%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <Sidebar />
          <main className="pt-16 lg:w-1/2 lg:py-24">
            <div className="flex flex-col gap-20 lg:gap-28">
              <AboutSection />
              <ProjectsSection />
              <ReportsSection />
              <GithubSection />
              <ContactSection />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
