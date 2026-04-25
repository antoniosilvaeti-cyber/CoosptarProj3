import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Vocês atendem apenas na Capital de São Paulo?",
      a: "Não. Atendemos toda a Capital, a Grande São Paulo e também oferecemos serviços para fora da capital sob consulta de tabela de preços."
    },
    {
      q: "O serviço funciona de final de semana?",
      a: "Sim! Funcionamos 24 horas, de segunda a segunda-feira, mediante agendamento com hora marcada para garantir que sua necessidade seja atendida."
    },
    {
      q: "A empresa é legalizada e os entregadores são registrados?",
      a: "Completamente. Estamos há mais de 9 anos no mercado atuando dentro de todas as normas da regulamentação de moto frete para garantir segurança jurídica e fiscal aos nossos clientes contrantes."
    },
    {
      q: "Quais tipos de itens vocês entregam?",
      a: "Entregamos documentos (malotes, cartórios, bancos), pequenos volumes, insumos para farmácias, restaurantes, autopeças e muito mais. Entre em contato se tiver dúvida sobre um item específico."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Dúvidas Frequentes</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Perguntas Comuns
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-gray-900 text-lg">{faq.q}</span>
                <ChevronDown 
                  className={`text-brand-red transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
