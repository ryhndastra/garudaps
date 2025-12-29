"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const teamMembers = [
  {
    name: "iRexus",
    role: "Server Owner",
    avatar: "/images/team/iRexus.png", 
    quote: "Building a world where players rule. Dedicated to making GarudaPs the best GT server.",
  },
  {
    name: "StarGel",
    role: "Server Developer",
    avatar: "/images/team/StarGel.png",
    quote: "Code is poetry. Every feature is crafted with precision to ensure zero lag and max fun.",
  },
  {
    name: "Rasha",
    role: "Server Staff",
    avatar: "/images/team/Rasha.png",
    quote: "Here to listen, help, and keep the community vibe positive and welcoming for everyone.",
  },
  {
    name: "Sho",
    role: "Server Staff",
    avatar: "/images/team/Sho.png",
    quote: "Fair play is my priority. Ensuring a safe environment for all our players.",
  },
]

export default function Teams() {
  const scrollRef1 = useRef<HTMLDivElement>(null)
  const scrollRef2 = useRef<HTMLDivElement>(null)

  // Logic Scrolling 1
  useEffect(() => {
    const scrollContainer = scrollRef1.current
    if (!scrollContainer) return
    let animationId: number
    let scrollPosition = 0
    const scroll = () => {
      scrollPosition += 0.5 
      // Reset saat mencapai setengah
      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }
    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [])

  // Logic Scrolling 2 
  useEffect(() => {
    const scrollContainer = scrollRef2.current
    if (!scrollContainer) return
    let animationId: number
    let scrollPosition = scrollContainer.scrollWidth / 2 
    const scroll = () => {
      scrollPosition -= 0.5
      if (scrollPosition <= 0) {
        scrollPosition = scrollContainer.scrollWidth / 2
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }
    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section id="teams" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto mb-16 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-orange-500 animate-gradient-text bg-300% underline decoration-[#ff5c00] decoration-4 underline-offset-8">
              Server
            </span>{" "}
            Team
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
            The Architects of Seamless Server Operations
          </p>
        </div>
      </div>

      {/* --- ROW 1: Scrolling Left --- */}
      <div className="relative w-full overflow-hidden mb-8 z-10">
        {/* Fade Gradient di Kiri Kanan supaya smooth */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

        <div
          ref={scrollRef1}
          className="flex gap-6 overflow-hidden whitespace-nowrap"
          style={{ scrollBehavior: "auto" }}
        >
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div key={`row1-${member.name}-${index}`} className="inline-block w-[350px] md:w-[400px] flex-shrink-0">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 h-full hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 group cursor-default">
                
                {/* Header Card: Avatar & Nama */}
                <div className="flex items-center gap-4 mb-4">
                  {/* AVATAR CONTAINER */}
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-orange-500 transition-colors shadow-lg">
                    {/* Fallback jika gambar error/loading bisa dihandle di sini, tapi defaultnya cukup src */}
                    <Image 
                        src={member.avatar} 
                        alt={member.name}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-orange-500 transition-colors">
                      {member.name}
                    </h3>
                    <div className="inline-block px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                        <p className="text-xs text-orange-400 font-bold uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-white/60 text-sm leading-relaxed whitespace-normal italic border-l-2 border-white/10 pl-3">
                  "{member.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- ROW 2: Scrolling Right --- */}
      <div className="relative w-full overflow-hidden z-10">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

        <div
          ref={scrollRef2}
          className="flex gap-6 overflow-hidden whitespace-nowrap"
          style={{ scrollBehavior: "auto" }}
        >
          {/* Direverse atau di-shuffle kalau mau beda urutan, tapi default sama oke */}
          {[...teamMembers, ...teamMembers].reverse().map((member, index) => (
            <div key={`row2-${member.name}-${index}`} className="inline-block w-[350px] md:w-[400px] flex-shrink-0">
               <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 h-full hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 group cursor-default">
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-orange-500 transition-colors shadow-lg">
                    <Image 
                        src={member.avatar} 
                        alt={member.name}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-orange-500 transition-colors">
                      {member.name}
                    </h3>
                    <div className="inline-block px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                        <p className="text-xs text-orange-400 font-bold uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>
                </div>

                <p className="text-white/60 text-sm leading-relaxed whitespace-normal italic border-l-2 border-white/10 pl-3">
                  "{member.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}