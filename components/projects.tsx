export default function Projects() {
  const projects = [
    {
      title: "iBrand AI/NLP Pipeline",
      category: "Big Data & ML",
      description:
        "Real-time news analysis platform extracting brand insights from 10K+ daily articles using advanced NLP techniques.",
      tech: ["Kafka", "Spark Streaming", "Python", "Transformers", "MongoDB", "FastAPI", "Docker", "React"],
      impact: [
        "Processes 10K+ articles daily with 92% sentiment accuracy",
        "Enables automated brand-voice social media posts",
        "Reduced manual analysis time by 95%",
        "Containerized microservices for scalability",
      ],
      github: "#",
    },
    {
      title: "Housing Price Prediction System",
      category: "ML & Analytics",
      description:
        "End-to-end machine learning system predicting residential property values with real-time SMS alerts.",
      tech: ["AWS EC2", "Apache Airflow", "XGBoost", "Python", "Next.js", "MongoDB", "Twilio", "PostgreSQL"],
      impact: [
        "RMSE of $45K on validation set",
        "Weekly automated retraining pipeline",
        "Real-time SMS alerts for undervalued listings",
        "Interactive dashboard for stakeholder insights",
      ],
      github: "#",
    },
    {
      title: "Clinical Data Automation",
      category: "Data Engineering",
      description:
        "Automated SDTM/ADaM generation reducing manual programming effort and ensuring regulatory compliance.",
      tech: ["SAS", "Python", "SQL", "Define.xml", "CDISC", "Git", "Jupyter"],
      impact: [
        "Reduced TLF generation from 3 hours to 15 minutes",
        "40% reduction in programming time",
        "99.9% data accuracy achieved",
        "Reusable macro library adopted enterprise-wide",
      ],
      github: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-medium text-muted-foreground mb-3">Key Impact</p>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.impact.map((item, i) => (
                    <li key={i} className="text-sm flex gap-2">
                      <span className="text-accent">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-background text-foreground rounded border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                View Details
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
