export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Data",
      skills: ["SAS", "Python", "SQL", "PySpark", "R", "Scala"],
    },
    {
      title: "ML & Analytics",
      skills: ["XGBoost", "Scikit-Learn", "TensorFlow", "NLP", "Topic Modeling", "Sentiment Analysis"],
    },
    {
      title: "Big Data & Cloud",
      skills: ["Kafka", "Spark Streaming", "Hadoop", "AWS EC2", "Docker", "Airflow"],
    },
    {
      title: "BI & Visualization",
      skills: ["Tableau", "Power BI", "Plotly", "Matplotlib", "Seaborn"],
    },
    {
      title: "Clinical & Regulatory",
      skills: ["SDTM/ADaM", "Define.xml", "P21 Submissions", "TLFs", "FDA Compliance"],
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "PostgreSQL", "FastAPI", "Git", "Jupyter", "Twilio"],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold text-lg mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-background text-xs font-medium rounded-full border border-border hover:bg-primary/10 hover:border-primary transition-colors"
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
