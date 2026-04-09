import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { salon } from '../config/salons';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-glass py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <Scissors size={16} className="text-primary" />
          </div>
          <div className="leading-none">
            <span className="block font-playfair text-white font-bold text-sm tracking-wide">
              {salon.nameShort}
            </span>
            <span className="block font-playfair text-accent text-xs tracking-widest uppercase">
              {salon.tagline}
            </span>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-white/80 hover:text-accent text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="ml-2 px-5 py-2 bg-accent hover:bg-accent-light text-primary text-sm font-semibold rounded transition-all duration-200 hover:shadow-gold"
          >
            Book Now
          </button>
        </nav>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-primary/98 backdrop-blur-md border-t border-white/10 px-4 pt-3 pb-5">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left py-3 text-white/80 hover:text-accent text-sm font-medium border-b border-white/5 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-4 w-full py-3 bg-accent text-primary text-sm font-semibold rounded"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
