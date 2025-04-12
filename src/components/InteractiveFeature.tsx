"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRunning, FaSwimmer, FaBiking } from "react-icons/fa";

const motivationalMessages = [
  {
    id: 1,
    icon: <FaRunning className="text-4xl" />,
    message: "Every step counts in your journey to greatness.",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 2,
    icon: <FaSwimmer className="text-4xl" />,
    message: "Dive deep into your potential and swim towards your dreams.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    icon: <FaBiking className="text-4xl" />,
    message: "Pedal through challenges and ride towards victory.",
    color: "from-green-500 to-emerald-500",
  },
];

export default function InteractiveFeature() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
    setCurrentMessage((prev) => (prev + 1) % motivationalMessages.length);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Find Your Motivation</h2>

          <div className="relative h-64">
            <AnimatePresence mode="wait">
              {isVisible && (
                <motion.div
                  key={currentMessage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r ${motivationalMessages[currentMessage].color} rounded-lg p-8`}
                >
                  {motivationalMessages[currentMessage].icon}
                  <p className="mt-4 text-xl font-medium">
                    {motivationalMessages[currentMessage].message}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="mt-8 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Inspired
          </motion.button>

          <p className="mt-4 text-gray-400 text-sm">
            Click the button to discover motivational messages for your training
            journey.
          </p>
        </div>
      </div>
    </section>
  );
}
