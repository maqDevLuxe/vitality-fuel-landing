import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturedIn from "@/components/landing/FeaturedIn";
import AIMealPlanning from "@/components/landing/AIMealPlanning";
import HealthMetrics from "@/components/landing/HealthMetrics";
import SmartGrocery from "@/components/landing/SmartGrocery";
import RecipeDatabase from "@/components/landing/RecipeDatabase";
import DietitianSupport from "@/components/landing/DietitianSupport";
import LifestylePromo from "@/components/landing/LifestylePromo";
import Counters from "@/components/landing/Counters";
import NutritionBlog from "@/components/landing/NutritionBlog";
import SyncWearables from "@/components/landing/SyncWearables";
import TransformationReviews from "@/components/landing/TransformationReviews";
import DownloadCTAFooter from "@/components/landing/DownloadCTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedIn />
      <AIMealPlanning />
      <HealthMetrics />
      <SmartGrocery />
      <RecipeDatabase />
      <DietitianSupport />
      <LifestylePromo />
      <Counters />
      <NutritionBlog />
      <SyncWearables />
      <TransformationReviews />
      <DownloadCTAFooter />
    </div>
  );
};

export default Index;
