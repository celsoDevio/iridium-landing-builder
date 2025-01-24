import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, UserCog, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <div className="container mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bem-vindo ao <span className="text-primary">Personal App</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Escolha seu perfil para continuar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Link to="/buscar-personal">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-xl bg-secondary-light hover:bg-secondary-light/90 transition-all duration-300 text-center cursor-pointer"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Buscar Personal
              </h2>
              <p className="text-gray-300">
                Encontre o personal trainer ideal para seus objetivos
              </p>
            </motion.div>
          </Link>

          <Link to="/para-personal">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-xl bg-secondary-light hover:bg-secondary-light/90 transition-all duration-300 text-center cursor-pointer"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCog className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Área do Personal
              </h2>
              <p className="text-gray-300">
                Promova seus serviços e encontre novos alunos
              </p>
            </motion.div>
          </Link>

          <Link to="/para-influencer">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-xl bg-secondary-light hover:bg-secondary-light/90 transition-all duration-300 text-center cursor-pointer"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Para Influencers
              </h2>
              <p className="text-gray-300">
                Monetize sua audiência e expanda sua marca
              </p>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;