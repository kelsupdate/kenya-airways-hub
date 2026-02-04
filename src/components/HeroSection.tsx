import heroImage from '@/assets/hero-nairobi.jpg';
import { BookingForm } from './BookingForm';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Nairobi Skyline"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            Fly the Pride of Africa
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover over 60 destinations worldwide. Book your next adventure with Kenya Airways.
          </p>
        </div>

        {/* Booking Form */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <BookingForm />
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: '60+', label: 'Destinations' },
            { value: '40+', label: 'Countries' },
            { value: '4.5★', label: 'Rating' },
            { value: '1M+', label: 'Passengers/Year' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
