import { motion } from "framer-motion";
import { Medal, Clock, Star, Shield } from "lucide-react";

const benefits = [
  {
    icon: Medal,
    title: "Profissionais Certificados",
    description: "Todos os personal trainers são certificados e verificados",
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Agende treinos de acordo com sua disponibilidade",
  },
  {
    icon: Star,
    title: "Avaliações Reais",
    description: "Veja avaliações de alunos reais antes de escolher",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Pagamentos seguros e garantia de satisfação",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium inline-block">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-6">
            Por que escolher nosso app?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {benefit.title}
              </h3>
              <p className="text-secondary-light">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};