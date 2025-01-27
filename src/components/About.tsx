import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface AboutProps {
  title: string;
  subtitle: string;
  content: string[];
  imageSrc: string;
}

export const About = ({ title, subtitle, content, imageSrc }: AboutProps) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            {title}
          </h2>
          <p className="text-secondary-light mt-4">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src={imageSrc}
              alt={title}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            {content.map((paragraph, index) => (
              <p key={index} className="text-secondary-light mb-4">
                {paragraph}
              </p>
            ))}
            <Button className="mt-4">Saiba Mais</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
