import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  imageSrc: string;
  tag: string;
}

export const Hero = ({ title, subtitle, buttonText, imageSrc, tag }: HeroProps) => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl">{subtitle}</p>
        <Button className="mt-6">{buttonText}</Button>
        <span className="mt-4 text-sm">{tag}</span>
      </div>
    </section>
  );
};
