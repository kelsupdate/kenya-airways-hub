import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const routes = [
  { origin: 'Nairobi (NBO)', destination: 'Mombasa (MBA)', price: 'KES 14,035', region: 'Domestic' },
  { origin: 'Nairobi (NBO)', destination: 'Kisumu (KIS)', price: 'KES 14,035', region: 'Domestic' },
  { origin: 'Nairobi (NBO)', destination: 'Zanzibar (ZNZ)', price: 'KES 71,285', region: 'Africa' },
  { origin: 'Nairobi (NBO)', destination: 'Johannesburg (JNB)', price: 'KES 84,075', region: 'Africa' },
  { origin: 'Nairobi (NBO)', destination: 'Mumbai (BOM)', price: 'KES 58,500', region: 'Asia' },
  { origin: 'Nairobi (NBO)', destination: 'London (LHR)', price: 'KES 101,895', region: 'Europe' },
  { origin: 'Nairobi (NBO)', destination: 'New York (JFK)', price: 'KES 144,145', region: 'Americas' },
  { origin: 'Nairobi (NBO)', destination: 'Dubai (DXB)', price: 'KES 65,000', region: 'Middle East' },
  { origin: 'Nairobi (NBO)', destination: 'Entebbe (EBB)', price: 'KES 45,000', region: 'Africa' },
  { origin: 'Nairobi (NBO)', destination: 'Dar es Salaam (DAR)', price: 'KES 52,000', region: 'Africa' },
];

const additionalDestinations = {
  Africa: ['Abidjan (ABJ)', 'Accra (ACC)', 'Addis Ababa (ADD)', 'Antananarivo (TNR)', 'Bujumbura (BJM)', 'Cape Town (CPT)', 'Dakar (DSS)', 'Douala (DLA)', 'Harare (HRE)', 'Kigali (KGL)', 'Lagos (LOS)', 'Lilongwe (LLW)', 'Lusaka (LUN)', 'Mahé (SEZ)', 'Mauritius (MRU)'],
  Europe: ['Amsterdam (AMS)', 'Paris (CDG)', 'Geneva'],
  Asia: ['Bangkok (BKK)', 'Guangzhou (CAN)', 'Beijing (PEK)'],
};

const getRegionColor = (region: string) => {
  const colors: Record<string, string> = {
    'Domestic': 'bg-green-100 text-green-800',
    'Africa': 'bg-amber-100 text-amber-800',
    'Europe': 'bg-blue-100 text-blue-800',
    'Asia': 'bg-purple-100 text-purple-800',
    'Americas': 'bg-red-100 text-red-800',
    'Middle East': 'bg-orange-100 text-orange-800',
  };
  return colors[region] || 'bg-gray-100 text-gray-800';
};

export const RoutesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            Our Network
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Routes & Fares from Nairobi
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Round-trip economy fares from Jomo Kenyatta International Airport (NBO) as of February 2026.
          </p>
        </div>

        {/* Routes Table */}
        <div className="bg-card rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/5">
                  <TableHead className="font-semibold">Origin</TableHead>
                  <TableHead className="font-semibold">Destination</TableHead>
                  <TableHead className="font-semibold">Starting Price</TableHead>
                  <TableHead className="font-semibold">Region</TableHead>
                  <TableHead className="text-right font-semibold">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {routes.map((route, index) => (
                  <TableRow key={index} className="hover:bg-secondary/50 transition-colors">
                    <TableCell className="font-medium">{route.origin}</TableCell>
                    <TableCell>{route.destination}</TableCell>
                    <TableCell className="font-semibold text-primary">{route.price}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={getRegionColor(route.region)}>
                        {route.region}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="ghost" className="gap-1 group">
                        Book
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Additional Destinations */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(additionalDestinations).map(([region, cities]) => (
            <div key={region} className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${
                  region === 'Africa' ? 'bg-amber-500' : 
                  region === 'Europe' ? 'bg-blue-500' : 'bg-purple-500'
                }`} />
                More {region} Destinations
              </h3>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="inline-block px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* New Route Announcement */}
        <div className="mt-12 bg-gradient-to-r from-primary to-kq-red-light rounded-2xl p-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white">Coming 2026</Badge>
          <h3 className="text-2xl font-bold text-white mb-2">
            Beijing Route Launching Soon!
          </h3>
          <p className="text-white/80 mb-4">
            Direct flights from Nairobi to Beijing (PEK) starting later this year.
          </p>
          <Button variant="secondary" size="sm">
            Get Notified
          </Button>
        </div>
      </div>
    </section>
  );
};
