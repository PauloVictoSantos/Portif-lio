import AboutSection from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import ExperienceSection from "@/components/experincia"
import HeroSection from "@/components/hero-section"
import ProjectSection from "@/components/project-section"
import SkillsSection from "@/components/skills-section"
import OnlineUsers from "@/components/OnlineUsers"
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <StarsBackground />
        <ShootingStars />
      </div>

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <div className="fixed top-0 left-0 right-0 z-50">
        <OnlineUsers />
      </div>
    </div>
  )
}