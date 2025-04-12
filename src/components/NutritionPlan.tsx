"use client";

import { motion } from "framer-motion";

const nutritionData = {
  daily: [
    {
      meal: "Breakfast",
      description: "Oatmeal with berries, nuts, and protein powder",
    },
    {
      meal: "Pre-Workout",
      description: "Banana and peanut butter on whole grain toast",
    },
    {
      meal: "Post-Workout",
      description: "Protein shake with almond milk and banana",
    },
    {
      meal: "Lunch",
      description: "Grilled chicken, quinoa, and mixed vegetables",
    },
    { meal: "Snack", description: "Greek yogurt with granola and honey" },
    {
      meal: "Dinner",
      description: "Salmon, sweet potato, and steamed broccoli",
    },
  ],
  supplements: [
    "Whey Protein",
    "BCAAs",
    "Electrolytes",
    "Omega-3",
    "Multivitamin",
    "Vitamin D",
  ],
};

export default function NutritionPlan() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Nutrition Plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Daily Meal Plan</h3>
              <div className="space-y-4">
                {nutritionData.daily.map((item, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <h4 className="font-medium text-gray-900">{item.meal}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Supplements</h3>
              <div className="grid grid-cols-2 gap-4">
                {nutritionData.supplements.map((supplement, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow-sm text-center"
                  >
                    <p className="text-gray-900">{supplement}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Nutrition Goals</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Daily Calories</span>
                    <span className="font-medium">3,500 kcal</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Protein</span>
                    <span className="font-medium">200g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Carbohydrates</span>
                    <span className="font-medium">450g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Fats</span>
                    <span className="font-medium">90g</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Hydration Strategy</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                Daily water intake: 3-4 liters, adjusted based on training
                intensity and weather conditions.
              </p>
              <p className="text-gray-600">
                Electrolyte supplementation during long training sessions and
                races.
              </p>
              <p className="text-gray-600">
                Regular hydration checks throughout the day to maintain optimal
                performance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
