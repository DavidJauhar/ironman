"use client";

import { motion } from "framer-motion";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const videos = [
  {
    id: "video1",
    title: "Swimming Training Session",
    thumbnail:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    youtubeId: "YOUR_YOUTUBE_ID_1",
  },
  {
    id: "video2",
    title: "Cycling Long Ride",
    thumbnail:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    youtubeId: "YOUR_YOUTUBE_ID_2",
  },
  {
    id: "video3",
    title: "Running Interval Training",
    thumbnail:
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    youtubeId: "YOUR_YOUTUBE_ID_3",
  },
];

const reels = [
  {
    id: "reel1",
    title: "Morning Swim Session",
    thumbnail:
      "https://images.unsplash.com/photo-1600965962324-59e4df9c2c1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://instagram.com/p/YOUR_REEL_ID_1",
  },
  {
    id: "reel2",
    title: "Bike Maintenance Tips",
    thumbnail:
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://instagram.com/p/YOUR_REEL_ID_2",
  },
  {
    id: "reel3",
    title: "Race Day Preparation",
    thumbnail:
      "https://images.unsplash.com/photo-1628891890467-b79f2c8ba9dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://instagram.com/p/YOUR_REEL_ID_3",
  },
];

export default function MediaSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Training Videos & Reels
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <FaYoutube className="text-red-600" />
              YouTube Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((video) => (
                <motion.div
                  key={video.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <FaYoutube className="text-white text-4xl" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900">{video.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <FaInstagram className="text-pink-600" />
              Instagram Reels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reels.map((reel) => (
                <motion.a
                  key={reel.id}
                  href={reel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm block"
                >
                  <div className="relative aspect-[4/5]">
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <FaInstagram className="text-white text-4xl" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900">{reel.title}</h4>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://youtube.com/your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              <FaYoutube />
              Subscribe to My Channel
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
