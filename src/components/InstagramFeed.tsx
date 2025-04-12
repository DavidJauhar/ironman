"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const instagramPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    caption: "Early morning swim session 🌅 #IronmanTraining",
    likes: 245,
    comments: 12,
    date: "2 days ago",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    caption: "New personal best on the bike! 🚴‍♂️ #Progress",
    likes: 312,
    comments: 18,
    date: "3 days ago",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    caption: "Recovery day essentials 🧘‍♂️ #RestDay",
    likes: 189,
    comments: 8,
    date: "4 days ago",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1532465614-6cc8d45f647f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    caption: "Nutrition prep for the week 🥗 #FuelYourBody",
    likes: 276,
    comments: 15,
    date: "5 days ago",
  },
];

export default function InstagramFeed() {
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
          <div className="flex items-center justify-center gap-2 mb-12">
            <FaInstagram className="text-pink-600 text-3xl" />
            <h2 className="text-3xl font-bold">Instagram Feed</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramPosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="relative aspect-square">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="text-white text-center p-4">
                      <p className="font-medium mb-2">{post.caption}</p>
                      <div className="flex items-center justify-center gap-4 text-sm">
                        <span>{post.likes} likes</span>
                        <span>{post.comments} comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{post.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <FaInstagram />
              Follow My Journey
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
