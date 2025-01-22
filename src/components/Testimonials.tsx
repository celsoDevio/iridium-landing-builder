import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Estudante",
    content:
      "A metodologia é incrível! Em apenas 6 meses já consigo me comunicar em inglês com confiança.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Pedro Santos",
    role: "Profissional",
    content:
      "O método personalizado fez toda diferença no meu aprendizado. Recomendo muito!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    name: "Maria Costa",
    role: "Empresária",
    content:
      "Finalmente encontrei um método que se adapta à minha rotina corrida.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-primary-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-white text-primary rounded-full text-sm font-medium inline-block">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-6">
            O que nossos alunos dizem
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-current"
                  />
                ))}
              </div>
              <p className="text-secondary-light mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-secondary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-secondary-light">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};