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
            Para Personal Trainers
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary">
            Expanda sua base de <span className="text-primary">alunos</span> com nossa plataforma
          </h1>
          <p className="text-secondary-light text-lg md:text-xl max-w-xl">
            Conecte-se com alunos em potencial, gerencie seus horários e aumente sua renda mensal com nossa plataforma especializada para personal trainers.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
            Comece Agora
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
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