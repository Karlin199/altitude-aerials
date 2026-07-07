"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;
  image: string;
  title: string;
  category: string;
  location: string;
  description: string;
  onClose: () => void;
};

export default function PortfolioLightbox({
  open,
  image,
  title,
  category,
  location,
  description,
  onClose,
}: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur-lg"
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative w-full max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950 shadow-[0_40px_100px_rgba(0,0,0,.65)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 text-2xl text-white transition-all duration-300 hover:rotate-90 hover:border-[var(--brand-gold)] hover:bg-[var(--brand-gold)] hover:text-black"
            >
              ✕
            </button>

            <div className="grid lg:grid-cols-[2fr_1fr]">

              <div className="relative aspect-video bg-black">

                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-contain"
                  priority
                />

              </div>

              <div className="flex flex-col justify-center p-10">

                <span
                  className="mb-6 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{
                    background: "rgba(212,175,55,.15)",
                    color: "var(--brand-gold)",
                  }}
                >
                  {category}
                </span>

                <h2 className="text-4xl font-bold text-white">
                  {title}
                </h2>

                <p className="mt-6 text-zinc-400">
                  📍 {location}
                </p>

                <p className="mt-8 leading-8 text-zinc-300">
                  {description}
                </p>

              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}