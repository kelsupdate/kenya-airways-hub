import { Tag, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const deals = [
  {
    id: 1,
    title: 'Winter Sun Sale',
    description: 'Escape to warm destinations this winter with up to 20% off selected routes.',
    discount: '20% OFF',
    validUntil: 'May 31, 2026',
    routes: ['Nairobi → Mombasa', 'Nairobi → Zanzibar', 'Nairobi → Mauritius'],
    featured: true,
  },
  {
    id: 2,
    title: 'Business Class Upgrade',
    description: 'Upgrade to Business Class for less. Enjoy lie-flat seats and premium dining.',
    discount: 'From KES 25,000',
    validUntil: 'March 15, 2026',
    routes: ['London', 'Dubai', 'Mumbai'],
    featured: false,
  },
  {
    id: 3,
    title: 'Family Getaway',
    description: 'Kids fly free on selected domestic routes. Perfect for family holidays.',
    discount: 'Kids Free',
    validUntil: 'April 30, 2026',
    routes: ['Nairobi → Mombasa', 'Nairobi → Kisumu'],
    featured: false,
  },
  {
    id: 4,
    title: 'Flying Blue Bonus Miles',
    description: 'Earn double miles on all international flights when you book online.',
    discount: '2X Miles',
    validUntil: 'February 28, 2026',
    routes: ['All international routes'],
    featured: true,
  },
];

export const DealsSection = () => {
  return (
    <section id="deals" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Limited Time Offers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Exclusive Flight Deals
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on our special promotions for 2026. Book now and save on your next adventure.
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className={`bg-card rounded-xl p-6 border transition-all duration-300 hover:shadow-lg ${
                deal.featured ? 'border-primary/30 shadow-md' : 'border-border'
              }`}
            >
              {deal.featured && (
                <Badge className="mb-4 bg-primary text-primary-foreground">Featured</Badge>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{deal.title}</h3>
                  <p className="text-muted-foreground text-sm">{deal.description}</p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-center">
                    <span className="block text-lg font-bold">{deal.discount}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {deal.routes.map((route) => (
                  <span
                    key={route}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary text-sm text-secondary-foreground"
                  >
                    <Tag className="w-3 h-3" />
                    {route}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Valid until {deal.validUntil}</span>
                </div>
                <Button size="sm" className="gap-1 group">
                  Book Now
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Join Flying Blue Today
          </h3>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
            Earn miles on every flight and enjoy exclusive member benefits. Sign up for free and start earning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              Sign Up for Free
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
