import { Users, BadgeCheck, Heart, TrendingUp } from 'lucide-react';
import { salon } from '../config/salons';

// Keep icon pool — mapped positionally to the highlights array
const highlightIcons = [Users, BadgeCheck, Heart, TrendingUp];

export default function About() {
  return (
    <section id="about" className="py-16 bg-bg-soft">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent text-xs tracking-widest uppercase font-medium mb-2">
              Our Story
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
              {salon.about.heading}
              <br />
              <span className="italic text-accent">{salon.about.subHeading}</span>
            </h2>
            <p className="text-secondary/70 text-sm leading-relaxed mb-4">
              {salon.about.para1}
            </p>
            <p className="text-secondary/70 text-sm leading-relaxed mb-8">
              {salon.about.para2}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {salon.about.stats.map((stat) => (
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
                <span className="text-white/70 text-xs">Our Studio · {salon.city}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {salon.about.highlights.map((item, i) => {
                const Icon = highlightIcons[i % highlightIcons.length];
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
