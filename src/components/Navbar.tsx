import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-custom' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-10 h-10 transition-transform group-hover:rotate-12">
            <div className="bg-accent-green rounded-sm"></div>
            <div className="bg-secondary-blue rounded-sm"></div>
            <div className="bg-primary-blue rounded-sm"></div>
            <div className="bg-[#20c997] rounded-sm"></div>
          </div>
          <span className={`text-xl font-display font-bold tracking-tight uppercase transition-colors ${
            isScrolled ? 'text-primary-blue' : 'text-white'
          }`}>
            Misión Plus
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent-green ${
                isScrolled ? 'text-text-dark' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className={`md:hidden p-2 transition-colors ${
            isScrolled ? 'text-text-dark' : 'text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-primary-blue/95 backdrop-blur-xl z-[1001] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button 
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-display font-bold text-white hover:text-accent-green transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col items-center gap-4 mt-8">
               <div className="grid grid-cols-2 grid-rows-2 gap-1 w-16 h-16">
                <div className="bg-accent-green rounded-md"></div>
                <div className="bg-secondary-blue rounded-md"></div>
                <div className="bg-primary-blue rounded-md"></div>
                <div className="bg-[#20c997] rounded-md"></div>
              </div>
              <span className="text-white/50 text-sm tracking-widest uppercase">Soluciones en Talento Humano</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
