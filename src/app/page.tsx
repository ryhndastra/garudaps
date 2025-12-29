import Hero from "@/components/sections/Hero"
import TutorialSection from "@/components/sections/Tutorial/TutorialSection"
import Features from "@/components/sections/Features."
import About from "@/components/sections/About"
import Community from "@/components/sections/Community."
import Teams from "@/components/sections/Teams"
// import Footer from "@/components/layout/Footer"
import FloatingButtons from "@/components/effects/FloatingButtons"
import Navbar from "@/components/layout/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <TutorialSection />
      <Features />
      <About />
      <Community />
      <Teams />
      {/* <Footer /> */}
      <FloatingButtons />
    </main>
  )
}
