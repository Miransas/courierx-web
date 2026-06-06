/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const GRID_SIZE = 6;

const EXCLUDED_POSITIONS: { row: number; col: number }[] = [
  { row: 0, col: 0 },
  { row: 0, col: 1 },
  { row: 0, col: 2 },
  { row: 1, col: 0 },
  { row: 1, col: 1 },
  { row: 1, col: 2 },
];

const isExcluded = (row: number, col: number) =>
  EXCLUDED_POSITIONS.some((pos) => pos.row === row && pos.col === col);

const BULB_POSITIONS = Array.from({ length: GRID_SIZE }, (_, row) =>
  Array.from({ length: GRID_SIZE }, (_, col) => ({ row, col })),
)
  .flat()
  .filter((pos) => !isExcluded(pos.row, pos.col));

type BulbState = "off" | "flickering" | "on" | "fused";

type Spark = {
  id: number;
  angle: number;
  distance: number;
  duration: number;
  size: number;
  color: string;
};

export function HeroSection() {
  const [bulbStates, setBulbStates] = useState<BulbState[]>(() =>
    BULB_POSITIONS.map(() => "off")
  );
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const shuffledIndices = [...Array(BULB_POSITIONS.length).keys()].sort(
      () => Math.random() - 0.5
    );

    shuffledIndices.forEach((bulbIndex, orderIndex) => {
      setTimeout(() => {
        setBulbStates((prev) => {
          const next = [...prev];
          next[bulbIndex] = "flickering";
          return next;
        });

        setTimeout(() => {
          setBulbStates((prev) => {
            const next = [...prev];
            next[bulbIndex] = "on";
            return next;
          });
        }, 300 + Math.random() * 400);
      }, orderIndex * 60);
    });

    const globalAnimationLoop = setInterval(() => {
      setBulbStates((prev) =>
        prev.map((state) => {
          const rand = Math.random();
          if (rand < 0.05) return "flickering";
          if (rand < 0.08 && rand >= 0.05) return "fused";
          if (state === "fused" || state === "flickering") {
            return Math.random() > 0.3 ? "on" : state;
          }
          return "on";
        })
      );
    }, 400);

    return () => clearInterval(globalAnimationLoop);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-brand-bg overflow-hidden flex items-center justify-center py-16 perspective-[1800px] sm:py-24 md:py-32 lg:py-40">
      
      {/* Izgara ve Işık Odası */}
      <div className="pointer-events-none absolute inset-0 hidden translate-x-10 -rotate-y-50 sm:block sm:translate-x-20 md:translate-x-32 lg:translate-x-40">
        <div
          className={cn(
            "absolute inset-0 opacity-20",
            "[background-size:42px_42px]",
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.02),transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_1px)]"
          )}
        />
        <SteelGrid bulbStates={bulbStates} />
      </div>

      {/* Ana İçerik */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 w-full sm:px-6 md:px-8 lg:px-12">
        <h1 className="font-sans text-left text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
          The open-source <br className="hidden sm:block" />
          email API for <span className="text-brand-primary drop-shadow-[0_0_20px_rgba(140,255,46,0.4)]">developers</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base font-normal text-zinc-400 sm:text-lg md:text-xl">
          Send transactional emails from your own infrastructure. Drop-in Resend-compatible API, full source code, and a worker you can self-host.
        </p>

        {/* Butonlar */}
        <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
          <a
            href="/docs"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="cursor-pointer rounded-xl bg-brand-primary px-6 py-3 text-sm font-semibold text-brand-bg transition duration-200 hover:shadow-[0_0_25px_#8CFF2E] active:scale-98"
          >
            Read the docs
          </a>
          <a
            href="https://github.com/miransas/courierx-api"
            className="cursor-pointer text-sm font-medium text-zinc-400 hover:text-white transition-colors sm:text-base flex items-center gap-2"
          >
            View on GitHub &rarr;
          </a>
        </div>

        {/* ================= KALIN LAZER BEAM'Lİ KART KATMANI ================= */}
        <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 p-[2px] shadow-[0_0_50px_-12px_rgba(140,255,46,0.15)] sm:mt-16 md:mt-20">
          
          {/* Kalınlaştırılmış Lazer Işını (Border Beam) */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-[450px] h-[450px] opacity-90 blur-[4px]"
              style={{
                // Merkezde saf beyaz, dışa doğru neon yeşili kalın bir gradyan oluşturduk
                background: "radial-gradient(circle, #ffffff 0%, #8CFF2E 35%, transparent 70%)",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                x: [0, 1100, 1100, 0, 0],
                y: [0, 0, 600, 600, 0],
              }}
              transition={{
                duration: 5, // Lazer daha güçlü aktığı için hızı hafifçe artırıldı
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <AnimatePresence>
            {hovered && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <div className="absolute -top-px -left-5 z-10 h-24 w-40 bg-[radial-gradient(ellipse_at_top_left,#8CFF2E_0%,transparent_70%)] opacity-40" />
                <div className="absolute top-0 left-5 h-px w-40 bg-[radial-gradient(ellipse_at_top,#8CFF2E,transparent)] blur-[3px]" />
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="absolute -top-px -right-5 z-10 h-24 w-48 bg-[radial-gradient(ellipse_at_top_right,#8CFF2E_0%,transparent_70%)] opacity-20 sm:-right-8" />
          <div className="absolute top-0 right-5 h-px w-40 bg-[radial-gradient(ellipse_at_top,#8CFF2E,transparent)] blur-[3px]" />

          {/* İçerik Alanı */}
          <div className="relative z-20 rounded-[14px] bg-zinc-950 p-1 sm:p-2">
            <img
              src="https://assets.aceternity.com/linear-demo.webp"
              alt="CourierX console preview"
              width={1000}
              height={1000}
              className="h-full w-full rounded-xl object-cover object-bottom-right grayscale contrast-125 opacity-75"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

{/* Akım Geçen Grid Sistemi */}
const SteelGrid = ({ bulbStates }: { bulbStates: BulbState[] }) => {
  return (
    <div className="absolute inset-0">
      {/* Dikey Çizgiler */}
      {Array.from({ length: GRID_SIZE }).map((_, i) => {
        const leftPos = `${((i + 1) / (GRID_SIZE + 1)) * 100}%`;
        return (
          <div key={`v-${i}`} className="absolute top-0 bottom-0 w-[1px] bg-zinc-900/50" style={{ left: leftPos }}>
            <motion.div
              className="absolute w-full h-32 bg-gradient-to-b from-transparent via-[#8CFF2E] to-transparent opacity-60 blur-[1px]"
              animate={{ y: ["-100%", "100vh"] }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.4,
              }}
            />
          </div>
        );
      })}

      {/* Yatay Çizgiler */}
      {Array.from({ length: GRID_SIZE }).map((_, i) => {
        const topPos = `${((i + 1) / (GRID_SIZE + 1)) * 100}%`;
        return (
          <div key={`h-${i}`} className="absolute right-0 left-0 h-[1px] bg-zinc-900/50" style={{ top: topPos }}>
            <motion.div
              className="absolute h-full w-32 bg-gradient-to-r from-transparent via-[#8CFF2E] to-transparent opacity-60 blur-[1px]"
              animate={{ x: ["-100%", "100vw"] }}
              transition={{
                duration: 3.5 + i * 0.4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3,
              }}
            />
          </div>
        );
      })}

      {/* Ampuller */}
      {BULB_POSITIONS.map((pos, index) => (
        <div
          key={`bulb-${index}`}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${((pos.col + 1) / (GRID_SIZE + 1)) * 100}%`,
            top: `${((pos.row + 1) / (GRID_SIZE + 1)) * 100}%`,
          }}
        >
          <Bulb state={bulbStates[index]} />
        </div>
      ))}
    </div>
  );
};

const Bulb = ({ state = "on" }: { state?: BulbState }) => {
  const isOn = state === "on";
  const isFlickering = state === "flickering";
  const isTracksFused = state === "fused";
  const isOff = state === "off";

  const prevStateRef = useRef<BulbState>(state);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const sparkIdRef = useRef(0);

  useEffect(() => {
    const prevState = prevStateRef.current;
    prevStateRef.current = state;

    if (prevState === "on" && state === "fused") {
      const sparkCount = 8 + Math.floor(Math.random() * 10);
      const newSparks: Spark[] = [];

      for (let i = 0; i < sparkCount; i++) {
        const baseAngle = Math.PI * 0.5;
        const spread = (Math.random() - 0.5) * Math.PI * 0.9;
        const angle = baseAngle + spread;

        newSparks.push({
          id: sparkIdRef.current++,
          angle: angle,
          distance: 30 + Math.random() * 70,
          duration: 0.6 + Math.random() * 1,
          size: 0.5 + Math.random() * 0.7,
          color: Math.random() > 0.4 ? "#8CFF2E" : "#ffffff",
        });
      }

      setSparks((prev) => [...prev, ...newSparks]);

      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => !newSparks.find((ns) => ns.id === s.id)));
      }, 1200);
    }
  }, [state]);

  const glowIntensity = isOn ? 1 : isFlickering ? 0.4 : 0;
  const coreOpacity = isOn ? 1 : isFlickering ? 0.6 : isTracksFused ? 0.05 : 0;

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 50 }}>
        {sparks.map((spark) => (
          <SparkParticle key={spark.id} spark={spark} />
        ))}
      </div>

      <div className="size-4 rounded-full bg-gradient-to-b from-zinc-800 via-zinc-900 to-black p-[1px] shadow-md sm:size-6 md:size-7">
        <div className="size-full rounded-full bg-zinc-950 p-[1px] flex items-center justify-center">
          <motion.div
            className="relative size-full rounded-full bg-zinc-900"
            animate={{
              boxShadow: isOn
                ? "0 0 16px 3px rgba(140, 255, 46, 0.55), 0 0 28px 8px rgba(140, 255, 46, 0.25)"
                : isFlickering
                  ? "0 0 8px 1px rgba(140, 255, 46, 0.4)"
                  : "0 0 0px 0px rgba(140, 255, 46, 0)",
            }}
            transition={{ duration: 0.04 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-brand-primary/20 blur-sm"
              animate={{ opacity: glowIntensity }}
              transition={{ duration: 0.04 }}
            />
            <motion.div
              className="absolute inset-0 m-auto h-[75%] w-[75%] rounded-full bg-gradient-to-br from-white to-brand-primary"
              animate={{ opacity: coreOpacity }}
              transition={{ duration: 0.04 }}
            />
            <motion.div
              className="absolute inset-0 m-auto h-[25%] w-[25%] rounded-full bg-zinc-800"
              animate={{ opacity: isOff || isTracksFused ? 0.7 : 0 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SparkParticle = ({ spark }: { spark: Spark }) => {
  const endX = Math.cos(spark.angle) * spark.distance;
  const endY = Math.sin(spark.angle) * spark.distance;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: spark.size,
        height: spark.size,
        backgroundColor: spark.color,
        left: "50%",
        top: "50%",
        marginLeft: -spark.size / 2,
        marginTop: -spark.size / 2,
        boxShadow: `0 0 ${spark.size * 3}px ${spark.size * 1.5}px ${spark.color}`,
      }}
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{ x: endX, y: endY, opacity: 0, scale: 0.1 }}
      transition={{ duration: spark.duration, ease: [0.1, 0.6, 0.2, 1] }}
    />
  );
};