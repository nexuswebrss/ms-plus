import { motion } from 'motion/react';
import { Users, FileText, CheckCircle, Search, PieChart, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Suministro de Personal',
    description: 'Contratación y suministro de personal idóneo para cubrir sus vacantes temporales o permanentes.',
    icon: <Users className="w-8 h-8" />,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Administración de Nómina',
    description: 'Gestión integral de liquidación de sueldos, seguridad social y prestaciones legales.',
    icon: <FileText className="w-8 h-8" />,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Selección de Talento',
    description: 'Procesos rigurosos de reclutamiento y evaluación para encontrar al candidato perfecto.',
    icon: <Search className="w-8 h-8" />,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Seguridad y Salud (SST)',
    description: 'Implementación y seguimiento de los sistemas de gestión de seguridad y salud en el trabajo.',
    icon: <ShieldCheck className="w-8 h-8" />,
    color: 'bg-red-50 text-red-600',
  },
  {
    title: 'Estudios de Seguridad',
    description: 'Verificación de antecedentes y visitas domiciliarias para asegurar la integridad de su equipo.',
    icon: <CheckCircle className="w-8 h-8" />,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Consultoría Especializada',
    description: 'Asesoría técnica en procesos administrativos y de planeación estratégica de personal.',
    icon: <PieChart className="w-8 h-8" />,
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent-green font-bold uppercase tracking-widest text-sm mb-4 block">Portafolio</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-blue mb-6">
            Servicios Integrales para su <span className="text-accent-green">Empresa</span>
          </h2>
          <p className="text-text-muted text-lg">
            Ofrecemos una amplia gama de soluciones diseñadas para potenciar el crecimiento de su negocio y la bienestar de sus trabajadores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-custom-lg transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-primary-blue mb-4 group-hover:text-accent-green transition-colors">
                {service.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
