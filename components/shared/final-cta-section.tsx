"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export function FinalCTASection() {
  return (
    <section className="relative w-full overflow-hidden py-32 md:py-48">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] bg-[#8CFF2E] opacity-[0.06] blur-[150px] rounded-full pointer-events-none"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none [background-image:radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <motion.div
        aria-hidden="true"
        className="hidden md:block absolute top-12 left-12 size-2 rounded-full bg-[#8CFF2E] shadow-[0_0_20px_4px_rgba(140,255,46,0.6)] pointer-events-none"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="hidden md:block absolute bottom-12 right-12 size-2 rounded-full bg-[#8CFF2E] shadow-[0_0_20px_4px_rgba(140,255,46,0.6)] pointer-events-none"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-[#8CFF2E] font-mono font-medium">
          READY TO SHIP?
        </span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mt-4">
          Send your first email today.
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed">
          Clone the repo, run the binary, point your SDK. You&apos;ll be
          sending email in five minutes.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/sardorazimov/courierx-web"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#8CFF2E] hover:bg-[#8CFF2E]/90 active:scale-[0.98] text-[#050505] font-semibold px-7 py-4 rounded-full text-base transition-all duration-200 shadow-[0_0_40px_-8px_rgba(140,255,46,0.4)] hover:shadow-[0_0_60px_-8px_rgba(140,255,46,0.6)]"
          >
            <FaGithub className="size-5" />
            <span>Get on GitHub</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href="/docs"
            className="group inline-flex items-center gap-2 bg-transparent hover:bg-white/[0.04] text-zinc-300 hover:text-foreground border border-white/[0.1] hover:border-white/[0.2] px-7 py-4 rounded-full font-medium text-base transition-all duration-200"
          >
            <BookOpen className="size-5" />
            <span>Read the docs</span>
          </a>
        </div>

        <p className="text-center text-xs text-zinc-500 mt-8 font-mono">
          Open source · MIT licensed · No credit card needed
        </p>
      </div>
    </section>
  );
}
