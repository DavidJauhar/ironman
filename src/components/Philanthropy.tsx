"use client";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Philanthropy() {
  return (
    <section id="philanthropy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaHeart className="text-red-500 text-2xl" />
            <h2 className="text-3xl font-bold">Support My Journey</h2>
          </div>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join me in this incredible journey to Ironman 70.3 Florianópolis.
            Your support will help cover training expenses, equipment, and race
            fees, while also contributing to a greater cause.
          </p>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-2">
                  Current Progress
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">
                    $8,500
                  </span>
                  <span className="text-gray-600">raised of $10,000 goal</span>
                </div>
              </div>

              <div className="w-full md:w-64">
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ width: "85%" }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  85% of goal reached
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Training Support</h3>
              <p className="text-gray-600 text-sm">
                Help cover coaching fees, training equipment, and facility
                access.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Race Expenses</h3>
              <p className="text-gray-600 text-sm">
                Support travel, accommodation, and race registration costs.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Charity Impact</h3>
              <p className="text-gray-600 text-sm">
                20% of all funds raised will be donated to local youth sports
                programs.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="https://your-crowdfunding-platform.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              <FaHeart />
              Support Now
            </a>

            <p className="text-sm text-gray-600">
              All supporters will receive exclusive updates and
              behind-the-scenes content.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
