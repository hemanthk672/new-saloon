import { useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Toast from './Toast';
import { salon } from '../config/salons';

const serviceOptions = [
  'Haircut & Styling',
  'Grooming',
  'Facial',
  'Hair Spa',
  'Hair Color',
  'Makeup',
  'Other',
];

const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
];

interface FormState {
  name: string;
  phone: string;
  service: string;
  preferred_time: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    service: '',
    preferred_time: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Valid 10-digit phone required';
    if (!form.service) e.service = 'Please select a service';
    if (!form.preferred_time) e.preferred_time = 'Please select a time';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await supabase.from('bookings').insert([
      {
        name: form.name.trim(),
        phone: form.phone.trim(),
        service: form.service,
        preferred_time: form.preferred_time,
        message: form.message.trim(),
      },
    ]);
    setLoading(false);
    setToast(true);

    // Notify admin via WhatsApp
    const waMsg = `🔔 *New Booking Request!*\n\n👤 *Name:* ${form.name.trim()}\n📞 *Phone:* ${form.phone.trim()}\n✂️ *Service:* ${form.service}\n🕐 *Preferred Time:* ${form.preferred_time}${form.message.trim() ? `\n💬 *Message:* ${form.message.trim()}` : ''}`;
    window.open(`https://wa.me/${salon.phoneRaw}?text=${encodeURIComponent(waMsg)}`, '_blank');

    setForm({ name: '', phone: '', service: '', preferred_time: '', message: '' });
    setErrors({});
  };

  const field = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="text-center mb-10">
          <p className="text-accent text-xs tracking-widest uppercase font-medium mb-2">
            Get In Touch
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
            Book Your Appointment
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-secondary/50 border border-white/5 rounded-xl p-6">
              <h3 className="font-playfair text-xl font-semibold text-white mb-5">
                Visit Us
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={17} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium mb-0.5">Address</div>
                    <div className="text-white/50 text-sm leading-relaxed">
                      {salon.address.line1}
                      <br />
                      {salon.address.line2}
                      {salon.address.line3 && (
                        <><br />{salon.address.line3}</>
                      )}
                      <br />
                      {salon.address.cityState} – {salon.address.pincode}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={17} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium mb-0.5">Phone</div>
                    <a
                      href={`tel:+${salon.phoneRaw}`}
                      className="text-accent hover:text-accent-light text-sm transition-colors"
                    >
                      {salon.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={17} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium mb-0.5">
                      Opening Hours
                    </div>
                    <div className="text-white/50 text-sm">
                      {salon.hours.label}: {salon.hours.time}
                    </div>
                    {salon.hours.note && (
                      <div className="text-white/50 text-sm">{salon.hours.note}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden h-52 border border-white/10">
              <iframe
                title="Salon Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ filter: 'invert(90%) hue-rotate(180deg)' }}
                src={`https://maps.google.com/maps?q=${salon.address.mapsQuery}&output=embed`}
              />
            </div>
          </div>

          <div className="bg-secondary/50 border border-white/5 rounded-xl p-6">
            <h3 className="font-playfair text-xl font-semibold text-white mb-5">
              Request an Appointment
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => field('name', e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-primary border border-white/10 focus:border-accent text-white placeholder-white/20 rounded-lg px-3 py-2.5 text-sm outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-white/60 text-xs mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => field('phone', e.target.value)}
                    placeholder="10-digit number"
                    className="w-full bg-primary border border-white/10 focus:border-accent text-white placeholder-white/20 rounded-lg px-3 py-2.5 text-sm outline-none transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs mb-1.5">Service</label>
                  <select
                    value={form.service}
                    onChange={(e) => field('service', e.target.value)}
                    className="w-full bg-primary border border-white/10 focus:border-accent text-white rounded-lg px-3 py-2.5 text-sm outline-none transition-colors appearance-none"
                  >
                    <option value="">Select service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-primary">
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-xs mt-1">{errors.service}</p>
                  )}
                </div>
                <div>
                  <label className="block text-white/60 text-xs mb-1.5">
                    Preferred Time
                  </label>
                  <select
                    value={form.preferred_time}
                    onChange={(e) => field('preferred_time', e.target.value)}
                    className="w-full bg-primary border border-white/10 focus:border-accent text-white rounded-lg px-3 py-2.5 text-sm outline-none transition-colors appearance-none"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t} className="bg-primary">
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.preferred_time && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.preferred_time}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-xs mb-1.5">
                  Message (Optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => field('message', e.target.value)}
                  rows={3}
                  placeholder="Any special requests or notes..."
                  className="w-full bg-primary border border-white/10 focus:border-accent text-white placeholder-white/20 rounded-lg px-3 py-2.5 text-sm outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 bg-accent hover:bg-accent-light text-primary font-semibold rounded-lg transition-all duration-200 hover:shadow-gold disabled:opacity-60 disabled:cursor-not-allowed text-sm"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={16} />
                    Send Booking Request
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {toast && (
        <Toast
          message="Your request has been received. Our team will contact you shortly."
          onClose={() => setToast(false)}
        />
      )}
    </section>
  );
}
