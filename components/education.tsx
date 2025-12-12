"use client"

import { useEffect, useState } from "react"

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Education & Leadership</h2>
          <p className="text-lg text-muted-foreground">Academic foundation and professional involvement</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="glass rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Big Data Analytics</h3>
                <p className="text-primary font-medium text-sm">Lambton College</p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-primary/15 text-primary rounded font-medium whitespace-nowrap">
                2024–2025
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Specialized curriculum in distributed computing, machine learning, data engineering, and big data
              technologies. Practical experience with Spark, Kafka, Hadoop, and cloud infrastructure.
            </p>
          </div>

          <div className="glass rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  BE Fire Technology & Safety
                </h3>
                <p className="text-primary font-medium text-sm">Noorul Islam University</p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-primary/15 text-primary rounded font-medium whitespace-nowrap">
                2014–2018
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Foundation in systematic problem-solving, risk assessment, and technical analysis. Developed analytical
              mindset and attention to detail applied to data science.
            </p>
          </div>
        </div>

        <div className="glass rounded-lg p-8 border border-border/50 hover:border-primary/50 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-6">Professional Involvement & Leadership</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Community</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-accent mt-1">▸</span>
                  <span>
                    <strong>PHUSE Member</strong> – Pharmaceutical User Software Exchange
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-accent mt-1">▸</span>
                  <span>
                    <strong>Symposium Coordinator</strong> – Conference organization & speaker liaison
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                Creative & Volunteer
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-accent mt-1">▸</span>
                  <span>
                    <strong>Magazine Editor</strong> – LaTeX & InDesign publication design
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-accent mt-1">▸</span>
                  <span>
                    <strong>Fire Safety Volunteer</strong> – Community education & consulting
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
