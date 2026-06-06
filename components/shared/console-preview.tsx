import Image from "next/image";
import { Lock, Plus, Share2 } from "lucide-react";

export function ConsolePreview() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-bg py-16 md:py-24">
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-[80%] h-[60%] bg-[#8CFF2E] opacity-[0.06] blur-[120px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative [transform:perspective(2000px)_rotateX(2deg)] origin-top transition-transform duration-700">
          <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0a0a0a] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8),_0_0_0_1px_rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-3 px-4 h-11 bg-[#0a0a0a] border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-[#ff5f57]" />
                <div className="size-3 rounded-full bg-[#febc2e]" />
                <div className="size-3 rounded-full bg-[#28c840]" />
              </div>

              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-md px-4 py-1.5 text-xs text-zinc-400 font-mono min-w-[280px] max-w-[420px]">
                  <Lock className="size-3 text-zinc-500" />
                  <span>console.courierx.io/dashboard</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-zinc-600">
                <Share2 className="size-3.5" />
                <Plus className="size-3.5" />
              </div>
            </div>

            <div className="relative bg-[#050505] overflow-hidden">
              <Image
                src="/console-preview.png"
                alt="CourierX console dashboard"
                width={2880}
                height={1800}
                className="w-full h-auto block"
                preload
                quality={95}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505] pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
