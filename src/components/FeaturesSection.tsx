import { Wifi, Utensils, Tv, Briefcase, Star, Shield, Plane } from 'lucide-react';
import airplaneImage from '@/assets/airplane.jpg';

const features = [
  {
    icon: Wifi,
    title: 'In-Flight WiFi',
    description: 'Stay connected with our high-speed WiFi available on select routes.',
  },
  {
    icon: Utensils,
    title: 'Premium Dining',
    description: 'Enjoy gourmet meals inspired by African and international cuisine.',
  },
  {
    icon: Tv,
    title: 'Entertainment',
    description: 'Hundreds of movies, TV shows, music, and games on personal screens.',
  },
  {
    icon: Briefcase,
    title: 'Business Class',
    description: 'Lie-flat seats, priority boarding, and exclusive lounge access.',
  },
  {
    icon: Star,
    title: 'Flying Blue',
    description: 'Earn and redeem miles with our SkyTeam alliance loyalty program.',
  },
  {
    icon: Shield,
    title: 'Safe Travel',
    description: 'Enhanced safety protocols and flexible booking options.',
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              World-Class Service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experience the Pride of Africa
            </h2>
            <p className="text-muted-foreground mb-8">
              From the moment you book until you reach your destination, Kenya Airways provides exceptional service with a distinctly African touch. Our modern fleet and dedicated crew ensure your journey is comfortable and memorable.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={airplaneImage}
                alt="Kenya Airways Boeing 787 Dreamliner"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg max-w-[200px] animate-float">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Plane className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">787</div>
                  <div className="text-xs text-muted-foreground">Dreamliner</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Our flagship aircraft with enhanced comfort and lower cabin altitude.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
