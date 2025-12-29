"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  
  // STATE BARU: Untuk mengatur kapan logo muncul
  const [showLogo, setShowLogo] = useState(false)

  const navItems = ["Home", "Tutorial", "Features", "About", "Community", "Teams"]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: "smooth" })
      setActiveSection(sectionId)
    }
    setOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // LOGIC LOGO POP-UP:
      // Jika scroll > 50px, tampilkan logo. Jika tidak, sembunyikan.
      setShowLogo(scrollY > 50)

      // Logic Active Section (Navlink menyala)
      const scrollPosition = window.scrollY + 150
      for (const item of navItems) {
        const sectionId = item.toLowerCase()
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [open])

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[110] px-4 md:px-8 py-6 transition-all duration-300 pointer-events-none">
        
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center relative pointer-events-auto">
          
          {/* --- LOGO SECTION (ANIMASI POP) --- */}
          <div className="flex items-center z-[120] min-w-[100px] h-[50px]"> 
             {/* Min-width/height menjaga agar layout tidak bergeser saat logo hilang */}
             
             <AnimatePresence>
               {showLogo && (
                 <motion.button 
                    // ANIMASI POP DI SINI
                    initial={{ scale: 0, opacity: 0 }} // Awal: Kecil & Transparan
                    animate={{ scale: 1, opacity: 1 }} // Masuk: Ukuran Normal
                    exit={{ scale: 0, opacity: 0 }}    // Keluar: Mengecil lagi
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20 
                    }}
                    onClick={() => scrollToSection("home")} 
                    className="block relative group cursor-pointer"
                 >
                    <div className="relative w-40 h-12 md:w-48 md:h-14 transition-transform group-hover:scale-105 duration-300">
                      <Image
                        src="/images/logo/GARUDAPS2026.png"
                        alt="GarudaPS Logo"
                        fill
                        className="object-contain drop-shadow-[0_0_15px_rgba(255,92,0,0.4)]"
                        priority
                      />
                    </div>
                 </motion.button>
               )}
             </AnimatePresence>
          </div>

          {/* --- DESKTOP NAV LINKS (CENTER) --- */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[115]">
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-2 shadow-2xl backdrop-blur-xl">
              {navItems.map((item) => {
                const isActive = activeSection === item.toLowerCase()
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg shadow-orange-500/20 scale-105"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="relative z-10">{item}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* --- MOBILE HAMBURGER (KANAN) --- */}
          <div className="lg:hidden flex justify-end z-[120]">
            <button
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex flex-col justify-center items-center gap-1.5 active:scale-95 transition-transform backdrop-blur-md hover:bg-white/20 cursor-pointer"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <div className="h-0.5 w-6 bg-white rounded-full" />
              <div className="h-0.5 w-6 bg-white rounded-full" />
              <div className="h-0.5 w-6 bg-white rounded-full" />
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[140] lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm z-[150] lg:hidden bg-[#0a0a0a] border-l border-white/10 shadow-2xl overflow-y-auto"
            >
              <div className="flex flex-col min-h-full">
                
                {/* Header Mobile: LOGO DISINI SELALU MUNCUL (Tidak ikut logic scroll) */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                  <div className="relative w-32 h-10">
                    <Image
                      src="/images/logo/GARUDAPS2026.png"
                      alt="GarudaPS Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-orange-500 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                <div className="flex-1 flex flex-col justify-center p-6 gap-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className={`w-full text-left px-4 py-4 rounded-xl transition-all flex items-center justify-between group ${
                          activeSection === item.toLowerCase()
                            ? "bg-white/5 border border-orange-500/30"
                            : "hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <span className={`text-xl font-bold ${
                           activeSection === item.toLowerCase() ? "text-orange-500" : "text-white"
                        }`}>
                          {item}
                        </span>
                        
                        <span className={`text-xl transition-opacity ${
                           activeSection === item.toLowerCase() ? "opacity-100 text-orange-500" : "opacity-0 group-hover:opacity-100 text-white"
                        }`}>
                          →
                        </span>
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className="p-6 border-t border-white/10 text-center">
                  <p className="text-white/30 text-xs font-bold tracking-widest uppercase">
                    GARUDA PRIVATE SERVER
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}