import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info & Map Side */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Contato / Localização</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
              Fale conosco e agende sua coleta
            </h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-xl text-brand-red mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Endereço</h4>
                  <p className="text-gray-600">
                    Av. Jurucê, 898 - Moema<br/>
                    São Paulo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-xl text-brand-red mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Telefones</h4>
                  <p className="text-gray-600">
                    <strong>(11) 5052-3563</strong><br/>
                    (11) 5051-4442
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-xl text-brand-orange mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">E-mail</h4>
                  <p className="text-gray-600">
                    coopstar_express@hotmail.com
                  </p>
                </div>
              </div>
            </div>
            
            {/* Embedded Map PlaceHolder / Button 
                We can embed an iframe if needed or just styling for visualization 
            */}
            <div className="bg-gray-100 rounded-2xl h-[200px] w-full flex items-center justify-center overflow-hidden border border-gray-200">
              {/* Here we would place a Google Maps iframe, substituting the old mapa.php */}
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.349071060378!2d-46.6669931!3d-23.6062143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a0bad2fdf21%3A0xcfd6dc32dd10ceab!2sAv.%20Juruc%C3%AA%2C%20898%20-%20Indian%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004080-012!5e0!3m2!1spt-BR!2sbr!4v1689230129384!5m2!1spt-BR!2sbr" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 relative">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full -z-10"></div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma mensagem</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                  <input type="text" id="nome" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors" placeholder="Digite seu nome" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
                  <input type="email" id="email" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors" placeholder="seu@email.com" required />
                </div>
                <div>
                  <label htmlFor="assunto" className="block text-sm font-semibold text-gray-700 mb-2">Assunto</label>
                  <input type="text" id="assunto" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors" placeholder="Ex: Cotação de entrega" required />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                  <textarea id="mensagem" rows={4} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-colors resize-none" placeholder="Como podemos ajudar?" required></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                  Enviar Mensagem <Send size={18} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
