import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pillarSpiritual from "@/assets/pillar-spiritual.jpg";
import { ArrowRight, Eye, Sparkles } from "lucide-react";

const PillarSpiritual = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-espresso px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          <div className="order-2 space-y-8 lg:order-1">
            <h2 className="font-serif text-4xl font-semibold text-vanilla md:text-5xl">
              Spiritual & Mind Healing
            </h2>
            <p className="font-sans text-lg leading-relaxed text-vanilla/70">
              Unlock the stories written on your face and the memories held in
              your soul.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-burnt-orange/20">
                  <Eye className="h-6 w-6 text-burnt-orange" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-vanilla">
                    Face Reading
                  </h4>
                  <p className="mt-1 font-sans text-sm text-vanilla/60">
                    Decode character, health & destiny through facial analysis
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-burnt-orange/20">
                  <Sparkles className="h-6 w-6 text-burnt-orange" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-vanilla">
                    Past Life Regression
                  </h4>
                  <p className="mt-1 font-sans text-sm text-vanilla/60">
                    Journey through time to heal the present
                  </p>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-widest text-burnt-orange transition-colors hover:text-amber"
            >
              Explore <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl lg:order-2">
            <img
              src={pillarSpiritual}
              alt="Face with golden geometric overlay representing face reading analysis"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PillarSpiritual;
