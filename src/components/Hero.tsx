"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-triathlon.jpg"
          alt="Triathlon athlete"
          fill
          className="object-cover object-center brightness-90"
          priority
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-5"></div>

      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl font-medium mb-2 tracking-wider text-white/90"
            >
              THE JOURNEY BEGINS
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none"
            >
              IRONMAN <br />
              <span className="text-5xl md:text-6xl lg:text-7xl">
                70.3 FLORIANÓPOLIS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl max-w-2xl mb-10 text-white/90"
            >
              Every stroke, pedal, and stride brings me closer to the finish
              line.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#training"
                className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors inline-block"
              >
                FOLLOW MY TRAINING
              </a>
              <a
                href="#philanthropy"
                className="px-8 py-4 border-2 border-white rounded-full font-bold hover:bg-white hover:text-black transition-colors inline-block"
              >
                SUPPORT MY JOURNEY
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
