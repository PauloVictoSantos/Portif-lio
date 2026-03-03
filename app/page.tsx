import AboutSection from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import ExperienceSection from "@/components/experincia"
import HeroSection  from "@/components/hero-section"
import ProjectSection from "@/components/project-section"
import SkillsSection from "@/components/skills-section"

import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <StarsBackground />
        <ShootingStars />
      </div>

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />

    </main>
  )
}