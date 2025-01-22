import { motion } from "framer-motion";
import { Users } from "lucide-react";

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
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6">
            Conectando Saúde e Tecnologia
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
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Nossa Missão</h3>
            <p className="text-gray-300 leading-relaxed">
              Nascemos com o propósito de democratizar o acesso a profissionais qualificados de educação física. 
              Nossa plataforma conecta pessoas que buscam uma vida mais saudável com os melhores personal trainers, 
              tornando o processo de encontrar o profissional ideal simples e seguro.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Com anos de experiência no mercado fitness, desenvolvemos uma solução que atende às necessidades 
              tanto dos alunos quanto dos profissionais, criando uma comunidade engajada e comprometida com resultados.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155"
              alt="Equipe de Trabalho"
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