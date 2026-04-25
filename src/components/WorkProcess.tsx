import { motion } from 'framer-motion';
import { PhoneCall, CalendarCheck, MapPin, CheckCircle } from 'lucide-react';

export default function WorkProcess() {
  const steps = [
    {
      icon: <PhoneCall size={32} />,
      title: "1. Contato",
      desc: "Ligue ou envie uma mensagem para nossa central de atendimento solicitando o serviço."
    },
    {
      icon: <CalendarCheck size={32} />,
      title: "2. Agendamento",
      desc: "Definimos o melhor horário para coleta, seja para um pedido único ou rota diária."
    },
    {
      icon: <MapPin size={32} />,
      title: "3. Coleta",
      desc: "Nosso motofretista parceiro retira sua encomenda ou documento no local combinado."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "4. Entrega",
      desc: "A entrega é realizada com segurança, rapidez e confirmação imediata para você."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Como Funciona</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Um processo simples e direto
          </h3>
          <p className="text-gray-600 text-lg">
            Sem burocracia. Veja como é fácil resolver o seu problema de logística com a Coopstar Express.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[12%] right-[12%] h-[2px] bg-gray-100 border-t border-dashed border-gray-300 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 shadow-xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white group-hover:-translate-y-2 transition-all duration-300 mb-6 font-bold">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-gray-600 px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
