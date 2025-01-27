import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  data?: FAQItem[];
}

const defaultFaqs = [
  {
    question: "Como funciona o cadastro na plataforma?",
    answer: "O cadastro é simples e rápido. Você precisa fornecer seus dados profissionais, certificações e criar seu perfil. Após a verificação das informações, você já pode começar a receber alunos.",
  },
  {
    question: "Quanto custa usar a plataforma?",
    answer: "Trabalhamos com um modelo de comissão por aluno. Você só paga quando receber novos alunos através da plataforma. Não há taxas mensais fixas.",
  },
  {
    question: "Como funciona o sistema de pagamentos?",
    answer: "Os pagamentos são processados automaticamente através da plataforma. Você recebe diretamente na sua conta, com total segurança e transparência.",
  },
  {
    question: "Posso definir minha própria agenda?",
    answer: "Sim, você tem total controle sobre sua agenda e horários disponíveis. Pode atualizar sua disponibilidade a qualquer momento.",
  },
  {
    question: "Como faço para me destacar na plataforma?",
    answer: "Mantenha seu perfil atualizado, compartilhe resultados dos seus alunos e peça avaliações. Quanto mais ativo e bem avaliado, mais visibilidade você terá.",
  },
];

export const FAQ = ({ data = defaultFaqs }: FAQProps) => {
  const faqs = data;

  return (
    <section className="py-20 px-4 bg-secondary-light text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium inline-block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6">
            Dúvidas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};