import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Arjun Reddy',
    initials: 'AR',
    rating: 5,
    text: 'Absolutely love this place! The staff is super friendly, and my hair looks amazing after every visit. Best salon in Vizag hands down.',
    service: 'Haircut & Styling',
  },
  {
    name: 'Priya Sharma',
    initials: 'PS',
    rating: 5,
    text: 'Went for a hair spa and the results were incredible. My hair feels so soft and healthy. The ambience is so premium and relaxing.',
    service: 'Hair Spa',
  },
  {
    name: 'Karthik Nair',
    initials: 'KN',
    rating: 5,
    text: 'Got a beard trim and haircut — the precision is outstanding! The barber really listens to what you want and delivers perfectly.',
    service: 'Grooming',
  },
  {
    name: 'Divya Rao',
    initials: 'DR',
    rating: 5,
    text: 'The balayage they did for me was stunning. The color looks so natural and the technique is clearly professional. Will be back!',
    service: 'Hair Color',
  },
  {
    name: 'Rohith Varma',
    initials: 'RV',
    rating: 5,
    text: 'Very clean, well-maintained salon with skilled professionals. Reasonable pricing for the quality of service. Highly recommended!',
    service: 'Facial',
  },
  {
    name: 'Sneha Pillai',
    initials: 'SP',
    rating: 5,
    text: 'Had my bridal makeup done here. They were super professional, listened to all my preferences, and the result was beyond expectations.',
    service: 'Makeup',
  },
];

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
            4.8 stars · 1500+ verified Google reviews
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
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
