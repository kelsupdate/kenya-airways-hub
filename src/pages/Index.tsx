import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { DestinationsSection } from '@/components/DestinationsSection';
import { DealsSection } from '@/components/DealsSection';
import { RoutesSection } from '@/components/RoutesSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <DestinationsSection />
        <DealsSection />
        <RoutesSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
