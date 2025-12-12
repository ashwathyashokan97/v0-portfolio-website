export default function Education() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Education & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-2">Big Data Analytics</h3>
            <p className="text-primary font-medium mb-2">Lambton College</p>
            <p className="text-sm text-muted-foreground">
              Specialized curriculum in distributed computing, machine learning, and data engineering technologies.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-2">Fire Tech & Safety Engineering</h3>
            <p className="text-primary font-medium mb-2">Engineering Background</p>
            <p className="text-sm text-muted-foreground">
              Foundation in systematic problem-solving and technical rigor applied to data science.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 border border-border md:col-span-2">
            <h3 className="font-semibold mb-4">Professional Involvement</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ PHUSE Member (Pharmaceutical User Software Exchange)</li>
              <li>✓ Conference Symposium Coordinator</li>
              <li>✓ Scientific Magazine Editorial Team</li>
              <li>✓ Fire Safety Volunteer & Consultant</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
