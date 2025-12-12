"use client"

import { useEffect, useState } from "react"

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      title: "iBrand – AI/NLP Big-Data Pipeline",
      category: "Big Data & ML",
      description: "Streaming NLP platform for real-time brand intelligence and automated social content generation.",
      tech: ["PySpark", "Kafka", "Spark Streaming", "MongoDB", "FastAPI", "Docker", "Transformers"],
      problem: "Manual analysis of news articles for brand mentions was time-consuming and inconsistent.",
      solution:
        "Built an end-to-end streaming pipeline: multi-source news scrapers → Kafka → Spark Streaming NLP (cleaning, NER, sentiment, topic modeling) → MongoDB → FastAPI backend.",
      impact: [
        "Processes 10,000+ articles daily with 92% sentiment accuracy",
        "Reduces manual analysis time by 95%",
        "Enables automated, brand-tone social media posts",
        "Containerized microservices for elastic scaling",
      ],
      github: "https://github.com/LCM-S25-3035/iBrand",
    },
    {
      title: "Canadian Housing Price Prediction",
      category: "ML & Analytics",
      description: "Automated ML system predicting residential property values with real-time alerts and dashboards.",
      tech: ["Python", "XGBoost", "MongoDB", "AWS EC2", "Airflow", "Twilio", "Next.js"],
      problem: "Real estate investors needed faster, data-driven property valuation insights.",
      solution:
        "Engineered automated pipeline: weekly Kijiji/Realtor.ca scraping → data cleaning & feature engineering → XGBoost training → Airflow orchestration on AWS EC2 → Twilio SMS alerts → Next.js dashboard.",
      impact: [
        "RMSE of $45K on validation set",
        "Weekly automated retraining and predictions",
        "SMS alerts for undervalued listings in real-time",
        "Interactive dashboard with feature importance visualization",
      ],
      github: "https://github.com/Lambton-AI-Group/house_price_prediction_project",
    },
    {
      title: "Clinical Data Automation & CDISC Pipeline",
      category: "Data Engineering",
      description: "Automated SDTM/ADaM generation system ensuring regulatory compliance and audit readiness.",
      tech: ["SAS", "Python", "SQL", "Define.xml", "CDISC", "Git", "Jupyter"],
      problem: "Manual SDTM/ADaM creation and TLF generation consumed 3+ hours per analysis, creating quality risks.",
      solution:
        "Developed reusable SAS macro library with automated validation, Python scripts for Define.xml generation, and standardized specifications for 30+ pharmaceutical studies.",
      impact: [
        "TLF generation reduced from 3 hours to 15 minutes",
        "40% reduction in total programming time",
        "99.9% data accuracy achieved across submissions",
        "Reusable macro library adopted enterprise-wide for consistency",
      ],
      github: "#",
    },
  ]

  return (
    <section
      id="projects"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">End-to-end systems solving real-world challenges</p>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`group glass rounded-lg p-8 border border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-xl ${
                hoveredIdx === idx ? "scale-102" : ""
              }`}
              style={{
                transform: hoveredIdx === idx ? "scale(1.02)" : "scale(1)",
              }}
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs px-3 py-1 bg-primary/15 text-primary rounded-full border border-primary/30 font-medium">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                        Problem
                      </p>
                      <p className="text-sm leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                        Solution
                      </p>
                      <p className="text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Impact</p>
                    <ul className="space-y-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="text-xs flex gap-2">
                          <span className="text-accent flex-shrink-0 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 bg-background/80 text-foreground rounded border border-border/50 hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all text-sm"
                    >
                      View on GitHub
                      <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
