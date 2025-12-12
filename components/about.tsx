export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate data analyst and senior statistical programmer with a unique background bridging clinical
              research and modern data science. My journey started in pharmaceutical data management, where I mastered
              CDISC standards (SDTM/ADaM) and regulatory submissions at Agati Clinical Informatics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over the past 5+ years, I've evolved into a full-stack data professional, combining statistical rigor with
              machine learning and big data technologies. I excel at building end-to-end data pipelines, from real-time
              streaming to predictive modeling, while maintaining the highest standards of data quality and
              reproducibility.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm driven by complex problems that require both technical depth and strategic thinking. Whether it's
              automating clinical workflows, scaling data pipelines, or delivering ML models to production, I approach
              every challenge with precision and innovation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="font-semibold mb-4">Core Competencies</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Statistical programming & CDISC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>ML & predictive modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Big data pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Real-time data streaming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Data visualization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
