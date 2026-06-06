"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type CodeTab = { id: string; label: string };

interface CodeTabsProps {
  tabs: CodeTab[];
  active: string;
  onChange: (id: string) => void;
  className?: string;
  ariaLabel?: string;
}

export function CodeTabs({
  tabs,
  active,
  onChange,
  className,
  ariaLabel = "Code language",
}: CodeTabsProps) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        "flex items-center gap-1 overflow-x-auto bg-white/[0.02] border-b border-white/[0.06] px-3",
        "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.id)}
            className={cn(
              "shrink-0 -mb-px px-3 py-2.5 text-xs font-mono tracking-wide border-b-2 transition-colors",
              isActive
                ? "text-foreground border-[#8CFF2E]"
                : "border-transparent text-zinc-500 hover:text-zinc-300",
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
