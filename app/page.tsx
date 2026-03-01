import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experincia"
import HeroSection  from "@/components/hero-section"
import ProjectSection from "@/components/project-section"
import SkillsSection from "@/components/skills-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ExperienceSection />
    </main>
  ) 
}
