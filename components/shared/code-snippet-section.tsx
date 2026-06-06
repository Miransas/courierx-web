"use client";

import * as React from "react";
import { useState } from "react";
import { ArrowRight, Check, Copy } from "lucide-react";
import { CodeTabs, type CodeTab } from "@/components/ui/code-tabs";
import { cn } from "@/lib/utils";

type Lang = "curl" | "node" | "python" | "go";

const TABS: CodeTab[] = [
  { id: "curl", label: "cURL" },
  { id: "node", label: "Node.js" },
  { id: "python", label: "Python" },
  { id: "go", label: "Go" },
];

const STEPS = [
  "Validated",
  "Queued in Postgres",
  "Worker picks up",
  "Delivered",
] as const;

const K = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#8CFF2E]">{children}</span>
);
const S = ({ children }: { children: React.ReactNode }) => (
  <span className="text-amber-300">{children}</span>
);

const RAW: Record<Lang, string> = {
  curl: `curl -X POST https://api.courierx.io/v1/emails \\
  -H "Authorization: Bearer cx_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "you@yourdomain.com",
    "to": "user@example.com",
    "subject": "Welcome to CourierX",
    "html": "<p>Hello from your own infrastructure.</p>"
  }'`,
  node: `import { CourierX } from '@courierx/node';

const courierx = new CourierX('cx_live_...');

await courierx.emails.send({
  from: 'you@yourdomain.com',
  to: 'user@example.com',
  subject: 'Welcome to CourierX',
  html: '<p>Hello from your own infrastructure.</p>',
});`,
  python: `from courierx import CourierX

courierx = CourierX(api_key="cx_live_...")

courierx.emails.send(
    from_="you@yourdomain.com",
    to="user@example.com",
    subject="Welcome to CourierX",
    html="<p>Hello from your own infrastructure.</p>",
)`,
  go: `package main

import "github.com/courierx/courierx-go"

func main() {
    client := courierx.NewClient("cx_live_...")

    client.Emails.Send(&courierx.EmailRequest{
        From:    "you@yourdomain.com",
        To:      "user@example.com",
        Subject: "Welcome to CourierX",
        Html:    "<p>Hello from your own infrastructure.</p>",
    })
}`,
};

const RENDERED: Record<Lang, React.ReactNode> = {
  curl: (
    <>
      {`curl -X `}<K>POST</K>{` `}<S>{`https://api.courierx.io/v1/emails`}</S>{` \\`}{`\n`}
      {`  -H `}<S>{`"Authorization: Bearer cx_live_..."`}</S>{` \\`}{`\n`}
      {`  -H `}<S>{`"Content-Type: application/json"`}</S>{` \\`}{`\n`}
      {`  -d '{`}{`\n`}
      {`    `}<S>{`"from"`}</S>{`: `}<S>{`"you@yourdomain.com"`}</S>{`,`}{`\n`}
      {`    `}<S>{`"to"`}</S>{`: `}<S>{`"user@example.com"`}</S>{`,`}{`\n`}
      {`    `}<S>{`"subject"`}</S>{`: `}<S>{`"Welcome to CourierX"`}</S>{`,`}{`\n`}
      {`    `}<S>{`"html"`}</S>{`: `}<S>{`"<p>Hello from your own infrastructure.</p>"`}</S>{`\n`}
      {`  }'`}
    </>
  ),
  node: (
    <>
      <K>{`import`}</K>{` { CourierX } `}<K>{`from`}</K>{` `}<S>{`'@courierx/node'`}</S>{`;`}{`\n`}
      {`\n`}
      <K>{`const`}</K>{` courierx = `}<K>{`new`}</K>{` CourierX(`}<S>{`'cx_live_...'`}</S>{`);`}{`\n`}
      {`\n`}
      <K>{`await`}</K>{` courierx.emails.send({`}{`\n`}
      {`  from: `}<S>{`'you@yourdomain.com'`}</S>{`,`}{`\n`}
      {`  to: `}<S>{`'user@example.com'`}</S>{`,`}{`\n`}
      {`  subject: `}<S>{`'Welcome to CourierX'`}</S>{`,`}{`\n`}
      {`  html: `}<S>{`'<p>Hello from your own infrastructure.</p>'`}</S>{`,`}{`\n`}
      {`});`}
    </>
  ),
  python: (
    <>
      <K>{`from`}</K>{` courierx `}<K>{`import`}</K>{` CourierX`}{`\n`}
      {`\n`}
      {`courierx = CourierX(api_key=`}<S>{`"cx_live_..."`}</S>{`)`}{`\n`}
      {`\n`}
      {`courierx.emails.send(`}{`\n`}
      {`    from_=`}<S>{`"you@yourdomain.com"`}</S>{`,`}{`\n`}
      {`    to=`}<S>{`"user@example.com"`}</S>{`,`}{`\n`}
      {`    subject=`}<S>{`"Welcome to CourierX"`}</S>{`,`}{`\n`}
      {`    html=`}<S>{`"<p>Hello from your own infrastructure.</p>"`}</S>{`,`}{`\n`}
      {`)`}
    </>
  ),
  go: (
    <>
      <K>{`package`}</K>{` main`}{`\n`}
      {`\n`}
      <K>{`import`}</K>{` `}<S>{`"github.com/courierx/courierx-go"`}</S>{`\n`}
      {`\n`}
      <K>{`func`}</K>{` main() {`}{`\n`}
      {`    client := courierx.NewClient(`}<S>{`"cx_live_..."`}</S>{`)`}{`\n`}
      {`\n`}
      {`    client.Emails.Send(&courierx.EmailRequest{`}{`\n`}
      {`        From:    `}<S>{`"you@yourdomain.com"`}</S>{`,`}{`\n`}
      {`        To:      `}<S>{`"user@example.com"`}</S>{`,`}{`\n`}
      {`        Subject: `}<S>{`"Welcome to CourierX"`}</S>{`,`}{`\n`}
      {`        Html:    `}<S>{`"<p>Hello from your own infrastructure.</p>"`}</S>{`,`}{`\n`}
      {`    })`}{`\n`}
      {`}`}
    </>
  ),
};

const RESPONSE_RAW = `{
  "id": "4f8a2c91-7b3d-4e6a-9c5f-1a8b2d4e6f01",
  "status": "queued",
  "created_at": "2026-06-06T14:30:00Z"
}`;

const RESPONSE_RENDERED = (
  <>
    {`{`}{`\n`}
    {`  `}<K>{`"id"`}</K>{`: `}<S>{`"4f8a2c91-7b3d-4e6a-9c5f-1a8b2d4e6f01"`}</S>{`,`}{`\n`}
    {`  `}<K>{`"status"`}</K>{`: `}<S>{`"queued"`}</S>{`,`}{`\n`}
    {`  `}<K>{`"created_at"`}</K>{`: `}<S>{`"2026-06-06T14:30:00Z"`}</S>{`\n`}
    {`}`}
  </>
);

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable; silently ignore
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      className="absolute top-3 right-3 z-10 inline-flex items-center justify-center size-8 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.05] transition-colors"
    >
      {copied ? (
        <Check className="size-4 text-[#8CFF2E]" />
      ) : (
        <Copy className="size-4" />
      )}
    </button>
  );
}

const CARD_CLASS = cn(
  "rounded-xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden",
  "transition-colors duration-300 hover:border-[#8CFF2E]/20",
  "shadow-[0_0_0_1px_rgba(255,255,255,0.02),_0_20px_60px_-20px_rgba(140,255,46,0.1)]",
);

export function CodeSnippetSection() {
  const [active, setActive] = useState<Lang>("curl");

  return (
    <section className="relative bg-brand-bg py-32 md:py-40 overflow-hidden">
      {/* Decorative dot grid background — option A */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse at center, black 50%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 50%, transparent 90%)",
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8CFF2E] font-mono font-medium">
            GET STARTED
          </span>
          <h2 className="mt-4 font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Send your first email in 30 seconds
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            Drop-in replacement for Resend. Same request body, same response
            shape. Just point your API URL at CourierX.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-12 md:mt-16 max-w-6xl px-6">
          <div className="grid lg:grid-cols-[1.2fr_auto_1fr] lg:items-stretch gap-4">
            {/* Request card */}
            <div className={CARD_CLASS}>
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05]">
                <span className="font-mono text-xs text-zinc-500">
                  <span className="text-[#8CFF2E]">POST</span> /v1/emails
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  Request
                </span>
              </div>
              <CodeTabs
                tabs={TABS}
                active={active}
                onChange={(id) => setActive(id as Lang)}
              />
              <div className="relative">
                <CopyButton text={RAW[active]} label="request" />
                <pre
                  key={active}
                  className="overflow-x-auto p-6 md:p-8 pr-14 font-mono text-sm leading-relaxed text-zinc-300"
                >
                  <code>{RENDERED[active]}</code>
                </pre>
              </div>
            </div>

            {/* Flow arrow — desktop only */}
            <div
              aria-hidden
              className="hidden lg:flex items-center justify-center"
            >
              <ArrowRight className="size-5 text-[#8CFF2E]/40" />
            </div>

            {/* Response card */}
            <div className={CARD_CLASS}>
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05]">
                <span className="font-mono text-xs">
                  <span className="text-[#8CFF2E]">201</span>{" "}
                  <span className="text-zinc-500">Accepted</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  Response
                </span>
              </div>
              <div className="relative">
                <CopyButton text={RESPONSE_RAW} label="response" />
                <pre className="overflow-x-auto p-6 md:p-8 pr-14 font-mono text-sm leading-relaxed text-zinc-400">
                  <code>{RESPONSE_RENDERED}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-12 mx-auto max-w-5xl flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {STEPS.map((step, i) => (
              <React.Fragment key={step}>
                <div className="shrink-0 inline-flex items-center gap-2 border border-white/[0.08] rounded-full px-4 py-2 text-sm font-medium text-zinc-300 bg-[#0a0a0a]">
                  <span className="size-1.5 rounded-full bg-[#8CFF2E] shadow-[0_0_8px_rgba(140,255,46,0.6)]" />
                  {step}
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden
                    className="shrink-0 w-8 lg:w-auto lg:flex-1 h-px bg-white/[0.06]"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
