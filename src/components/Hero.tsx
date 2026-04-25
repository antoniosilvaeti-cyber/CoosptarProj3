import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="Entregador de moto em ambiente urbano" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 text-white border border-brand-red/30 text-sm font-semibold mb-6">
              <Clock size={16} /> Serviço 24 Horas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Agilize as <span className="text-brand-red">entregas</span> da sua empresa agora mesmo.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Há mais de 9 anos no mercado de São Paulo oferecendo excelência em Moto Frete e Delivery estratégico com pontualidade e segurança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(255,102,0,0.3)] hover:shadow-[0_0_30px_rgba(255,102,0,0.5)] border border-orange-500/50"
              >
                Solicitar Coleta Rápida <ArrowRight size={20} />
              </a>
              <a 
                href="#services" 
                className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all border border-white/10"
              >
                Ver Serviços
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, marginTop: 40 }}
            animate={{ opacity: 1, marginTop: 48 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-8 text-gray-400 text-sm font-medium mt-12"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white mb-1">+9</span>
              <span>Anos de Experiência</span>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white mb-1">24h</span>
              <span>Atendimento Direto</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
