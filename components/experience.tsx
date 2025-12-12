"use client"

import { useEffect, useState } from "react"

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const experiences = [
    {
      title: "Senior Statistical Programmer",
      company: "Agati Clinical Informatics",
      period: "2019 — 2025",
      location: "Ontario, Canada",
      description:
        "Led end-to-end data programming and analytics initiatives across 8+ Phase I-III clinical trials in Oncology, Endocrinology, and Cardiovascular therapeutic areas.",
      highlights: [
        "Designed and validated SDTM/ADaM datasets ensuring FDA submission readiness; implemented automated QC workflows achieving 99.9% data accuracy",
        "Developed reusable SAS macro library with 30+ enterprise-grade macros, reducing programming time by 40% across teams",
        "Engineered Define.xml and Pinnacle 21 submission packages ensuring 21 CFR Part 11 compliance for regulated submissions",
        "Optimized TLF generation pipeline from 3 hours to 15 minutes through automation and code optimization",
        "Mentored 5+ junior statistical programmers; created standardized templates and SOPs adopted company-wide",
        "Collaborated with Biostatistics, Data Management, and global study teams across multiple time zones",
      ],
    },
    {
      title: "Data Analyst & ML Engineer",
      company: "Personal & Academic Projects",
      period: "2020 — Present",
      location: "Remote",
      description:
        "Architected and deployed production-grade machine learning and big data solutions for real-world applications.",
      highlights: [
        "Built end-to-end NLP streaming pipeline (iBrand) processing 10K+ news articles daily, achieving 92% sentiment classification accuracy",
        "Engineered Canadian housing price prediction system with XGBoost achieving $45K RMSE; deployed weekly retraining on AWS EC2 with Airflow orchestration",
        "Designed Kafka-based real-time streaming infrastructure handling 1M+ events/day with sub-100ms latency guarantees",
        "Developed Next.js interactive dashboards delivering real-time business intelligence to non-technical stakeholders",
        "Integrated Twilio SMS alerts for time-sensitive predictions; automated workflows reduced manual tasks by 85%",
        "Containerized microservices with Docker; implemented Git-based CI/CD for reproducible, auditable deployments",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">5+ years building enterprise-scale data systems</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass rounded-lg p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-lg"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-xs text-muted-foreground">{exp.location}</p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap font-medium">{exp.period}</p>
              </div>

              <p className="text-muted-foreground mb-6">{exp.description}</p>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-accent flex-shrink-0 mt-0.5 font-bold">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
