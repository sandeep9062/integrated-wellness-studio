import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-espresso px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-vanilla">
              The Integrated Wellness Hub
            </h3>
            <p className="mt-4 font-sans text-sm leading-relaxed text-vanilla/60">
              Where science meets spirit for complete healing.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-vanilla/40">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 font-sans text-sm text-vanilla/70 transition-colors hover:text-vanilla"
              >
                <Mail className="h-4 w-4" />
                hello@wellnesshub.com
              </a>
              <a
                href="#"
                className="flex items-center gap-3 font-sans text-sm text-vanilla/70 transition-colors hover:text-vanilla"
              >
                <Phone className="h-4 w-4" />
                +1 (555) 000-0000
              </a>
              <a
                href="#"
                className="flex items-center gap-3 font-sans text-sm text-vanilla/70 transition-colors hover:text-vanilla"
              >
                <MapPin className="h-4 w-4" />
                123 Healing Way, Serenity
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 md:items-end">
            <button className="rounded-full border border-vanilla/20 px-6 py-3 font-sans text-xs font-medium uppercase tracking-widest text-vanilla transition-all hover:border-burnt-orange hover:bg-burnt-orange hover:text-vanilla">
              Generate Token
            </button>
          </div>
        </div>
        <div className="mt-16 border-t border-vanilla/10 pt-8">
          <p className="font-sans text-xs text-vanilla/30">
            © 2026 The Integrated Wellness Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
