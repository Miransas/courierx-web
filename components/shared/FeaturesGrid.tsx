"use client";

import { motion } from "framer-motion";
import { Terminal, Copy } from "lucide-react";

export function FeaturesGrid() {
  return (
    <section id="features" className="w-full py-16 px-6 font-sans bg-brand-bg relative overflow-hidden scroll-mt-20">
      
      {/* Arka plan için çok hafif bir yansıma */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#8CFF2E] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Üst Düzey Kesikli Grid Yapısı - CourierX Dark Mode Karakteri */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-dashed divide-white/10 bg-zinc-950/80 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          
          {/* ================= KART 1: Lazer Akışlı Animasyonlar ================= */}
          <div className="p-8 flex flex-col justify-between h-[380px] relative group overflow-hidden hover:bg-white/[0.02] transition-colors duration-500">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
                Drop-in API, Resend-compatible
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-[290px]">
                Migrate in minutes. Same request body, same response shape — just point your SDK at your own CourierX server.
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
                  id="laser-path"
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

                {/* Yolu Takip Eden Çekirdek — animateMotion ile pürüzsüz */}
                <g style={{ filter: "drop-shadow(0 0 10px rgba(140,255,46,0.55))" }}>
                  <circle r="12" fill="#0a0a0a" stroke="#8CFF2E" strokeOpacity="0.55" strokeWidth="1" />
                  <circle r="5" fill="#8CFF2E" opacity="0.35" />
                  <path
                    d="M0,-5 L1.5,-1.5 L5,0 L1.5,1.5 L0,5 L-1.5,1.5 L-5,0 L-1.5,-1.5 Z"
                    fill="#8CFF2E"
                  />
                  <animateMotion dur="3.5s" repeatCount="indefinite" rotate="0">
                    <mpath href="#laser-path" />
                  </animateMotion>
                </g>
              </svg>
            </div>
          </div>

          {/* ================= KART 2: Yüksek Performanslı Core Pipeline ================= */}
          <div className="p-8 flex flex-col justify-between h-[380px] relative group overflow-hidden hover:bg-white/[0.02] transition-colors duration-500">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
                Postgres-backed queue, no Redis
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-[290px]">
                Built on FOR UPDATE SKIP LOCKED for safe concurrent workers. One less service to run, one less thing to break.
              </p>
            </div>

            {/* Veri Otobanı */}
            <div className="relative w-full h-44 flex items-center justify-center">
              
              {/* Sol Üst Düğüm (api) */}
              <div className="absolute top-4 left-14 size-12 rounded-xl border border-white/10 bg-zinc-950 flex items-center justify-center text-sm font-semibold text-zinc-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] select-none">
                <span className="text-[#8CFF2E]">api</span>
              </div>

              {/* Sağ Üst Düğüm (smtp) */}
              <div className="absolute top-4 right-14 size-12 rounded-xl border border-white/10 bg-zinc-950 flex items-center justify-center text-sm font-semibold text-zinc-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] select-none">
                <span className="text-[#8CFF2E]">smtp</span>
              </div>

              {/* Merkez Alt Çekirdek (CourierX Hub) */}
              <div className="absolute bottom-2 size-14 rounded-xl border border-[#8CFF2E]/30 bg-zinc-950 flex items-center justify-center p-1 shadow-[0_0_30px_rgba(140,255,46,0.15)] relative">
                <motion.div 
                  className="absolute inset-0 rounded-xl bg-[#8CFF2E]/20 blur-md"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="size-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center font-bold text-base relative z-10 text-white">
                  C
                </div>
              </div>

              {/* Çift Şeritli Fiber Kanallar */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 176">
                {/* Sol Hat */}
                <line x1="84" y1="56" x2="144" y2="126" className="stroke-white/[0.08]" strokeWidth="1.5" />
                {/* Sağ Hat */}
                <line x1="236" y1="56" x2="176" y2="126" className="stroke-white/[0.08]" strokeWidth="1.5" />

                {/* Sol Akış — 3 staggered paket */}
                {[0, 0.5, 1.0].map((delay, i) => (
                  <motion.circle
                    key={`a-${i}`}
                    r="2"
                    fill="#8CFF2E"
                    className="drop-shadow-[0_0_6px_#8CFF2E]"
                    animate={{ cx: [84, 144], cy: [56, 126], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay,
                      times: [0, 0.15, 0.85, 1],
                    }}
                  />
                ))}

                {/* Sağ Akış — 3 staggered paket */}
                {[0.25, 0.75, 1.25].map((delay, i) => (
                  <motion.circle
                    key={`s-${i}`}
                    r="2"
                    fill="#8CFF2E"
                    className="drop-shadow-[0_0_6px_#8CFF2E]"
                    animate={{ cx: [236, 176], cy: [56, 126], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay,
                      times: [0, 0.15, 0.85, 1],
                    }}
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* ================= KART 3: Terminal / CLI Pipeline ================= */}
          <div className="p-8 flex flex-col justify-between h-[380px] relative group overflow-hidden hover:bg-white/[0.02] transition-colors duration-500">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
                Self-host in under 5 minutes
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                One binary for the API, one for the worker. Docker, systemd, or bare metal — your call.
              </p>
            </div>

            {/* Geometrik Kılçık Şeması - Terminal Havası */}
            <div className="relative w-full h-36 flex items-center justify-between px-2">
              
              {/* Sol Taraf: courierx Kutusu */}
              <div className="border border-white/10 bg-zinc-950 rounded-xl px-3 py-1.5 flex items-center gap-2 z-10 shadow-lg">
                <span className="text-sm font-bold text-[#8CFF2E]">C</span>
                <span className="text-xs font-medium text-zinc-300">courierx</span>
              </div>

              {/* Rozetler (Hacker Tarzı) */}
              <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-20">
                <div className="absolute top-2 left-[44%] border border-[#8CFF2E]/20 bg-zinc-950 text-[10px] px-2 py-0.5 rounded-md text-[#8CFF2E] font-mono">
                  API
                </div>
                <div className="absolute top-2 left-[64%] border border-white/10 bg-zinc-950 text-[10px] px-2 py-0.5 rounded-md text-zinc-500 font-mono">
                  WORKER
                </div>
                <div className="absolute bottom-2 left-[46%] border border-white/10 bg-zinc-950 text-[10px] px-2 py-0.5 rounded-md text-zinc-400 font-mono flex items-center gap-1">
                  <Copy className="size-2.5 text-[#8CFF2E]" /> SES
                </div>
                <div className="absolute bottom-2 left-[72%] border border-white/10 bg-zinc-950 text-[10px] px-2 py-0.5 rounded-md text-zinc-500 font-mono">
                  RESEND
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

                {/* Ana Yatay Akış */}
                <motion.circle r="2" fill="#8CFF2E" className="drop-shadow-[0_0_10px_#8CFF2E]"
                  cy="72"
                  animate={{ cx: [102, 255] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Dik Damlalar — 4 staggered paket */}
                <motion.circle r="1.5" fill="#8CFF2E" className="drop-shadow-[0_0_6px_#8CFF2E]"
                  cx="152"
                  animate={{ cy: [28, 72], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0, times: [0, 0.2, 0.8, 1] }}
                />
                <motion.circle r="1.5" fill="#8CFF2E" className="drop-shadow-[0_0_6px_#8CFF2E]"
                  cx="216"
                  animate={{ cy: [28, 72], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.4, times: [0, 0.2, 0.8, 1] }}
                />
                <motion.circle r="1.5" fill="#8CFF2E" className="drop-shadow-[0_0_6px_#8CFF2E]"
                  cx="184"
                  animate={{ cy: [72, 116], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.6, times: [0, 0.2, 0.8, 1] }}
                />
                <motion.circle r="1.5" fill="#8CFF2E" className="drop-shadow-[0_0_6px_#8CFF2E]"
                  cx="258"
                  animate={{ cy: [72, 116], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 1.0, times: [0, 0.2, 0.8, 1] }}
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