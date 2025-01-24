import { motion } from "framer-motion";
import { Download } from "lucide-react";

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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952')] bg-cover bg-center opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comece a expandir seus negócios hoje
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de personal trainers que já estão transformando suas carreiras com nossa plataforma!
            </p>
            <button className="bg-white text-primary hover:bg-primary-light px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto gap-2">
              <Download className="w-5 h-5" />
              Cadastre-se Agora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};