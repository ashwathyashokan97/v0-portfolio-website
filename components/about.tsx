"use client"
import { useEffect, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="about"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate data professional with a unique background bridging clinical research and modern data
              science. My journey began in pharmaceutical data management at Agati Clinical Informatics, where I
              mastered CDISC standards (SDTM/ADaM) and led FDA regulatory submissions for Phase I-III clinical trials
              across multiple therapeutic areas including Oncology, Endocrinology, and Cardiovascular.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over the past 5+ years, I've evolved into a full-stack data professional, combining statistical rigor with
              machine learning and big data technologies. I excel at building production-grade data pipelines—from
              real-time Kafka streaming to predictive modeling with XGBoost—while maintaining the highest standards of
              data quality, reproducibility, and compliance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm driven by complex problems that require technical depth and strategic thinking. Whether automating
              clinical workflows, scaling data pipelines to handle millions of events daily, or delivering ML models to
              production with AWS and Docker, I approach every challenge with precision, innovation, and a focus on
              measurable impact.
            </p>

            <div className="pt-4 space-y-3">
              <h3 className="font-semibold text-base">Core Strengths:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                  <span className="text-sm">5+ years statistical programming & CDISC expertise</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                  <span className="text-sm">End-to-end ML & predictive modeling systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                  <span className="text-sm">Big data pipelines: Kafka, Spark Streaming, Hadoop</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                  <span className="text-sm">Real-time data visualization & interactive dashboards</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                  <span className="text-sm">Cloud infrastructure & DevOps (AWS, Docker, Airflow)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-lg p-6 border border-border/50 space-y-4">
              <h3 className="font-semibold text-base">Quick Contact</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Location</p>
                  <p className="font-medium">Ontario, Canada</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Email</p>
                  <a href="mailto:ashwathyreddy.97@gmail.com" className="text-primary hover:underline font-medium">
                    ashwathyreddy.97@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+14376691129" className="text-primary hover:underline font-medium">
                    +1 (437) 669 1129
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-lg p-6 border border-border/50">
              <h3 className="font-semibold text-base mb-4">Connect</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/ashwathy-ashokan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm font-medium text-center"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ashwathyashokan97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm font-medium text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
