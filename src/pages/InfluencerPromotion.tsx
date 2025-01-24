import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";

const InfluencerPromotion = () => {
  const heroProps = {
    title: "Monetize sua Audiência no Mundo Fitness",
    subtitle: "Transforme seus seguidores em uma fonte de renda recorrente",
    buttonText: "Seja um Parceiro",
    imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    tag: "Para Influenciadores",
  };

  const benefitsData = [
    {
      title: "Renda Recorrente",
      description: "Ganhe por cada aluno que se cadastrar com seu código",
      icon: "DollarSign",
    },
    {
      title: "Dashboard Exclusivo",
      description: "Acompanhe suas métricas e resultados em tempo real",
      icon: "BarChart",
    },
    {
      title: "Suporte Dedicado",
      description: "Time especializado para ajudar no seu sucesso",
      icon: "Headphones",
    },
    {
      title: "Material Promocional",
      description: "Acesso a conteúdos prontos para suas redes",
      icon: "Image",
    },
  ];

  const aboutProps = {
    title: "Programa de Parceiros",
    subtitle: "Como funciona?",
    content: [
      "Nosso programa de parceiros foi desenvolvido para criadores de conteúdo fitness que querem monetizar sua audiência de forma ética e sustentável.",
      "Conecte seus seguidores a personal trainers qualificados e ganhe comissões recorrentes por cada matrícula realizada.",
    ],
    imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
  };

  const testimonialData = [
    {
      name: "Julia Mendes",
      role: "Influenciadora Fitness",
      content: "Já indiquei mais de 100 alunos e a satisfação é garantida!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Thiago Lima",
      role: "Creator Fitness",
      content: "A melhor forma de monetizar minha audiência de forma sustentável.",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    },
    {
      name: "Fernanda Costa",
      role: "Influenciadora",
      content: "O suporte da plataforma faz toda diferença no sucesso das campanhas.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ];

  const faqData = [
    {
      question: "Como funciona a comissão?",
      answer: "Você recebe uma porcentagem de cada matrícula realizada através do seu código de influenciador.",
    },
    {
      question: "Preciso ter formação em educação física?",
      answer: "Não, você só precisa ter uma audiência engajada no nicho fitness/saúde.",
    },
    {
      question: "Como recebo meus ganhos?",
      answer: "Os pagamentos são realizados mensalmente através de transferência bancária.",
    },
    {
      question: "Existe exclusividade?",
      answer: "Não exigimos exclusividade, você pode participar de outros programas de parceria.",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Hero {...heroProps} />
      <Benefits data={benefitsData} />
      <About {...aboutProps} />
      <Testimonials data={testimonialData} />
      <FAQ data={faqData} />
      <Contact />
      <CTA />
    </div>
  );
};

export default InfluencerPromotion;