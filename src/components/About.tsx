import { Users, BadgeCheck, Heart, TrendingUp } from 'lucide-react';

const stats = [
  { value: '1500+', label: 'Happy Customers' },
  { value: '4.8', label: 'Google Rating' },
  { value: '5+', label: 'Years Experience' },
  { value: '6+', label: 'Expert Stylists' },
];

const highlights = [
  {
    icon: Users,
    title: 'Friendly & Skilled Staff',
    desc: 'Our trained professionals stay updated with the latest trends and techniques to give you the best results.',
  },
  {
    icon: BadgeCheck,
    title: 'Premium Ambience',
    desc: 'A luxurious, clean, and relaxing environment designed to make every visit a memorable experience.',
  },
  {
    icon: Heart,
    title: 'Affordable Pricing',
    desc: 'Premium quality services at honest prices — we believe great hair shouldn\'t cost a fortune.',
  },
  {
    icon: TrendingUp,
    title: 'Latest Trends',
    desc: 'From Korean cuts to global color techniques, we bring world-class styles to Visakhapatnam.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-bg-soft">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent text-xs tracking-widest uppercase font-medium mb-2">
              Our Story
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
              Vizag's Most Trusted
              <br />
              <span className="italic text-accent">Hair Studio</span>
            </h2>
            <p className="text-secondary/70 text-sm leading-relaxed mb-4">
              Nestled in the heart of Yendada, The Vizag Hair Company was born from
              a passion for exceptional grooming and an obsession with detail. We
              combine international techniques with personalised care to deliver
              transformations that speak for themselves.
            </p>
            <p className="text-secondary/70 text-sm leading-relaxed mb-8">
              Whether it's a quick trim or a complete style overhaul, every
              client walks out feeling confident, refreshed, and looking their
              absolute best.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                >
                  <div className="font-playfair text-2xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-primary/50 text-xs mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden h-52">
              <img
                src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Salon interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white/70 text-xs">Our Studio · Yendada, Vizag</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-gold transition-shadow"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <h4 className="text-primary font-semibold text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-secondary/60 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
