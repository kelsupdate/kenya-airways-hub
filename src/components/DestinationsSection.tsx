import { ArrowRight, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

import destMombasa from '@/assets/dest-mombasa.jpg';
import destZanzibar from '@/assets/dest-zanzibar.jpg';
import destLondon from '@/assets/dest-london.jpg';
import destDubai from '@/assets/dest-dubai.jpg';
import destJohannesburg from '@/assets/dest-johannesburg.jpg';
import destMumbai from '@/assets/dest-mumbai.jpg';
import destNewYork from '@/assets/dest-newyork.jpg';

const destinations = [
  {
    id: 1,
    city: 'Mombasa',
    code: 'MBA',
    country: 'Kenya',
    region: 'Domestic',
    price: 'KES 14,035',
    image: destMombasa,
    featured: false,
  },
  {
    id: 2,
    city: 'Zanzibar',
    code: 'ZNZ',
    country: 'Tanzania',
    region: 'Africa',
    price: 'KES 71,285',
    image: destZanzibar,
    featured: true,
  },
  {
    id: 3,
    city: 'London',
    code: 'LHR',
    country: 'United Kingdom',
    region: 'Europe',
    price: 'KES 101,895',
    image: destLondon,
    featured: true,
  },
  {
    id: 4,
    city: 'Dubai',
    code: 'DXB',
    country: 'UAE',
    region: 'Middle East',
    price: 'KES 65,000',
    image: destDubai,
    featured: true,
  },
  {
    id: 5,
    city: 'Johannesburg',
    code: 'JNB',
    country: 'South Africa',
    region: 'Africa',
    price: 'KES 84,075',
    image: destJohannesburg,
    featured: false,
  },
  {
    id: 6,
    city: 'Mumbai',
    code: 'BOM',
    country: 'India',
    region: 'Asia',
    price: 'KES 58,500',
    image: destMumbai,
    featured: false,
  },
  {
    id: 7,
    city: 'New York',
    code: 'JFK',
    country: 'USA',
    region: 'Americas',
    price: 'KES 144,145',
    image: destNewYork,
    featured: true,
  },
];

export const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            Explore the World
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From tropical beaches to bustling cities, explore our top destinations with competitive fares from Nairobi.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className={`destination-card group ${
                dest.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="destination-card-overlay" />
              
              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-white/70 uppercase tracking-wider">{dest.region}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {dest.city}, {dest.country}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-white/70" />
                    <span className="text-sm text-white/70">{dest.code}</span>
                  </div>
                  <span className="price-tag">{dest.price}</span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="secondary" className="gap-2">
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2 group">
            View All Destinations
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
