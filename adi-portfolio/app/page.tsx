"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ContactInfo } from "@/components/portfolio/contact-info"
import { EducationSection } from "@/components/portfolio/education-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { OrganizationSection } from "@/components/portfolio/organization-section"
import { LanguagesSection } from "@/components/portfolio/languages-section"
import { Footer } from "@/components/portfolio/footer"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowScrollTop(scrollPosition > 300)

      // Update active section based on scroll position
      const sections = ["home", "education", "experience", "skills", "organization", "languages"]
      const sectionElements = sections.map((id) => document.getElementById(id))

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Step 1: Navigation */}
      <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />

      {/* Step 2: Hero Section */}
      <HeroSection />

      {/* Step 3: Contact Information */}
      <ContactInfo />

      {/* Step 4: Education */}
      <EducationSection />

      {/* Step 5: Professional Experience */}
      <ExperienceSection />

      {/* Step 6: Skills & Tools */}
      <SkillsSection />

      {/* Step 7: Organizational Experience */}
      <OrganizationSection />

      {/* Step 8: Languages */}
      <LanguagesSection />

      {/* Step 9: Footer */}
      <Footer />

      {/* Step 10: Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
