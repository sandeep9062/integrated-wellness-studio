import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pillarClinical from "@/assets/pillar-clinical.jpg";
import { Activity, ArrowRight, Heart } from "lucide-react";

const PillarClinical = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-background px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src={pillarClinical}
              alt="Modern clinical rehabilitation room with warm natural lighting"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-8">
            <h2 className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
              Clinical Rehabilitation
            </h2>
            <p className="font-sans text-lg leading-relaxed text-muted-foreground">
              Precision-guided recovery through evidence-based physiotherapy and
              compassionate specialized care.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-foreground">
                    Physiotherapy
                  </h4>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">
                    Movement restoration & functional recovery
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-foreground">
                    Sensitive Care
                  </h4>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">
                    Gentle, respectful approach to specialized recovery
                  </p>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-widest text-primary transition-colors hover:text-foreground"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PillarClinical;
