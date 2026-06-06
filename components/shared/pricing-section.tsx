import { Check, Clock } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const FREE_FEATURES = [
  "Full source code",
  "Unlimited emails",
  "Postgres-backed queue",
  "Drop-in Resend API",
  "Worker with retry logic",
  "Provider abstraction (SES, Resend, SMTP)",
];

const MANAGED_FEATURES = [
  "Fully managed infra",
  "Built-in SES backend",
  "Higher rate limits",
  "Email analytics",
  "Priority support",
  "99.9% uptime SLA",
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-32 md:py-40 scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8CFF2E] font-mono font-medium">
            PRICING
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mt-4">
            Pay nothing. Or pay us to host it.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mt-4">
            Run CourierX free on your own infrastructure forever. Or join the
            waitlist for our managed cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-16">
          <div className="rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-8 lg:p-10 shadow-[0_20px_60px_-30px_rgba(140,255,46,0.1)] hover:shadow-[0_0_0_1px_rgba(140,255,46,0.2),_0_20px_60px_-20px_rgba(140,255,46,0.15)] transition-shadow duration-300">
            <span className="inline-flex bg-[#8CFF2E]/10 border border-[#8CFF2E]/30 text-[#8CFF2E] text-xs font-mono px-3 py-1 rounded-full uppercase tracking-wider">
              Free
            </span>
            <h3 className="text-2xl font-bold text-foreground mt-6">
              Self-hosted
            </h3>
            <p className="text-zinc-400 mt-2 leading-relaxed">
              Your servers, your data, your rules.
            </p>

            <div className="flex items-end gap-1 mt-8">
              <span className="text-6xl font-bold text-foreground leading-none">
                $0
              </span>
              <span className="text-zinc-500 text-sm ml-2">forever</span>
            </div>

            <div className="border-t border-white/[0.06] my-8" />

            <ul className="space-y-3">
              {FREE_FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-zinc-300"
                >
                  <Check className="size-4 text-[#8CFF2E] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://github.com/sardorazimov/courierx-web"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full flex items-center justify-center gap-2 bg-[#8CFF2E] text-[#050505] font-semibold rounded-full px-6 py-3 hover:bg-[#8CFF2E]/90 transition-colors"
            >
              <FaGithub className="size-4" />
              <span>Get on GitHub</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="rounded-2xl bg-[#0a0a0a] border border-white/[0.04] p-8 lg:p-10 hover:border-white/[0.1] transition-colors">
            <span className="inline-flex bg-zinc-800/50 border border-white/[0.06] text-zinc-400 text-xs font-mono px-3 py-1 rounded-full uppercase tracking-wider">
              Coming soon
            </span>
            <h3 className="text-2xl font-bold text-foreground mt-6">Managed</h3>
            <p className="text-zinc-400 mt-2 leading-relaxed">
              We host it, you ship.
            </p>

            <div className="flex items-end gap-1 mt-8">
              <span className="text-6xl font-bold text-zinc-500 leading-none">
                $?
              </span>
              <span className="text-zinc-600 text-sm ml-2">
                early-access pricing
              </span>
            </div>

            <div className="border-t border-white/[0.06] my-8" />

            <ul className="space-y-3">
              {MANAGED_FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-zinc-400"
                >
                  <Clock className="size-4 text-zinc-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:hello@courierx.io?subject=CourierX Managed Waitlist"
              className="mt-8 w-full flex items-center justify-center bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.08] rounded-full px-6 py-3 font-medium transition-colors"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
