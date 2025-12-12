export default function Experience() {
  const experiences = [
    {
      title: "Senior Statistical Programmer",
      company: "Agati Clinical Informatics",
      period: "2019 — 2025",
      description:
        "Led data programming and analytics initiatives across multiple therapeutic areas including Oncology, Endocrinology, and Cardiovascular.",
      highlights: [
        "Designed and built SDTM/ADaM datasets for FDA submissions across 8+ clinical trials",
        "Developed reusable SAS macro library reducing programming time by 40%",
        "Implemented automated QC workflows, achieving 99.9% data accuracy",
        "Mentored 5+ junior programmers and established documentation standards",
        "Engineered Define.xml and P21 submission packages for regulatory compliance",
        "Optimized TLF generation pipeline, reducing report production time from 3 hours to 15 minutes",
      ],
    },
    {
      title: "Data Analyst",
      company: "Multiple Projects & Initiatives",
      period: "2020 — Present",
      description: "Architected and deployed machine learning and big data solutions for real-world applications.",
      highlights: [
        "Built end-to-end NLP pipeline processing 10K+ news articles daily with 92% accuracy",
        "Engineered housing price prediction system with XGBoost achieving RMSE of $45K",
        "Designed Kafka-based real-time data streaming infrastructure handling 1M+ events/day",
        "Developed Next.js dashboards providing real-time insights to stakeholders",
        "Automated data workflows using Apache Airflow, reducing manual tasks by 85%",
        "Integrated Twilio SMS alerts for time-sensitive predictions and notifications",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-primary pl-8 pb-8 last:pb-0">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
              </div>

              <p className="text-muted-foreground mb-6">{exp.description}</p>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="text-accent flex-shrink-0 mt-1">✓</span>
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
