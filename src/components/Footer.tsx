import { MapPin, Phone, Clock, Scissors, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A12] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Scissors size={15} className="text-primary" />
              </div>
              <div>
                <div className="font-playfair text-white font-bold text-sm">
                  The Vizag Hair Company
                </div>
                <div className="text-accent text-xs tracking-wider">
                  Premium Salon
                </div>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              Visakhapatnam's most trusted hair studio, delivering premium styling
              experiences since 2019.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-accent/20 flex items-center justify-center text-white/40 hover:text-accent transition-all"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#"
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
                  GITAM Medical, Varma Complex, College Rd, Yendada, Visakhapatnam 530045
                </span>
              </div>
              <div className="flex gap-2">
                <Phone size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+918121212945"
                  className="text-white/40 hover:text-accent text-xs transition-colors"
                >
                  +91 81212 12945
                </a>
              </div>
              <div className="flex gap-2">
                <Clock size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <div className="text-white/40 text-xs">
                  <div>Mon–Sat: 10:00 AM – 8:00 PM</div>
                  <div>Sunday: 10:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/25 text-xs">
            © 2025 The Vizag Hair Company. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Crafted with care · Yendada, Visakhapatnam
          </p>
        </div>
      </div>
    </footer>
  );
}
