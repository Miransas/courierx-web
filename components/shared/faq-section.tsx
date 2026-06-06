"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is CourierX really a drop-in replacement for Resend?",
    answer: (
      <>
        Yes. The <code>POST /v1/emails</code> endpoint accepts the same request
        body (<code>from</code>, <code>to</code>, <code>subject</code>,{" "}
        <code>html</code>, <code>text</code>) and returns the same response
        shape (<code>{`{ id, status }`}</code>). For most apps, switching is a
        one-line change: point your SDK at your own CourierX URL instead of{" "}
        <code>...point your SDK at your own CourierX URL. Same request shape, same response shape</code>.
      </>
    ),
  },
  {
    question: "Do I still need an email provider like SES or Resend?",
    answer: (
      <>
        Yes. CourierX is the API layer — it doesn&apos;t deliver mail itself.
        You bring your own provider: AWS SES, Resend, Postmark, or plain SMTP.
        CourierX handles queueing, retries, logs, and the developer experience.
        Think of it as &ldquo;the thing between your app and your email
        vendor.&rdquo;
      </>
    ),
  },
  {
    question: "Why Postgres instead of Redis for the queue?",
    answer: (
      <>
        Because most apps already have a Postgres database. Running CourierX on
        Postgres means one less service to deploy, monitor, and back up. We use{" "}
        <code>FOR UPDATE SKIP LOCKED</code> to safely process jobs from multiple
        worker instances — the same pattern used by Sidekiq Pro, Oban, and
        River.
      </>
    ),
  },
  {
    question: "How hard is it to self-host?",
    answer: (
      <>
        Three things to run: the API, the worker, and a Postgres database. The
        whole stack is two Rust binaries plus a database. You can deploy it
        with Docker, systemd, or any platform that runs containers —
        DigitalOcean, Fly, Railway, your own VM. Setup is documented
        step-by-step.
      </>
    ),
  },
  {
    question: "Can I use CourierX for free, forever?",
    answer: (
      <>
        Yes. The self-hosted version is and will stay free. Source code is
        open. You own your data, your domain reputation, and your bounce list.
        The managed cloud (when it ships) will be a separate paid offering —
        but the self-hosted path is the foundation and we&apos;re committed to
        keeping it useful.
      </>
    ),
  },
  {
    question: "Who's building this?",
    answer: (
      <>
        CourierX is built by Sardor under the Miransas brand — solo developer
        working on infrastructure tools. The project is open source; community
        contributions are welcome on{" "}
        <a
          href="https://github.com/sardorazimov/courierx-web"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-[#8CFF2E]/40 hover:decoration-[#8CFF2E] text-zinc-300 hover:text-foreground transition-colors"
        >
          GitHub
        </a>
        .
      </>
    ),
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full py-32 md:py-40">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8CFF2E] font-mono font-medium">
            QUESTIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-4">
            Things developers usually ask.
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto mt-4">
            If you have a question we didn&apos;t answer, open a{" "}
            <a
              href="https://github.com/sardorazimov/courierx-web/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#8CFF2E]/40 hover:decoration-[#8CFF2E] text-zinc-300 hover:text-foreground transition-colors"
            >
              GitHub issue
            </a>
            .
          </p>
        </div>

        <div className="mt-16">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            const isLast = index === FAQ_ITEMS.length - 1;

            return (
              <div
                key={item.question}
                className={isLast ? "" : "border-b border-white/[0.06]"}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between py-6 cursor-pointer text-left group"
                >
                  <span className="text-base md:text-lg font-medium text-foreground group-hover:text-[#8CFF2E] transition-colors duration-200 pr-6">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`size-5 text-zinc-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-12 text-zinc-400 leading-relaxed text-base [&_code]:bg-white/[0.05] [&_code]:text-[#8CFF2E] [&_code]:font-mono [&_code]:text-sm [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
