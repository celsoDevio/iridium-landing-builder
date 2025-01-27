import { Benefits } from "../components/Benefits";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { SocialMedia } from "../components/SocialMedia";

const TrainerPromotion = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Hero 
        title="Seja um Personal Trainer de Sucesso"
        subtitle="Transforme sua carreira e alcance mais clientes"
        buttonText="Comece Agora"
        imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
        tag="Junte-se a nós"
      />
      <Benefits />
      <About 
        title="Por que se juntar a nós?"
        subtitle="Descubra as vantagens de ser um personal trainer parceiro"
        content={[
          "Aumente sua visibilidade e alcance novos clientes",
          "Gerencie seus horários e agenda de forma eficiente",
          "Receba suporte e ferramentas para crescer seu negócio"
        ]}
        imageSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      />
      <Testimonials />
      <FAQ />
      <SocialMedia
        platforms={[
          { name: "Instagram", url: "#" },
          { name: "Facebook", url: "#" },
          { name: "LinkedIn", url: "#" },
        ]}
      />
    </div>
  );
};

export default TrainerPromotion;