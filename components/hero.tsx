"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                Ashwathy Ashokan
              </h1>
              <p className="text-xl md:text-2xl font-medium gradient-text">
                Data Analyst | Senior Statistical Programmer
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
                Senior data professional with 5+ years building enterprise-scale analytics pipelines, 
                ML systems, and clinical research solutions. Specializing in SAS, Python, SQL, 
                PySpark, and cloud infrastructure.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://raw.githubusercontent.com/ashwathyashokan97/v0-portfolio-website/6731d2c14bf403428339da5561f24e958bd90b85/public/Ashwathy_Ashokan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 hover:shadow-lg transition-all duration-200"
              >
                Download Resume
              </a>

              <Link
                href="#projects"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 hover:scale-105 transition-all duration-200"
              >
                View Projects
              </Link>

              <a
                href="#contact"
                className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted hover:scale-105 transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative flex justify-center transition-all duration-1000 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-2xl glass border-2 border-border/50"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/ashwathyashokan97/v0-portfolio-website/6731d2c14bf403428339da5561f24e958bd90b85/public/Profile_picture_Ashwathy_Ashokan.jpeg"
                  alt="Portrait of Ashwathy Ashokan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
