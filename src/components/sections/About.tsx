"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="pt-24 pb-40 relative overflow-hidden bg-[#0a0a0a]">
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0a0a0a] z-20 pointer-events-none -translate-y-full" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

      {/* Container */}
      <div className="w-full max-w-[95%] px-4 mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2 inline-block relative text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-orange-500 animate-gradient-text bg-300% underline decoration-[#ff5c00] decoration-4 underline-offset-8">
              Server
            </span>{" "}
            About
          </h2>
          <p className="text-white/60 text-lg mt-2 max-w-2xl mx-auto">
            Discover the story behind GarudaPS and what makes our community special!
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[450px_1fr] gap-6 xl:gap-8 items-stretch">
          
          {/* --- LEFT COLUMN: IMAGE --- */}
          <div className="relative group w-full xl:w-[450px] mx-auto h-full min-h-[320px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff5c00] to-[#ff9e00] rounded-[24px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative w-full h-full rounded-[24px] overflow-hidden border border-white/10 bg-[#111111]">
              <Image
                src="/images/logo/garudaps.jpg" 
                alt="GarudaPS"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: TEXT CARD --- */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-[24px] relative shadow-2xl overflow-hidden group flex flex-col justify-center w-full">
            
            {/* Background Glow */}
            <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* HEADER CARD */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b border-white/10 pb-4 relative z-10 gap-4">
              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-black mb-1 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-orange-500 animate-gradient-text bg-300% tracking-tight">
                  GarudaPS | Private Server
                </h3>
                <p className="text-white/40 text-xs font-mono tracking-[0.3em] uppercase pl-1">
                  IREXUS COMMUNITY
                </p>
              </div>
              
              <div className="w-16 h-16 md:w-20 md:h-20 relative shrink-0">
                <Image 
                  src="/images/logo/GARUDAPS2026.png" 
                  alt="GarudaPS Logo" 
                  fill
                  className="object-contain drop-shadow-[0_0_20px_rgba(255,92,0,0.3)]"
                />
              </div>
            </div>

            {/* BODY TEXT */}
            <div className="space-y-3 text-white/70 text-base leading-relaxed text-justify relative z-10">
              <p className="font-bold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-orange-500 animate-gradient-text bg-300%">
                Welcome to Garuda Private Server (GarudaPS)
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore modi, corrupti quaerat mollitia earum amet, reiciendis laborum blanditiis aperiam ipsum fugiat veniam at nihil alias recusandae. Qui possimus dolor, amet repellat asperiores debitis nam facere beatae recusandae, dolorem quos magnam.
              </p>

              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto nisi inventore fugiat ad, et dolore quasi quo distinctio! Dolor nihil blanditiis deleniti quasi repudiandae corporis cumque et aperiam facilis placeat omnis minus quis, excepturi perspiciatis magni quia nemo ipsa praesentium nesciunt! Delectus id dolorem excepturi?
              </p>
              
              <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure optio magnam animi quae excepturi beatae tempore, quis ipsa nemo? Nisi, reiciendis odit totam unde amet quibusdam est doloremque, recusandae error, non dolore dolor debitis aut?
              </p>

              <div className="pt-4 border-t border-white/5 mt-2 flex items-center gap-3">
                 <span className="relative flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                 </span>
                 <p className="text-white/40 text-sm italic">
                    Join us and create your own legacy.
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}