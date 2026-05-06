import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const phoneNumber = "573105231936";
  const message = "Hola Misión Plus, me gustaría obtener más información.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25d366] text-white p-4 rounded-full shadow-lg hover:bg-[#128c7e] transition-colors flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={32} className="fill-current" />
      <span className="absolute right-full mr-4 bg-white text-text-dark px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        ¡Contáctanos por WhatsApp!
      </span>
      <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#25d366] animate-pulse"></span>
    </motion.a>
  );
}
