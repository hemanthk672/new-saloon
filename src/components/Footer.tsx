import { MapPin, Phone, Clock, Scissors, Instagram, Facebook } from 'lucide-react';
import { salon } from '../config/salons';

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070A12] border-t border-white/5">
      <div className="w-full px-6 md:px-12 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Scissors size={15} className="text-primary" />
              </div>
              <div>
                <div className="font-playfair text-white font-bold text-sm">
                  {salon.name}
                </div>
                <div className="text-accent text-xs tracking-wider">
                  Premium Salon
                </div>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              {salon.footerBlurb}
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={salon.instagramUrl}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-accent/20 flex items-center justify-center text-white/40 hover:text-accent transition-all"
              >
                <Instagram size={15} />
              </a>
              <a
                href={salon.facebookUrl}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-accent/20 flex items-center justify-center text-white/40 hover:text-accent transition-all"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                ['#home', 'Home'],
                ['#services', 'Services'],
                ['#about', 'About Us'],
                ['#gallery', 'Gallery'],
                ['#testimonials', 'Reviews'],
                ['#contact', 'Book Appointment'],
              ].map(([href, label]) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-white/40 hover:text-accent text-xs transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex gap-2">
                <MapPin size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-xs leading-relaxed">
                  {salon.address.line1} {salon.address.line2}{salon.address.line3 ? ` ${salon.address.line3}` : ''} {salon.address.cityState} {salon.address.pincode}
                </span>
              </div>
              <div className="flex gap-2">
                <Phone size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:+${salon.phoneRaw}`}
                  className="text-white/40 hover:text-accent text-xs transition-colors"
                >
                  {salon.phone}
                </a>
              </div>
              <div className="flex gap-2">
                <Clock size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <div className="text-white/40 text-xs">
                  <div>{salon.hours.label}: {salon.hours.time}</div>
                  {salon.hours.note && <div>{salon.hours.note}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/25 text-xs">
            © {currentYear} {salon.name}. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Crafted with care · {salon.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
