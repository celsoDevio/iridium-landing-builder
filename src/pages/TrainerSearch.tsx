import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";

const TrainerSearch = () => {
  const heroProps = {
    title: "Encontre o Personal Trainer ideal para você",
    subtitle: "Conecte-se com profissionais qualificados e alcance seus objetivos",
    buttonText: "Buscar Personal",
    imageSrc: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    tag: "Para Alunos",
  };

  const benefitsData = [
    {
      title: "Personal Trainers Verificados",
      description: "Todos os profissionais são certificados e avaliados",
      icon: "Shield",
    },
    {
      title: "Agende Facilmente",
      description: "Marque aulas de acordo com sua disponibilidade",
      icon: "Calendar",
    },
    {
      title: "Preços Transparentes",
      description: "Veja valores e pacotes antes de contratar",
      icon: "DollarSign",
    },
    {
      title: "Acompanhamento Personalizado",
      description: "Receba treinos adaptados ao seu objetivo",
      icon: "Target",
    },
  ];

  const aboutProps = {
    title: "Transforme sua Saúde",
    subtitle: "Por que treinar com um Personal?",
    content: [
      "Um Personal Trainer dedicado fará toda diferença em sua jornada fitness. Com acompanhamento personalizado, você terá treinos específicos para seus objetivos, seja perda de peso, ganho de massa muscular ou melhora do condicionamento físico.",
      "Nossa plataforma conecta você aos melhores profissionais da sua região, com experiência comprovada e avaliações reais de outros alunos.",
    ],
    imageSrc: "https://images.unsplash.com/photo-1571388208497-71bedc66e932",
  };

  const testimonialData = [
    {
      name: "Ana Silva",
      role: "Aluna",
      content: "Encontrei um personal incrível que me ajudou a perder 15kg em 6 meses de forma saudável.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
      name: "Pedro Santos",
      role: "Aluno",
      content: "A plataforma me ajudou a achar um profissional que se adequou perfeitamente à minha rotina.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Carla Oliveira",
      role: "Aluna",
      content: "Já treino há 8 meses com meu personal e os resultados são surpreendentes!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  ];

  const faqData = [
    {
      question: "Como escolho um Personal Trainer?",
      answer: "Você pode filtrar por especialidade, preço, localização e ver avaliações de outros alunos para encontrar o profissional ideal.",
    },
    {
      question: "Quanto custa uma sessão?",
      answer: "Os valores variam de acordo com cada profissional e pacote escolhido. Você pode ver os preços no perfil de cada personal.",
    },
    {
      question: "Posso trocar de personal se não gostar?",
      answer: "Sim! Você tem total liberdade para escolher outro profissional que melhor atenda suas necessidades.",
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Os pagamentos são processados de forma segura através da plataforma, com várias opções disponíveis.",
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

export default TrainerSearch;