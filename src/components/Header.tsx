import { useState } from 'react';
import { Menu, X, Plane, User, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { label: 'Book', href: '#book' },
  { label: 'Manage', href: '#manage' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Deals', href: '#deals' },
  { label: 'Flying Blue', href: '#flying-blue' },
  { label: 'Help', href: '#help' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary-foreground rotate-45" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-primary">Kenya Airways</span>
                <span className="block text-xs text-muted-foreground -mt-1">The Pride of Africa</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors animated-underline"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:flex gap-1">
                  <Globe className="w-4 h-4" />
                  <span>EN</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Swahili</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login */}
            <Button variant="ghost" size="sm" className="hidden sm:flex gap-2">
              <User className="w-4 h-4" />
              <span>Log In</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 mt-4 px-4">
                <Button variant="outline" size="sm" className="flex-1 gap-2">
                  <Globe className="w-4 h-4" />
                  EN
                </Button>
                <Button variant="outline" size="sm" className="flex-1 gap-2">
                  <User className="w-4 h-4" />
                  Log In
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
