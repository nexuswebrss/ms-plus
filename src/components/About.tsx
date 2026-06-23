import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-custom-lg border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                alt="Equipo de Misión Plus, empresa de talento humano en Pereira" 
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-green/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-blue/10 rounded-full blur-3xl z-0"></div>
            
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
               <span className="block text-4xl font-display font-bold text-primary-blue mb-1">+15</span>
               <span className="text-text-muted text-sm uppercase tracking-wider font-semibold">Años de Experiencia</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-green font-bold uppercase tracking-widest text-sm mb-4 block">Sobre Nosotros</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-blue mb-8 leading-tight">
              Su Socio Estratégico en <span className="text-accent-green">Talento Humano</span> en Pereira
            </h2>
            
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              En Misión Plus Pereira, entendemos que el capital humano es el activo más valioso de cualquier organización. Por ello, nos dedicamos a ofrecer soluciones integrales que permiten a las empresas enfocarse en su negocio principal mientras nosotros gestionamos su talento.
            </p>
            
            <p className="text-lg text-text-muted mb-10 leading-relaxed">
              Contamos con un equipo interdisciplinario experto en legislación laboral, nómina y recursos especializados para garantizar el cumplimiento normativo y la satisfacción de sus colaboradores.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-display font-bold text-primary-blue text-xl mb-2">Misión</h4>
                <p className="text-text-muted text-sm"> Brindar soluciones eficaces y personalizadas en la administración de nómina y selección de personal.</p>
              </div>
              <div>
                <h4 className="font-display font-bold text-primary-blue text-xl mb-2">Visión</h4>
                <p className="text-text-muted text-sm">Ser la empresa líder en consultoría de talento humano en el Eje Cafetero para el año 2028.</p>
              </div>
            </div>

            <motion.a
              whileHover={{ x: 5 }}
              href="#contacto"
              className="inline-flex items-center gap-2 text-accent-green font-bold uppercase tracking-wider text-sm border-b-2 border-accent-green pb-1"
            >
              Conozca más sobre nosotros
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
