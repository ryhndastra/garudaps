"use client"

import { motion } from "framer-motion"
// Kita tidak butuh import Lucide icons lagi untuk bagian logo card
import Image from "next/image"
import type React from "react"

// Update Interface: ganti icon jadi imageSrc (string)
const TutorialCard = ({ title, imageSrc, steps }: { title: string; imageSrc: string; steps: React.ReactNode[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-[#111111] backdrop-blur-md border border-white/5 rounded-[40px] p-8 md:p-10 hover:border-orange-500/30 transition-all group"
  >
    <div className="flex items-center gap-4 mb-8">
      {/* Container untuk Logo Image */}
      <div className="bg-orange-500/10 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300 relative w-16 h-16 flex items-center justify-center">
        {/* Menggunakan Next Image */}
        <div className="relative w-10 h-10"> {/* Atur ukuran logo di sini (w-10 h-10 = 40px) */}
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-contain" 
          />
        </div>
      </div>
      <h3 className="text-2xl font-black text-orange-500 italic tracking-tight uppercase">{title}</h3>
    </div>
    <ul className="space-y-4 text-left">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-3 text-white/80 leading-relaxed font-medium">
          <span className="text-orange-500 font-bold shrink-0">{i + 1}.</span>
          <div className="flex-1">{step}</div>
        </li>
      ))}
    </ul>
  </motion.div>
)

export default function TutorialSection() {
 const tutorials = [
    {
      title: "Windows",
      imageSrc: "/images/icons/win.png", 
      steps: [
        <span key="press-win-r">Press Win+R → paste C:\Windows\System32\drivers\etc</span>,
        <span key="open-hosts-with-notepad">
          Open <span className="font-bold text-white">hosts</span> with Notepad (Admin)
        </span>,
        <span key="add-hosts">
          Add: <br />
          <code className="text-orange-400 mt-2 block font-mono bg-black/50 p-3 rounded-xl border border-white/5 text-sm">
            157.66.54.50 growtopia1.com
            <br />
            157.66.54.50 growtopia2.com
            <br />
            157.66.54.50 www.growtopia1.com
            <br />
            157.66.54.50 www.growtopia2.com
          </code>
        </span>,
        "Save → launch Growtopia",
      ],
    },
    {
      title: "PowerTunnel (Android)",
      imageSrc: "/images/icons/ptun.png", 
      steps: [
        <span key="install-power-tunnel">
          Install{" "}
          <a 
            href="https://android.izzysoft.de/repo/apk/io.github.krlvm.powertunnel.android" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 font-bold underline hover:text-orange-400 transition-colors"
          >
            PowerTunnel APK
          </a>
        </span>,
        "Open → Plugin → Hosts → Open the Setting",
        <span key="enter-url-power-tunnel">
          Enter: <span className="text-orange-400 font-mono text-sm">https://garudaps.vercel.app/android</span>
        </span>,
        'Back, Click "CONNECT" button, open Growtopia',
      ],
    },
    {
      title: "Hosts Go (Android)",
      imageSrc: "/images/icons/hostsgo.png", 
      steps: [
        <span key="install-hosts-go">
          Install{" "}
          <a 
            href="https://www.mediafire.com/file/ctly08te3i8rlwq/%28No_root%29_Hosts_Go_2.1.9_Apkpure.apk/file" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 font-bold underline hover:text-orange-400 transition-colors"
          >
            Hosts Go (No Root)
          </a>
        </span>,
        "Open → Hosts Editor → enable → Download Hosts File",
        <span key="enter-url-hosts-go">
          Enter: <span className="text-orange-400 font-mono text-sm">https://garudaps.vercel.app/android</span>
        </span>,
        "Apply, start protection, open Growtopia",
      ],
    },
    {
      title: "Virtual Host (Android)",
      imageSrc: "/images/icons/virtual.png", 
      steps: [
        <span key="install-virtual-host">
          Install{" "}
          {/* GANTI HREF DENGAN LINK DOWNLOAD ASLIMU */}
          <a 
            href="https://www.apkshub.com/app/com.github.xfalcon.vhosts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 font-bold underline hover:text-orange-400 transition-colors"
          >
            Virtual Host APK
          </a>
        </span>,
        <span key="download-hosts-file">
          Download Hosts File{" "}
          <a 
            href="#" 
            download
            className="text-orange-500 font-bold underline hover:text-orange-400 transition-colors"
          >
            here
          </a>
        </span>,
        "Open → SELECT HOSTS FILE",
        "Select the downloaded host file (MAFIAPS-HOST (2).txt)",
        "open Growtopia",
      ],
    },
    {
      title: "Mac",
      imageSrc: "/images/icons/mac.png", 
      steps: [
        <span key="finder">
          Finder → Go → Go to Folder → /private/etc/hosts
        </span>,
        <span key="add-hosts">
          Copy to Desktop, edit, then add: <br />
          <code className="text-orange-400 mt-2 block font-mono bg-black/50 p-3 rounded-xl border border-white/5 text-sm">
            157.66.54.50 growtopia1.com
            <br />
            157.66.54.50 growtopia2.com
            <br />
            157.66.54.50 www.growtopia1.com
            <br />
            157.66.54.50 www.growtopia2.com
          </code>
        </span>,
        "Save and move back → start Growtopia ",
      ],
    },
    {
      title: "Surge5 (Iphone)",
      imageSrc: "/images/icons/surge.png", 
      steps: [
        <span key="install-surge5">
          Install{" "}
          <a 
            href="https://apps.apple.com/us/app/surge-5/id1442620678" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 font-bold underline hover:text-orange-400 transition-colors"
          >
            Surge5
          </a>
        </span>,
        <span key="download-hosts-file">
          Import Profile: https://garudaps.vercel.app/ios
        </span>,
        "Allow VPN Configuration → Connect → Open Growtopia ",
      ],
    },
  ]

  return (
    <section id="tutorial" className="relative py-32 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0a0a0a] z-20 pointer-events-none -translate-y-full" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter inline-block relative"
          >
            <span className="animate-gradient-text">How to Play</span>
            <div className="absolute -bottom-4 left-0 w-full h-2 bg-orange-500 rounded-full shadow-[0_4px_10px_rgba(255,92,0,0.5)]" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-xl font-bold mt-10 tracking-tight"
          >
            Please select the application you want to use!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {tutorials.map((tutorial, idx) => (
            <TutorialCard key={idx} {...tutorial} />
          ))}
        </div>
      </div>
    </section>
  )
}