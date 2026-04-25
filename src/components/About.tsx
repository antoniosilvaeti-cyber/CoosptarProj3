import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck } from 'lucide-react';

export default function About() {
  const diffs = [
    {
      icon: <Zap className="text-brand-orange" size={28} />,
      title: "Agilidade Comprovada",
      desc: "Nossa principal missão é tornar sua logística invisível de tão rápida."
    },
    {
      icon: <ShieldCheck className="text-brand-red" size={28} />,
      title: "Segurança Total",
      desc: "Lidamos com despachos bancários e aeroportos com extrema responsabilidade."
    },
    {
      icon: <Target className="text-brand-red" size={28} />,
      title: "Foco no Cliente",
      desc: "Disponibilizamos suporte 24 horas, de segunda a segunda, mediante agendamento."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Quem Somos</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                A extensão da sua empresa <br/>nas ruas de São Paulo.
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                A <strong>Coopstar Express</strong> é uma empresa especializada no serviço de entregas e coletas que vem atuando há mais de nove anos no mercado. 
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Desempenhamos uma função vital: Agilizar os mais diversos serviços para que você mantenha o foco no seu negócio. Atendemos a Capital e a Grande São Paulo com uma equipe preparada para suprir sua demanda.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {diffs.map((diff, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      {diff.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{diff.title}</h4>
                      <p className="text-sm text-gray-500">{diff.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Image/Graphic */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-video lg:aspect-square"
            >
              <img 
                src="/images/moto-frete.png" 
                alt="Equipe Coopstar Express" 
                className="w-full h-full object-cover"
              />
              {/* Highlight badge overlay */}
              <div className="absolute bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px] ml-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="font-bold text-gray-900 text-xl">100%</div>
                </div>
                <div className="text-sm text-gray-600 font-medium">Entregas Garantidas Todos os Dias</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
