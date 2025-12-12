"use client"

import { useEffect, useState } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const skillCategories = [
    {
      title: "Programming & Data",
      icon: "💻",
      skills: ["SAS Base/Advanced/Macros (5+ years)", "Python", "SQL", "PySpark", "R", "Scala"],
    },
    {
      title: "ML & Analytics",
      icon: "🤖",
      skills: [
        "XGBoost",
        "Scikit-Learn",
        "TensorFlow",
        "NLP",
        "Topic Modeling",
        "Sentiment Analysis",
        "Regression",
        "Clustering",
      ],
    },
    {
      title: "Big Data & Cloud",
      icon: "☁️",
      skills: ["Apache Kafka", "Spark Streaming", "Hadoop", "AWS EC2", "Docker", "Apache Airflow"],
    },
    {
      title: "BI & Visualization",
      icon: "📊",
      skills: ["Tableau", "Power BI", "Plotly", "Matplotlib", "Seaborn", "D3.js"],
    },
    {
      title: "Clinical & Regulatory",
      icon: "⚕️",
      skills: ["SDTM/ADaM", "Define.xml", "P21 Submissions", "TLFs", "FDA Compliance", "CDISC", "21 CFR Part 11"],
    },
    {
      title: "Databases & Tools",
      icon: "🗄️",
      skills: ["MongoDB", "PostgreSQL", "FastAPI", "Git", "Jupyter", "Twilio", "Next.js"],
    },
  ]

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground">Comprehensive toolkit for modern data challenges</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="glass rounded-lg p-6 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group hover:scale-105"
              style={{
                transitionDelay: `${idx * 50}ms`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-semibold text-lg text-primary group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background/50 text-xs font-medium rounded-full border border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
