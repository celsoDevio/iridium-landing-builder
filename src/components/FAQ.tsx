import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o aplicativo?",
    answer: "Nosso app conecta você a personal trainers qualificados na sua região. Basta criar um perfil, definir suas preferências e objetivos, e começar a buscar por profissionais que atendam às suas necessidades.",
  },
  {
    question: "Como são selecionados os personal trainers?",
    answer: "Todos os profissionais passam por um rigoroso processo de verificação, incluindo validação de certificações e referências. Apenas os melhores são aceitos na plataforma.",
  },
  {
    question: "Quanto custa usar o aplicativo?",
    answer: "O download e cadastro no aplicativo são gratuitos. Os valores das sessões são definidos por cada personal trainer, e você pode ver os preços antes de agendar.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Oferecemos um sistema de pagamento seguro integrado ao aplicativo. Você pode pagar com cartão de crédito, débito ou PIX.",
  },
  {
    question: "Posso cancelar uma sessão?",
    answer: "Sim, você pode cancelar ou reagendar sessões com antecedência mínima de 24 horas sem custo adicional.",
  },
];

export const FAQ = () => {
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
            Perguntas Frequentes
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