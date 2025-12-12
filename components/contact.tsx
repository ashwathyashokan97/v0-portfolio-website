"use client"

import type React from "react"
import { useState, useEffect } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 700)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, integrate with email service (SendGrid, Resend, etc.)
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">
            I'm always interested in hearing about new projects, opportunities, and collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:ashwathyreddy.97@gmail.com"
            className="glass rounded-lg p-6 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group text-center"
          >
            <p className="text-2xl mb-2">📧</p>
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Email</h3>
            <p className="text-sm text-muted-foreground">ashwathyreddy.97@gmail.com</p>
          </a>

          <a
            href="tel:+14376691129"
            className="glass rounded-lg p-6 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group text-center"
          >
            <p className="text-2xl mb-2">📱</p>
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Phone</h3>
            <p className="text-sm text-muted-foreground">+1 (437) 669 1129</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ashwathy-ashokan/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-lg p-6 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group text-center"
          >
            <p className="text-2xl mb-2">💼</p>
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Connect with me</p>
          </a>
        </div>

        <div className="glass rounded-lg p-8 border border-border/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows={6}
                className="w-full px-4 py-2.5 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              Send Message
            </button>

            {submitted && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-700 text-sm text-center">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
