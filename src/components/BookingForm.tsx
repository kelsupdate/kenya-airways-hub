import { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRightLeft, Search, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const airports = [
  { code: 'NBO', city: 'Nairobi', country: 'Kenya' },
  { code: 'MBA', city: 'Mombasa', country: 'Kenya' },
  { code: 'KIS', city: 'Kisumu', country: 'Kenya' },
  { code: 'LHR', city: 'London', country: 'UK' },
  { code: 'DXB', city: 'Dubai', country: 'UAE' },
  { code: 'JNB', city: 'Johannesburg', country: 'South Africa' },
  { code: 'BOM', city: 'Mumbai', country: 'India' },
  { code: 'JFK', city: 'New York', country: 'USA' },
  { code: 'ZNZ', city: 'Zanzibar', country: 'Tanzania' },
  { code: 'AMS', city: 'Amsterdam', country: 'Netherlands' },
  { code: 'CDG', city: 'Paris', country: 'France' },
  { code: 'ADD', city: 'Addis Ababa', country: 'Ethiopia' },
];

export const BookingForm = () => {
  const [tripType, setTripType] = useState('round-trip');
  const [departDate, setDepartDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [origin, setOrigin] = useState('NBO');
  const [destination, setDestination] = useState('');
  const [passengers, setPassengers] = useState('1');

  const swapLocations = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  return (
    <div className="booking-card w-full max-w-4xl mx-auto">
      <Tabs defaultValue="flights" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 bg-secondary">
          <TabsTrigger value="flights" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Plane className="w-4 h-4" />
            <span className="hidden sm:inline">Flights</span>
          </TabsTrigger>
          <TabsTrigger value="manage" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Manage Booking</span>
          </TabsTrigger>
          <TabsTrigger value="checkin" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Check-in</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="flights" className="space-y-6">
          {/* Trip Type */}
          <div className="flex gap-4">
            {['round-trip', 'one-way', 'multi-city'].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value={type}
                  checked={tripType === type}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-4 h-4 text-primary border-border focus:ring-primary"
                />
                <span className="text-sm capitalize">{type.replace('-', ' ')}</span>
              </label>
            ))}
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Origin */}
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">From</Label>
              <Select value={origin} onValueChange={setOrigin}>
                <SelectTrigger className="h-12">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <SelectValue placeholder="Select origin" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {airports.map((airport) => (
                    <SelectItem key={airport.code} value={airport.code}>
                      <span className="font-semibold">{airport.code}</span> - {airport.city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Swap Button - Hidden on mobile, shown between fields */}
            <div className="hidden md:flex items-end justify-center pb-3">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={swapLocations}
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ArrowRightLeft className="w-4 h-4" />
              </Button>
            </div>

            {/* Destination */}
            <div className="space-y-2 md:col-start-2 lg:col-start-auto">
              <Label className="text-xs text-muted-foreground">To</Label>
              <Select value={destination} onValueChange={setDestination}>
                <SelectTrigger className="h-12">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <SelectValue placeholder="Select destination" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {airports.filter(a => a.code !== origin).map((airport) => (
                    <SelectItem key={airport.code} value={airport.code}>
                      <span className="font-semibold">{airport.code}</span> - {airport.city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Departure Date */}
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Departure</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-12 justify-start text-left font-normal",
                      !departDate && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {departDate ? format(departDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={departDate}
                    onSelect={setDepartDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Return Date */}
            {tripType === 'round-trip' && (
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Return</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-12 justify-start text-left font-normal",
                        !returnDate && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={returnDate}
                      onSelect={setReturnDate}
                      initialFocus
                      disabled={(date) => date < (departDate || new Date())}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            )}

            {/* Passengers */}
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Passengers</Label>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="h-12">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'Passenger' : 'Passengers'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Button */}
          <Button className="w-full h-12 btn-cta text-lg animate-pulse-glow">
            <Search className="w-5 h-5 mr-2" />
            Search Flights
          </Button>
        </TabsContent>

        <TabsContent value="manage" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Booking Reference</Label>
              <Input placeholder="e.g., ABC123" className="h-12" />
            </div>
            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input placeholder="Enter your last name" className="h-12" />
            </div>
          </div>
          <Button className="w-full h-12 btn-cta">
            Retrieve Booking
          </Button>
        </TabsContent>

        <TabsContent value="checkin" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Booking Reference or E-ticket</Label>
              <Input placeholder="e.g., ABC123 or 0741234567890" className="h-12" />
            </div>
            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input placeholder="Enter your last name" className="h-12" />
            </div>
          </div>
          <Button className="w-full h-12 btn-cta">
            Check In Now
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
};
