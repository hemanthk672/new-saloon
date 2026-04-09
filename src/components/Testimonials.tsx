import { Star, Quote } from 'lucide-react';
import { salon } from '../config/salons';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-bg-soft">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="text-center mb-10">
          <p className="text-accent text-xs tracking-widest uppercase font-medium mb-2">
            Client Love
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary">
            What Our Clients Say
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
          <p className="text-secondary/60 text-sm mt-3">
            {salon.rating} stars · {salon.reviewCount} verified Google reviews
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {salon.reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-gold transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-semibold text-sm">
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-primary font-semibold text-sm">
                      {review.name}
                    </div>
                    <div className="text-accent text-xs">{review.service}</div>
                  </div>
                </div>
                <Quote size={18} className="text-accent/30 flex-shrink-0" />
              </div>

              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={13} className="text-accent fill-accent" />
                ))}
              </div>

              <p className="text-secondary/65 text-sm leading-relaxed flex-1">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
