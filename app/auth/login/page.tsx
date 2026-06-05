"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex bg-[#030303] text-white font-sans">
      
      {/* Sol Panel: Marka Kimliği */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 p-12 bg-zinc-950/50 border-r border-white/5 relative overflow-hidden">
        {/* Dekoratif Arka Plan Işığı */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8CFF2E]/10 blur-[150px] rounded-full" />
        
        <Link href="/" className="inline-flex items-center gap-2 text-white font-bold text-xl relative z-10">
          <div className="size-8 rounded-lg bg-white text-black flex items-center justify-center font-bold text-sm">米</div>
          Miransas
        </Link>
        
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Engineering at <br/> the edge.</h1>
          <p className="text-zinc-500 max-w-sm leading-relaxed">
            Access your Miransas workspace to manage tunneling, automation, and system monitoring infrastructure.
          </p>
        </div>
        
        <p className="text-xs text-zinc-600">© 2026 Miransas. All rights reserved.</p>
      </div>

      {/* Sağ Panel: Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 relative">
        <Link href="/" className="absolute top-8 left-8 text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm">
          <ArrowLeft className="size-4" /> Back to Home
        </Link>

        <div className="w-full max-w-sm space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Sign in</h2>
            <p className="text-sm text-zinc-500">Authenticate via GitHub to continue</p>
          </div>

          <div className="space-y-4">
            {/* GitHub Girişi - Ana Odak */}
            <button className="w-full h-11 flex items-center justify-center gap-2.5 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all active:scale-[0.98]">
              <FaGithub className="size-5" />
              Sign in with GitHub
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#030303] px-2 text-zinc-500">or</span>
              </div>
            </div>

            {/* Email Girişi */}
            <input 
              type="email" 
              placeholder="name@miransas.com" 
              className="w-full h-11 bg-zinc-900 border border-white/10 rounded-lg px-4 text-sm focus:outline-none focus:border-[#8CFF2E] transition-colors"
            />
            <button className="w-full h-11 bg-[#8CFF2E] text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(140,255,46,0.3)] transition-all active:scale-[0.98]">
              Continue
            </button>
          </div>

          <p className="text-center text-xs text-zinc-600">
            By signing in, you agree to our <Link href="/terms" className="underline hover:text-white">Terms</Link> and <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}