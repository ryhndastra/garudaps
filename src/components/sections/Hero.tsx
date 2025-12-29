"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, MessageCircle } from "lucide-react" // Ganti Info jadi Play/MessageCircle biar relevan
import Image from "next/image"

export default function Hero() {

  // Fungsi Helper untuk Scroll Halus
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/banner.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      <div className="container relative z-20 px-4 flex flex-col items-center pt-20">
        
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="relative">
            <div className="mb-4 flex justify-center">
             <div className="relative w-80 h-48 md:w-[520px] md:h-[260px]">
              <Image
                src="/images/logo/GARUDAPS2026.png"
                alt="Logo"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(255,92,0,0.5)]"
              />
            </div>
            </div>
          </div>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl w-full bg-black/60 backdrop-blur-xl rounded-[40px] md:rounded-[60px] p-8 md:p-12 border-2 border-orange-500/20 shadow-[0_0_100px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          <p className="text-center text-white/90 text-lg md:text-2xl font-semibold leading-relaxed mb-12 max-w-3xl mx-auto">
            Join a stable{" "}
            <span className="text-orange-500 font-extrabold underline decoration-orange-500/50">
              Growtopia Private Server
            </span>{" "}
            packed with custom items, fun daily events, and a balanced economy. Build, compete, and connect in a safe,
            inclusive community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            
            {/* BUTTON 1: PLAY NOW (Scroll ke Tutorial) */}
            {/* Style: Gradient, 3D Push Effect, Shine Animation */}
            <Button
              size="lg"
              onClick={() => scrollToSection("tutorial")}
              className="relative group overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl px-10 h-16 text-xl font-black 
              shadow-[0_6px_0_#7c2d12] hover:shadow-[0_3px_0_#7c2d12] hover:translate-y-[3px] 
              active:shadow-none active:translate-y-[6px] transition-all duration-150"
            >
              {/* Efek Kilatan (Shine) lewat css translate */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0" />
              
              <div className="relative z-10 flex items-center gap-3">
                <Play className="h-6 w-6 fill-white" />
                PLAY NOW
              </div>
            </Button>

            {/* BUTTON 2: JOIN DISCORD (Scroll ke Community) */}
            {/* Style: Glassmorphism, Glowing Border/Text on Hover */}
            <Button
              size="lg"
              onClick={() => scrollToSection("community")}
              className="relative group bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-2xl px-10 h-16 text-xl font-bold 
              hover:bg-black/40 hover:border-orange-500/50 transition-all duration-300 shadow-xl"
            >
              {/* Glow background halus saat hover */}
              <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center gap-3 group-hover:text-orange-400 transition-colors">
                <MessageCircle className="h-6 w-6" />
                Join Discord
              </div>
            </Button>

          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="mt-16 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => scrollToSection("tutorial")}
        >
          <span className="text-sm font-black text-white uppercase tracking-[0.3em]">Scroll Down</span>
          <div className="flex flex-col -gap-2 text-orange-500">
            <ChevronDown className="w-8 h-8" />
            <ChevronDown className="w-8 h-8 -mt-5" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}