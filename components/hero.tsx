import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[85vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-8 max-w-3xl">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Data Analyst &<br />
              <span className="gradient-text">Statistical Programmer</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transforming raw data into actionable insights. 5+ years specializing in SAS, Python, SQL, ML pipelines,
              and clinical research at enterprise scale.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <Link
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
            <a
              href="#projects"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Download Resume
            </a>
          </div>

          <div className="pt-12 flex gap-8 text-sm">
            <div>
              <p className="text-muted-foreground">5+ Years</p>
              <p className="font-semibold">Data & Analytics</p>
            </div>
            <div>
              <p className="text-muted-foreground">50+ Projects</p>
              <p className="font-semibold">Completed</p>
            </div>
            <div>
              <p className="text-muted-foreground">15+ Tools</p>
              <p className="font-semibold">Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
