import { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-start gap-3 bg-primary border border-accent/30 text-white px-5 py-4 rounded-xl shadow-gold-lg max-w-xs animate-fade-in-up">
      <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
      <p className="text-sm leading-relaxed flex-1">{message}</p>
      <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
        <X size={16} />
      </button>
    </div>
  );
}
