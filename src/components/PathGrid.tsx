import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import pathPhysio from "@/assets/path-physio.jpg";
import pathFace from "@/assets/path-face.jpg";
import pathRecovery from "@/assets/path-recovery.jpg";
import pathYoga from "@/assets/path-yoga.jpg";

const paths = [
  {
    title: "Physiotherapy",
    subtitle: "Clinical Rehabilitation",
    image: pathPhysio,
    alt: "Balanced stones representing physiotherapy and body alignment",
  },
  {
    title: "Face & Soul",
    subtitle: "Reading & Regression",
    image: pathFace,
    alt: "Close-up eye portrait representing face reading and soul connection",
  },
  {
    title: "Specialized Recovery",
    subtitle: "Compassionate Care",
    image: pathRecovery,
    alt: "Healing light in hands representing specialized recovery therapy",
  },
  {
    title: "Yoga Sanctuary",
    subtitle: "Sahaja Meditation",
    image: pathYoga,
    alt: "Silhouette in meditation pose at golden sunset",
  },
];

const PathCard = ({
  path,
  index,
}: {
  path: (typeof paths)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl"
    >
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img
          src={path.image}
          alt={path.alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-amber/20 to-transparent transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <h3 className="font-serif text-2xl font-semibold text-vanilla md:text-3xl">
          {path.title}
        </h3>
        <p className="mt-1 font-sans text-sm font-light tracking-wide text-vanilla/80">
          {path.subtitle}
        </p>
      </div>
    </motion.div>
  );
};

const PathGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="paths" className="bg-background px-6 py-24 md:px-12 lg:px-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
          Choose Your Path
        </h2>
      </motion.div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {paths.map((path, i) => (
          <PathCard key={path.title} path={path} index={i} />
        ))}
      </div>
    </section>
  );
};

export default PathGrid;
