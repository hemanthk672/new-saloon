const images = [
  {
    src: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Salon styling',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Hair treatment',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3993445/pexels-photo-3993445.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Hair color',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3738338/pexels-photo-3738338.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Salon ambience',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3786166/pexels-photo-3786166.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Hair styling',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Grooming session',
    span: '',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-primary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-accent text-xs tracking-widest uppercase font-medium mb-2">
            Inside The Studio
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
            Our Gallery
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-3 h-[480px] md:h-[420px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
