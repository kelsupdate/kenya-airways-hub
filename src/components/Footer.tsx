import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { KenyaAirwaysLogo } from './KenyaAirwaysLogo';

const footerLinks = {
  'Book': ['Flights', 'Hotels', 'Car Rentals', 'Packages', 'Travel Insurance'],
  'Manage': ['My Bookings', 'Online Check-in', 'Flight Status', 'Baggage Info', 'Special Assistance'],
  'About': ['Our Story', 'Newsroom', 'Careers', 'Sustainability', 'Investor Relations'],
  'Help': ['Contact Us', 'FAQs', 'Terms & Conditions', 'Privacy Policy', 'Accessibility'],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Deals</h3>
            <p className="text-background/70 mb-6">
              Subscribe to our newsletter and be the first to know about exclusive offers and new destinations.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="btn-cta whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo & Contact */}
          <div className="col-span-2">
            <div className="mb-6">
              <KenyaAirwaysLogo 
                size="md" 
                showTagline={true}
                className="[&_span]:text-background [&_span]:!text-background"
              />
            </div>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+254 20 327 4747</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>customer.relations@kenya-airways.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>JKIA, Nairobi, Kenya</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>© 2026 Kenya Airways. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/SkyTeam_Logo.svg/200px-SkyTeam_Logo.svg.png" alt="SkyTeam" className="h-4 opacity-70" />
                SkyTeam Member
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
