import { Phone, CalendarCheck, Star } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-0">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-accent fill-accent" />
              ))}
            </div>
            <span className="text-accent text-sm font-medium">
              4.8 · 1500+ Reviews
            </span>
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            Style.{' '}
            <span className="text-accent italic">Beauty.</span>
            <br />
            Confidence.
          </h1>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Visakhapatnam's premier grooming destination. Experience luxury
            haircare, transformative styling, and a salon ambience crafted for
            those who value the finest.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollTo('#contact')}
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-primary font-semibold rounded transition-all duration-200 hover:shadow-gold-lg text-sm"
            >
              <CalendarCheck size={17} />
              Book Appointment
            </button>
            <a
              href="tel:+918121212945"
              className="flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 hover:border-accent text-white hover:text-accent font-medium rounded transition-all duration-200 text-sm"
            >
              <Phone size={17} />
              +91 81212 12945
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { value: '1500+', label: 'Happy Clients' },
              { value: '4.8★', label: 'Average Rating' },
              { value: '5+', label: 'Years Serving Vizag' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-playfair text-2xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollTo('#services')}
          className="flex flex-col items-center gap-1 text-white/40 hover:text-accent transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </button>
      </div>
    </section>
  );
}
