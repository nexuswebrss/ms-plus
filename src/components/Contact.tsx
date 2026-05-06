import { motion } from 'motion/react';
import { FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Clock } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Logic for form submission could go here
    alert('Mensaje enviado con éxito. Nos pondremos en contacto pronto.');
  };

  return (
    <section id="contacto" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-green font-bold uppercase tracking-widest text-sm mb-4 block">Contacto</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-blue mb-8">
              Estamos Listos para <span className="text-accent-green">Escucharlo</span>
            </h2>
            <p className="text-text-muted text-lg mb-10 leading-relaxed">
              ¿Tiene alguna duda o necesita una propuesta personalizada? Nuestro equipo de expertos está a su disposición para asesorarlo en Pereira y todo el Eje Cafetero.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-accent-green/10 flex items-center justify-center text-accent-green transition-colors group-hover:bg-accent-green group-hover:text-white shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-primary-blue font-bold text-lg mb-1">Llámenos</h4>
                  <p className="text-text-muted font-medium">+57 310 523 1936</p>
                  <p className="text-text-muted text-sm italic">(Disponible con atención inmediata)</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-primary-blue transition-colors group-hover:bg-primary-blue group-hover:text-white shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-primary-blue font-bold text-lg mb-1">Escríbanos</h4>
                  <p className="text-text-muted font-medium">gerencia@misionplus.com.co</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 transition-colors group-hover:bg-slate-600 group-hover:text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-primary-blue font-bold text-lg mb-1">Visítenos</h4>
                  <p className="text-text-muted font-medium">Centro Comercial Fiducentro, Pereira, Risaralda</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-primary-blue font-bold text-lg mb-1">Horario de Atención</h4>
                  <p className="text-text-muted text-sm">Lunes a Viernes: 7:30 a. m. - 4:00 p. m.</p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter bg-red-50 text-red-500 border border-red-100">
                    Sábados y Domingos: Cerrado
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
               {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-accent-green hover:border-accent-green transition-all">
                    <Icon size={20} />
                 </a>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-primary-blue uppercase tracking-wider ml-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-accent-green/20 focus:border-accent-green outline-none transition-all placeholder:text-gray-300"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-primary-blue uppercase tracking-wider ml-1">Email Corporativo</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-accent-green/20 focus:border-accent-green outline-none transition-all placeholder:text-gray-300"
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-primary-blue uppercase tracking-wider ml-1">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-accent-green/20 focus:border-accent-green outline-none transition-all placeholder:text-gray-300"
                  placeholder="¿En qué podemos ayudarle?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-primary-blue uppercase tracking-wider ml-1">Mensaje</label>
                <textarea 
                  id="message" 
                  required 
                  rows={4}
                  className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-accent-green/20 focus:border-accent-green outline-none transition-all placeholder:text-gray-300 resize-none"
                  placeholder="Describa brevemente su requerimiento..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary-blue text-white font-bold uppercase tracking-widest text-sm py-5 rounded-xl shadow-lg hover:bg-secondary-blue transition-all flex items-center justify-center gap-3"
              >
                <Send size={18} />
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Floating map placeholder */}
        <div className="mt-24 rounded-3xl overflow-hidden h-[400px] border-8 border-gray-50 shadow-2xl relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.875604169728!2d-75.6961111!3d4.8144444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388748eb4199bd%3A0x6b1ec1f8e8b0934c!2sCc%20Fiducentro!5e0!3m2!1ses!2sco!4v1700680000000!5m2!1ses!2sco" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
