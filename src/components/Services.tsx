import { Scissors, Sparkles, Flower2, Droplets, Palette, Wind } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Haircuts & Styling',
    desc: 'Precision cuts tailored to your face shape and lifestyle by our expert stylists.',
    tag: 'Most Popular',
  },
  {
    icon: Wind,
    title: 'Grooming',
    desc: 'Complete beard shaping, trimming, and skin grooming for the modern gentleman.',
    tag: null,
  },
  {
    icon: Sparkles,
    title: 'Facials',
    desc: 'Rejuvenating skin treatments with premium products for a fresh, glowing complexion.',
    tag: null,
  },
  {
    icon: Droplets,
    title: 'Hair Spa',
    desc: 'Deep conditioning and nourishing spa treatments to restore shine and strength.',
    tag: 'Bestseller',
  },
  {
    icon: Palette,
    title: 'Hair Color',
    desc: 'Vibrant balayage, highlights, and global color using professional-grade products.',
    tag: null,
  },
  {
    icon: Flower2,
    title: 'Makeup',
    desc: 'Event-ready makeup artistry — from natural glam to full bridal looks.',
    tag: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-primary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-accent text-xs tracking-widest uppercase font-medium mb-2">
            What We Offer
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
            Our Services
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-secondary/60 border border-white/5 rounded-xl p-6 hover:border-accent/40 hover:shadow-gold transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                {service.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-wider uppercase bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                    {service.tag}
                  </span>
                )}
                <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
