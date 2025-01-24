import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";

const TrainerPromotion = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Hero />
      <Benefits />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
    </div>
  );
};

export default TrainerPromotion;