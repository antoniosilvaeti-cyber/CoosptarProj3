import { motion } from 'framer-motion';
import { Bike, PackageOpen, Map } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Bike size={40} className="text-brand-red" />,
      title: "Moto Frete Corporativo",
      desc: "Entregas rápidas de documentos e pequenos volumes de um ponto a outro da cidade. Inclui serviços bancários, cartórios, despachos e retiradas em aeroportos.",
      image: "/images/moto-frete.png"
    },
    {
      icon: <PackageOpen size={40} className="text-brand-orange" />,
      title: "Delivery Integrado",
      desc: "Se sua empresa tem um grande volume de encomendas leves, implantamos um serviço de delivery com o melhor custo-benefício. Ideal para Farmácias, Restaurantes e Auto Peças.",
      image: "/images/delivery.png"
    },
    {
      icon: <Map size={40} className="text-brand-red" />,
      title: "Entregas Fora da Capital",
      desc: "Levamos sua encomenda para além de São Paulo com segurança e tabelas de preços competitivas. Consulte nossa área de cobertura expandida.",
      image: "/images/hero-bg.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Nossos Serviços</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Soluções completas para sua logística
          </h3>
          <p className="text-gray-600 text-lg">
            Oferecemos uma gama de soluções para garantir que seu produto ou documento chegue ao destino no tempo certo.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-10 right-8 bg-white p-4 rounded-2xl shadow-lg">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
