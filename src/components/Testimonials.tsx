import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  image: string;
}

interface TestimonialsProps {
  data?: TestimonialItem[];
}

const defaultTestimonials = [
  {
    name: "Ricardo Almeida",
    role: "Personal Trainer",
    content:
      "Desde que comecei a usar o app, minha agenda está sempre cheia e consigo gerenciar meus alunos de forma muito mais eficiente.",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
  },
  {
    name: "Amanda Santos",
    role: "Personal Trainer",
    content:
      "A plataforma me ajudou a conquistar novos alunos e organizar melhor minha rotina de trabalho.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Paulo Costa",
    role: "Personal Trainer",
    content:
      "O sistema de pagamentos e agendamentos é excelente. Reduziu muito minha dor de cabeça com a parte administrativa.",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
  },
];

export const Testimonials = ({ data = defaultTestimonials }: TestimonialsProps) => {
  const testimonials = data;

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
            O que dizem os profissionais
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