"use client";

import { motion } from "framer-motion";
import { GitBranch, Box, Terminal, Zap, ShieldCheck } from "lucide-react";

const integrations = [
  { name: "Node.js", icon: GitBranch },
  { name: "Rust", icon: Box },
  { name: "Go", icon: Terminal },
  { name: "Webhooks", icon: Zap },
  { name: "SES", icon: ShieldCheck },
];

export function IntegrationsSection() {
  return (
    <section className="py-24 px-6 border-t border-white/5 bg-brand-bg relative overflow-hidden">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Works with your stack</h2>
        <p className="text-zinc-400 mb-16 max-w-lg mx-auto">
          Drop CourierX into any backend. Node, Rust, Go SDKs coming soon. Webhooks for delivered, bounced, complained.
        </p>

        {/* Bağlantı Şeması */}
        <div className="relative flex items-center justify-center h-64">
          {/* Merkez Hub */}
          <div className="size-20 rounded-2xl bg-zinc-950 border border-brand-primary/30 flex items-center justify-center shadow-[0_0_50px_rgba(140,255,46,0.15)] z-20">
            <span className="text-3xl font-bold text-brand-primary">C</span>
          </div>

          {/* Dönen İkonlar */}
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              className="absolute size-14 rounded-xl border border-white/5 bg-zinc-900 flex items-center justify-center text-zinc-400 z-10"
              initial={{ rotate: (360 / integrations.length) * i }}
              animate={{ rotate: (360 / integrations.length) * i + 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {/* İkonu düz durması için ters döndür */}
              <div className="rotate-[0deg]">
                <item.icon className="size-6" />
              </div>
            </motion.div>
          ))}
          
          {/* Bağlantı Çizgileri */}
          <svg className="absolute inset-0 size-full pointer-events-none opacity-20">
            <circle cx="50%" cy="50%" r="100" className="stroke-white" fill="none" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>
    </section>
  );
}