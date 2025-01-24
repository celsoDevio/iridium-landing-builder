import { motion } from "framer-motion";
import { Target } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-secondary text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium inline-block">
            Sobre a Plataforma
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6">
            Potencialize sua Carreira
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Nossa Proposta</h3>
            <p className="text-gray-300 leading-relaxed">
              Desenvolvemos uma plataforma completa pensando nas necessidades dos personal trainers modernos. 
              Com nossa solução, você pode gerenciar sua agenda, receber pagamentos, acompanhar o progresso 
              dos alunos e expandir sua base de clientes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Oferecemos ferramentas para você se destacar no mercado, criar seu perfil profissional, 
              compartilhar resultados e construir sua reputação online. Tudo isso em uma única plataforma 
              intuitiva e eficiente.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Personal Trainer em ação"
              className="rounded-2xl shadow-2xl w-full object-cover"
              style={{ height: "500px" }}
            />
            <div className="absolute inset-0 bg-primary/10 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};