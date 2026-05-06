import { Mail, Phone, MapPin, ArrowUp, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative pulse for the background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-green/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-10 h-10">
                <div className="bg-accent-green rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
                <div className="bg-secondary-blue rounded-sm"></div>
                <div className="bg-white/20 rounded-sm"></div>
              </div>
              <span className="text-2xl font-display font-bold text-white uppercase tracking-tight">Misión Plus</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 pr-6">
              Soluciones integrales en administración de talento humano y nómina en la ciudad de Pereira. Eficiencia y cumplimiento a su servicio.
            </p>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-display font-bold text-lg mb-8 uppercase tracking-widest text-sm underline decoration-accent-green underline-offset-8">Enlaces</h4>
            <ul className="space-y-4">
              {['Inicio', 'Sobre Nosotros', 'Servicios', 'Beneficios', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-accent-green transition-all group-hover:w-4"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-display font-bold text-lg mb-8 uppercase tracking-widest text-sm underline decoration-accent-green underline-offset-8">Servicios</h4>
            <ul className="space-y-4 text-sm">
              <li>Suministro de Personal</li>
              <li>Administración de Nómina</li>
              <li>Selección de Talento</li>
              <li>Seguridad y Salud en el Trabajo</li>
              <li>Buscador de Vacantes</li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-display font-bold text-lg mb-8 uppercase tracking-widest text-sm underline decoration-accent-green underline-offset-8">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin size={20} className="text-accent-green shrink-0" />
                <span className="text-sm">Pereira, Risaralda - Edificio Fiducentro</span>
              </li>
              <li className="flex gap-4 items-start">
                <Phone size={20} className="text-accent-green shrink-0" />
                <span className="text-sm">+57 310 523 1936</span>
              </li>
              <li className="flex gap-4 items-start">
                <Mail size={20} className="text-accent-green shrink-0" />
                <span className="text-sm">gerencia@misionplus.com.co</span>
              </li>
              <li className="flex gap-4 items-start">
                <Clock size={20} className="text-accent-green shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm">Lun - Vie: 7:30 AM - 4:00 PM</span>
                  <span className="text-[10px] text-red-400 font-bold tracking-widest uppercase">Fines de semana: Cerrado</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs tracking-widest uppercase opacity-50">
            © {currentYear} Misión Plus Pereira. Todos los derechos reservados.
          </p>
          
          <div className="flex gap-8 text-xs tracking-widest uppercase opacity-50">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent-green hover:border-accent-green transition-all shadow-xl"
            aria-label="Ir al inicio"
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
