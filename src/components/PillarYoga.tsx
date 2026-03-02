import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pillarYoga from "@/assets/pillar-yoga.jpg";
import { ArrowRight, Sun } from "lucide-react";

const chakras = [
  { name: "Root", color: "bg-red-500" },
  { name: "Sacral", color: "bg-orange-400" },
  { name: "Solar", color: "bg-yellow-400" },
  { name: "Heart", color: "bg-green-400" },
  { name: "Throat", color: "bg-sky-400" },
  { name: "Third Eye", color: "bg-indigo-400" },
  { name: "Crown", color: "bg-violet-400" },
];

const PillarYoga = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
            Yoga Sanctuary
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-lg text-muted-foreground">
            Awaken your inner energy through the ancient practice of Sahaja Yoga
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid items-center gap-12 lg:grid-cols-2"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={pillarYoga}
              alt="Yoga practitioner with illuminated chakra energy centers"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Sun className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-medium text-foreground">
                  Energy Centers
                </h4>
                <p className="mt-1 font-sans text-sm text-muted-foreground">
                  Balance and activate your seven chakras through guided meditation
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {chakras.map((chakra, i) => (
                <motion.div
                  key={chakra.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${chakra.color} animate-glow-pulse`}
                  />
                  <span className="font-sans text-xs font-medium text-foreground">
                    {chakra.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-widest text-primary transition-colors hover:text-foreground"
            >
              Enter the Sanctuary <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PillarYoga;
