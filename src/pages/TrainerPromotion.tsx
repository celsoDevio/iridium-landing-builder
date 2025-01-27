import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { SocialMedia } from "@/components/SocialMedia";

const TrainerPromotion = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Hero 
        title="Seja um Personal Trainer de Sucesso"
        subtitle="Transforme sua carreira e alcance mais clientes"
        buttonText="Comece Agora"
        imageSrc="/placeholder.svg"
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
        imageSrc="/placeholder.svg"
      />
      <Testimonials />
      <FAQ />
      <SocialMedia
        title="Conecte-se Conosco"
        subtitle="Siga nossas redes sociais e fique por dentro das novidades para Personal Trainers"
        socialLinks={{
          facebook: "https://facebook.com/fitconnect.personal",
          instagram: "https://instagram.com/fitconnect.personal",
          youtube: "https://youtube.com/fitconnect.personal",
          twitter: "https://twitter.com/fitconnect.personal"
        }}
      />
      <Contact />
      <CTA />
    </div>
  );
};

export default TrainerPromotion;