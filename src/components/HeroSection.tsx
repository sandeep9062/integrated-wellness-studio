import { motion } from "framer-motion";
import heroImage from "@/assets/hero-healing.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Healing stones arranged in a spiral pattern with warm candlelight"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          Heal. Discover. Transform.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8"
        >
          <a
            href="#paths"
            className="inline-block rounded-full bg-primary px-8 py-4 font-sans text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Begin Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
