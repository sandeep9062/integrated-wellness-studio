import HeroSection from "@/components/HeroSection";
import PathGrid from "@/components/PathGrid";
import PillarClinical from "@/components/PillarClinical";
import PillarSpiritual from "@/components/PillarSpiritual";
import PillarYoga from "@/components/PillarYoga";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PathGrid />
      <PillarClinical />
      <PillarSpiritual />
      <PillarYoga />
      <Footer />
    </main>
  );
};

export default Index;
