import { MessageCircle } from 'lucide-react';
import { salon } from '../config/salons';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${salon.phoneRaw}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-[#25D366] hover:bg-[#20c45a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 group"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={22} className="text-white" />
      <span className="absolute left-14 bg-primary text-white text-xs px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-glass pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
