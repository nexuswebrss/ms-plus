import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920')" }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-75"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent-green/20 border border-accent-green/30 text-accent-green text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm"
          >
            Líderes en Pereira
          </motion.span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
            Expertos en <span className="text-accent-green">Talento Humano</span> y Administración de Nómina
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Optimizamos sus procesos empresariales en Pereira con soluciones integrales, eficiencia y un equipo altamente calificado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#servicios"
              className="bg-accent-green text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:bg-[#248a68] transition-all flex items-center justify-center gap-2 group"
            >
              Nuestros Servicios
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contacto"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white/20 transition-all flex items-center justify-center"
            >
              Contactar Ahora
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-accent-green rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
