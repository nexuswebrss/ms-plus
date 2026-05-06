import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const benefits = [
  'Reducción de costos operativos',
  'Cumplimiento legal garantizado',
  'Enfoque en su actividad principal',
  'Soporte técnico especializado 24/7',
  'Procesos certificados de calidad',
  'Transparencia en la gestión',
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 relative overflow-hidden bg-primary-blue">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-green/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              ¿Por qué elegir <span className="text-accent-green underline decoration-accent-green/30">Misión Plus</span> como su aliado?
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-xl">
              Nuestra metodología de trabajo está basada en la excelencia y la confianza. Acompañamos a nuestros clientes en cada paso del camino para asegurar resultados excepcionales.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                >
                  <div className="w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center border border-accent-green/30">
                    <Check size={14} className="text-accent-green" />
                  </div>
                  <span className="text-white text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
             <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 rounded-full -translate-y-12 translate-x-12 transition-transform group-hover:scale-150"></div>
                <blockquote className="relative z-10">
                  <p className="text-primary-blue text-xl md:text-2xl font-display font-semibold italic mb-6 leading-relaxed">
                    "La gestión de Misión Plus ha transformado radicalmente nuestra productividad. Su soporte en nómina es impecable."
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                    <div>
                      <cite className="not-italic font-bold text-text-dark block leading-none mb-1">Carlos Rodríguez</cite>
                      <span className="text-text-muted text-xs uppercase tracking-widest font-bold">Gerente de Operaciones</span>
                    </div>
                  </footer>
                </blockquote>
             </div>

             <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl h-32 flex items-center justify-center border border-white/10 group hover:bg-white/20 transition-all cursor-default overflow-hidden relative">
                    <div className="text-white/20 font-display font-bold text-5xl absolute -bottom-4 -right-2">0{i}</div>
                    <span className="text-white font-bold text-lg relative z-10 group-hover:scale-110 transition-transform tracking-tight">Kardex 0{i}</span>
                  </div>
                ))}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
