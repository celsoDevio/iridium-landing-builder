import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";

const TrainerPromotion = () => {
  const heroProps = {
    title: "Expanda sua carreira como Personal Trainer",
    subtitle: "Aumente sua base de alunos e gerencie seu negócio em um só lugar",
    buttonText: "Começar Agora",
    imageSrc: "https://images.unsplash.com/photo-1571388208497-71bedc66e932",
    tag: "Para Personal Trainers",
  };

  const benefitsData = [
    {
      title: "Mais Visibilidade",
      description: "Alcance milhares de alunos em potencial na sua região",
      icon: "Users",
    },
    {
      title: "Gestão Simplificada",
      description: "Organize seus horários e agenda de forma eficiente",
      icon: "Calendar",
    },
    {
      title: "Pagamentos Seguros",
      description: "Receba seus pagamentos de forma rápida e segura",
      icon: "DollarSign",
    },
    {
      title: "Crescimento Profissional",
      description: "Ferramentas para expandir seu negócio",
      icon: "TrendingUp",
    },
  ];

  const aboutProps = {
    title: "Potencialize seu Negócio",
    subtitle: "Por que usar nossa plataforma?",
    content: [
      "Nossa plataforma foi desenvolvida pensando nas necessidades dos personal trainers modernos. Com ferramentas intuitivas para gestão de alunos, agenda e pagamentos.",
      "Aumente sua visibilidade online, construa sua reputação e expanda sua base de clientes de forma sustentável.",
    ],
    imageSrc: "https://images.unsplash.com/photo-1571388208497-71bedc66e932",
  };

  const testimonialData = [
    {
      name: "Ricardo Almeida",
      role: "Personal Trainer",
      content: "Dobrei minha base de alunos em 3 meses usando a plataforma.",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
    },
    {
      name: "Amanda Santos",
      role: "Personal Trainer",
      content: "A gestão automatizada me permite focar no que realmente importa: meus alunos.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Paulo Costa",
      role: "Personal Trainer",
      content: "Melhor decisão que tomei para minha carreira como personal.",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    },
  ];

  const faqData = [
    {
      question: "Como funciona o cadastro?",
      answer: "O processo é simples: cadastre seus dados, certificações e crie seu perfil profissional. Após a verificação, você já pode começar a receber alunos.",
    },
    {
      question: "Quanto custa usar a plataforma?",
      answer: "Trabalhamos com um modelo de comissão por aluno. Você só paga quando receber novos alunos através da plataforma.",
    },
    {
      question: "Como recebo os pagamentos?",
      answer: "Os pagamentos são processados automaticamente e transferidos para sua conta bancária com total segurança.",
    },
    {
      question: "Posso definir meus horários?",
      answer: "Sim, você tem total controle sobre sua agenda e disponibilidade.",
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

export default TrainerPromotion;