"use client";

import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const trainingData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
  datasets: [
    {
      label: "Swimming (km)",
      data: [2, 2.5, 3, 3.5, 4, 4.5],
      borderColor: "rgb(59, 130, 246)",
      tension: 0.1,
    },
    {
      label: "Cycling (km)",
      data: [40, 45, 50, 55, 60, 65],
      borderColor: "rgb(16, 185, 129)",
      tension: 0.1,
    },
    {
      label: "Running (km)",
      data: [15, 17, 19, 21, 23, 25],
      borderColor: "rgb(239, 68, 68)",
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Training Progress",
    },
  },
};

export default function TrainingData() {
  return (
    <section id="training" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Training Data</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Swimming</h3>
              <p className="text-gray-600">Current Pace: 1:45/100m</p>
              <p className="text-gray-600">Weekly Distance: 4.5km</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Cycling</h3>
              <p className="text-gray-600">Average Speed: 30km/h</p>
              <p className="text-gray-600">Weekly Distance: 65km</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Running</h3>
              <p className="text-gray-600">Pace: 5:00/km</p>
              <p className="text-gray-600">Weekly Distance: 25km</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Line options={options} data={trainingData} />
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Weekly Schedule</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Monday</span>
                <span className="text-gray-600">Swim: 2km, Run: 5km</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Tuesday</span>
                <span className="text-gray-600">Bike: 30km, Strength</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Wednesday</span>
                <span className="text-gray-600">Swim: 2km, Run: 8km</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Thursday</span>
                <span className="text-gray-600">Bike: 40km</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Friday</span>
                <span className="text-gray-600">Swim: 1.5km, Run: 5km</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Saturday</span>
                <span className="text-gray-600">Long Bike: 60km</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Sunday</span>
                <span className="text-gray-600">Long Run: 15km</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
