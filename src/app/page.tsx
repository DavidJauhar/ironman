import Hero from "@/components/Hero";
import TrainingData from "@/components/TrainingData";
import NutritionPlan from "@/components/NutritionPlan";
import MediaSection from "@/components/MediaSection";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import Philanthropy from "@/components/Philanthropy";
import InteractiveFeature from "@/components/InteractiveFeature";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrainingData />
      <NutritionPlan />
      <MediaSection />
      <Testimonials />
      <InstagramFeed />
      <Philanthropy />
      <InteractiveFeature />
    </main>
  );
}
