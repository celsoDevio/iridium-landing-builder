import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-primary-light to-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium inline-block">
            <Dumbbell className="w-4 h-4 inline-block mr-2" />
            Seu Personal Trainer Ideal
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary">
            Encontre o <span className="text-primary">personal trainer</span> perfeito para você
          </h1>
          <p className="text-secondary-light text-lg md:text-xl max-w-xl">
            Conectamos você aos melhores personal trainers da sua região, com experiência comprovada e avaliações reais.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
            Baixe o App Agora
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
            alt="Personal Trainer"
            className="rounded-2xl shadow-2xl w-full object-cover"
            style={{ height: "600px" }}
          />
          <div className="absolute inset-0 bg-primary/10 rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
};