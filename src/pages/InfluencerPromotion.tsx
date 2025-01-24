import { motion } from "framer-motion";
import { Camera, Star, Share2, TrendingUp } from "lucide-react";

const InfluencerPromotion = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-primary-light to-white">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium inline-block">
              Para Influenciadores Fitness
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-secondary">
              Monetize sua <span className="text-primary">influência</span>
            </h1>
            <p className="text-secondary-light text-lg md:text-xl max-w-xl">
              Transforme seus seguidores em clientes e expanda sua marca pessoal no mundo fitness.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Seja um Parceiro
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
              alt="Influencer Fitness"
              className="rounded-2xl shadow-2xl w-full object-cover"
              style={{ height: "600px" }}
            />
            <div className="absolute inset-0 bg-primary/10 rounded-2xl" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Camera,
                title: "Conteúdo Exclusivo",
                description: "Compartilhe seu conhecimento e experiência",
              },
              {
                icon: Star,
                title: "Programa de Parceria",
                description: "Benefícios exclusivos para influenciadores",
              },
              {
                icon: Share2,
                title: "Alcance Maior",
                description: "Expanda sua audiência na plataforma",
              },
              {
                icon: TrendingUp,
                title: "Novas Receitas",
                description: "Monetize sua base de seguidores",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfluencerPromotion;