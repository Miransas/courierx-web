"use client";

import { motion } from "framer-motion";
import { Terminal, Copy } from "lucide-react";

export function FeaturesGrid() {
  return (
    <section className="w-full py-16 px-6 font-sans bg-brand-bg relative overflow-hidden">
      
      {/* Arka plan için çok hafif bir yansıma */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#8CFF2E] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Üst Düzey Kesikli Grid Yapısı - Miransas Dark Mode Karakteri */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-dashed divide-white/10 bg-zinc-950/80 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          
          {/* ================= KART 1: Lazer Akışlı Animasyonlar ================= */}
          <div className="p-8 flex flex-col justify-between h-[380px] relative group overflow-hidden hover:bg-white/[0.02] transition-colors duration-500">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
                Stunning Animations with Motion
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-[290px]">
                Bring your user interfaces to life with creative, beautifully crafted motion components engineered for extreme speed.
              </p>
            </div>

            {/* Pürüzsüz Akış ve Neon Lazer Alanı */}
            <div className="w-full h-36 relative flex items-center overflow-visible">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 320 120">
                <defs>
                  {/* Neon Yeşil Lazer İzi */}
                  <linearGradient id="neon-laser" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(140,255,46,0)" />
                    <stop offset="50%" stopColor="rgba(140,255,46,0.3)" />
                    <stop offset="100%" stopColor="rgba(140,255,46,1)" />
                  </linearGradient>
                </defs>

                {/* Kılavuz Çizgileri - Karanlık */}
                <line x1="0" y1="25" x2="320" y2="25" className="stroke-white/5" strokeWidth="1" />
                <line x1="0" y1="95" x2="320" y2="95" className="stroke-white/5" strokeWidth="1" />
                
                {/* Ana Kılavuz Eğrisi */}
                <path
                  d="M 0,60 C 50,60 70,110 110,100 C 160,85 180,50 220,55 C 270,60 280,25 320,70"
                  className="stroke-white/10"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Eğrinin Üstünde Kayıp Giden Lazer Işını */}
                <motion.path
                  d="M 0,60 C 50,60 70,110 110,100 C 160,85 180,50 220,55 C 270,60 280,25 320,70"
                  className="stroke-[url(#neon-laser)] drop-shadow-[0_0_8px_rgba(140,255,46,0.8)]"
                  strokeWidth="2.5"
                  fill="none"
                  initial={{ pathLength: 0.3, pathOffset: -0.3 }}
                  animate={{ pathOffset: 1.3 }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* Lazer Üzerinde Kayan Karanlık Çekirdek */}
              <motion.div
                className="absolute size-10 rounded-full bg-zinc-950 border border-[#8CFF2E]/50 flex items-center justify-center shadow-[0_0_20px_rgba(140,255,46,0.4)] z-10 select-none"
                animate={{
                  x: [-10, 48, 102, 155, 212, 268, 310],
                  y: [4, 18, 44, 28, 0, -26, 12],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              >
                <div className="size-4 rounded-full bg-[#8CFF2E] blur-[2px] absolute" />
                {/* Geometrik Miransas Çekirdeği */}
                <svg className="size-5 fill-[#8CFF2E] relative z-20" viewBox="0 0 24 24">
                  <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* ================= KART 2: Yüksek Performanslı Core Pipeline ================= */}
          <div className="p-8 flex flex-col justify-between h-[380px] relative group overflow-hidden hover:bg-white/[0.02] transition-colors duration-500">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
                Primitive-First Foundation
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-[290px]">
                A highly optimized foundation built for raw performance. Ideal for complex tunneling and system-level UI.
              </p>
            </div>

            {/* Veri Otobanı */}
            <div className="relative w-full h-44 flex items-center justify-center">
              
              {/* Sol Üst Düğüm (b) */}
              <div className="absolute top-4 left-14 size-12 rounded-xl border border-white/10 bg-zinc-950 flex items-center justify-center text-sm font-semibold text-zinc-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] select-none">
                <span className="text-[#8CFF2E]">b</span>
              </div>

              {/* Sağ Üst Düğüm (t) */}
              <div className="absolute top-4 right-14 size-12 rounded-xl border border-white/10 bg-zinc-950 flex items-center justify-center text-sm font-semibold text-zinc-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] select-none">
                <span className="text-[#8CFF2E]">t</span>
              </div>

              {/* Merkez Alt Çekirdek (Miransas Hub) */}
              <div className="absolute bottom-2 size-14 rounded-xl border border-[#8CFF2E]/30 bg-zinc-950 flex items-center justify-center p-1 shadow-[0_0_30px_rgba(140,255,46,0.15)] relative">
                <motion.div 
                  className="absolute inset-0 rounded-xl bg-[#8CFF2E]/20 blur-md"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="size-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center font-bold text-base relative z-10 text-white">
                  米
                </div>
              </div>

              {/* Çift Şeritli Fiber Kanallar */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 176">
                {/* Sol Hat */}
                <line x1="84" y1="56" x2="144" y2="126" className="stroke-white/5" strokeWidth="2" />
                {/* Sağ Hat */}
                <line x1="236" y1="56" x2="176" y2="126" className="stroke-white/5" strokeWidth="2" />

                {/* Kanallardan Akan Neon Yeşili Veri Paketleri */}
                <motion.circle r="2.5" fill="#8CFF2E" className="drop-shadow-[0_0_8px_#8CFF2E]"
                  animate={{ cx: [84, 144], cy: [56, 126], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn" }}
                />
                <motion.circle r="2.5" fill="#8CFF2E" className="drop-shadow-[0_0_8px_#8CFF2E]"
                  animate={{ cx: [236, 176], cy: [56, 126], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn", delay: 0.75 }}
                />
              </svg>
            </div>
          </div>

          {/* ================= KART 3: Terminal / CLI Pipeline ================= */}
          <div className="p-8 flex flex-col justify-between h-[380px] relative group overflow-hidden hover:bg-white/[0.02] transition-colors duration-500">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
                Command Line Precision
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Deploy infrastructure instantly via CLI. Pure speed, zero friction. Copy-paste high performance modules.
              </p>
            </div>

            {/* Geometrik Kılçık Şeması - Terminal Havası */}
            <div className="relative w-full h-36 flex items-center justify-between px-2">
              
              {/* Sol Taraf: Themes Kutusu */}
              <div className="border border-white/10 bg-zinc-950 rounded-xl px-3 py-1.5 flex items-center gap-2 z-10 shadow-lg">
                <span className="text-sm font-bold text-[#8CFF2E]">米</span>
                <span className="text-xs font-medium text-zinc-300">Modules</span>
              </div>

              {/* Rozetler (Hacker Tarzı) */}
              <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-20">
                <div className="absolute top-2 left-[44%] border border-[#8CFF2E]/20 bg-zinc-950 text-[10px] px-2 py-0.5 rounded-md text-[#8CFF2E] font-mono">
                  CLI
                </div>
                <div className="absolute top-2 left-[64%] border border-white/10 bg-zinc-950 text-[10px] px-2 py-0.5 rounded-md text-zinc-500 font-mono">
                  BIN
                </div>
                <div className="absolute bottom-2 left-[46%] border border-white/10 bg-zinc-950 text-[10px] px-2 py-0.5 rounded-md text-zinc-400 font-mono flex items-center gap-1">
                  <Copy className="size-2.5 text-[#8CFF2E]" /> Copy
                </div>
                <div className="absolute bottom-2 left-[72%] border border-white/10 bg-zinc-950 text-[10px] px-2 py-0.5 rounded-md text-zinc-500 font-mono">
                  SYS
                </div>
              </div>

              {/* Devre Sistemi SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 144">
                {/* Ana Yatay Hat */}
                <line x1="102" y1="72" x2="255" y2="72" className="stroke-white/10" strokeWidth="1.5" />

                {/* Dik Çizgiler */}
                <line x1="152" y1="28" x2="152" y2="72" className="stroke-white/5" strokeWidth="1.5" />
                <line x1="216" y1="28" x2="216" y2="72" className="stroke-white/5" strokeWidth="1.5" />
                <line x1="184" y1="72" x2="184" y2="116" className="stroke-white/5" strokeWidth="1.5" />
                <line x1="258" y1="72" x2="258" y2="116" className="stroke-white/5" strokeWidth="1.5" />

                {/* Hat Boyunca İlerleyen Neon Veri Işığı */}
                <motion.circle r="2" fill="#8CFF2E" className="drop-shadow-[0_0_10px_#8CFF2E]"
                  animate={{ cx: [102, 255] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* Sağ Taraf: Terminal Kutusu */}
              <div className="flex flex-col items-center gap-2 z-10 pr-2">
                <div className="border border-[#8CFF2E]/40 bg-[#8CFF2E]/10 size-10 rounded-xl flex items-center justify-center text-[#8CFF2E] shadow-[0_0_15px_rgba(140,255,46,0.15)] relative overflow-hidden">
                  <Terminal className="size-5" strokeWidth={2} />
                  <motion.div 
                    className="absolute inset-0 bg-[#8CFF2E]/20"
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <span className="text-[10px] text-[#8CFF2E] font-mono tracking-wide">Terminal</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}