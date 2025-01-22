import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-2xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comece sua jornada hoje mesmo
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Transforme seu futuro com um método revolucionário de ensino.
              Primeira aula gratuita!
            </p>
            <button className="bg-white text-primary hover:bg-primary-light px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Agende sua aula experimental
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};