import { cn } from '@/lib/utils';

interface KenyaAirwaysLogoProps {
  className?: string;
  showText?: boolean;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon';
}

export const KenyaAirwaysLogo = ({
  className,
  showText = true,
  showTagline = true,
  size = 'md',
  variant = 'full',
}: KenyaAirwaysLogoProps) => {
  const sizeClasses = {
    sm: { icon: 'w-8 h-8', text: 'text-sm', tagline: 'text-[10px]' },
    md: { icon: 'w-10 h-10', text: 'text-lg', tagline: 'text-xs' },
    lg: { icon: 'w-14 h-14', text: 'text-2xl', tagline: 'text-sm' },
    xl: { icon: 'w-20 h-20', text: 'text-4xl', tagline: 'text-base' },
  };

  const iconSize = sizeClasses[size].icon;
  const textSize = sizeClasses[size].text;
  const taglineSize = sizeClasses[size].tagline;

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Stylized K Logo Icon */}
      <div className={cn('relative flex-shrink-0', iconSize)}>
        {/* Red Circle Background */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Circle */}
          <circle
            cx="50"
            cy="50"
            r="48"
            className="fill-primary"
          />
          
          {/* Stylized K Letter with African Bird Wing Motif */}
          <g className="fill-primary-foreground">
            {/* K Vertical Stem */}
            <rect x="30" y="25" width="8" height="50" rx="2" />
            
            {/* K Upper Diagonal - Bird Wing Style */}
            <path d="M38 50 L62 28 Q68 25 70 30 L48 52 Z" />
            
            {/* K Lower Diagonal - Bird Wing Style */}
            <path d="M38 50 L62 72 Q68 75 70 70 L48 48 Z" />
            
            {/* Wing Accent Lines */}
            <path 
              d="M55 32 Q62 28 68 32" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="stroke-primary-foreground"
            />
            <path 
              d="M55 68 Q62 72 68 68" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="stroke-primary-foreground"
            />
          </g>
        </svg>
      </div>

      {/* Text Section */}
      {variant === 'full' && showText && (
        <div className="flex flex-col">
          <span 
            className={cn(
              'font-bold tracking-tight text-foreground italic',
              textSize
            )}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Kenya Airways
          </span>
          {showTagline && (
            <span 
              className={cn(
                'text-muted-foreground -mt-0.5 italic tracking-wide',
                taglineSize
              )}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              The Pride of Africa
            </span>
          )}
        </div>
      )}
    </div>
  );
};

// Animated version for loading states
export const KenyaAirwaysLogoAnimated = ({
  className,
  size = 'xl',
}: {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40',
  };

  return (
    <div className={cn('flex flex-col items-center justify-center gap-4', className)}>
      {/* Animated Logo */}
      <div className={cn('relative', sizeClasses[size])}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Glow Ring */}
          <circle
            cx="50"
            cy="50"
            r="49"
            className="fill-none stroke-primary/20"
            strokeWidth="2"
          >
            <animate
              attributeName="stroke-opacity"
              values="0.2;0.5;0.2"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Main Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            className="fill-primary"
          >
            <animate
              attributeName="r"
              values="44;46;44"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Stylized K Letter with African Bird Wing Motif */}
          <g className="fill-primary-foreground">
            {/* K Vertical Stem */}
            <rect x="30" y="25" width="8" height="50" rx="2" />
            
            {/* K Upper Diagonal - Bird Wing Style */}
            <path d="M38 50 L62 28 Q68 25 70 30 L48 52 Z">
              <animate
                attributeName="d"
                values="M38 50 L62 28 Q68 25 70 30 L48 52 Z;M38 50 L64 26 Q70 23 72 28 L48 52 Z;M38 50 L62 28 Q68 25 70 30 L48 52 Z"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            
            {/* K Lower Diagonal - Bird Wing Style */}
            <path d="M38 50 L62 72 Q68 75 70 70 L48 48 Z">
              <animate
                attributeName="d"
                values="M38 50 L62 72 Q68 75 70 70 L48 48 Z;M38 50 L64 74 Q70 77 72 72 L48 48 Z;M38 50 L62 72 Q68 75 70 70 L48 48 Z"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            
            {/* Wing Accent Lines */}
            <path 
              d="M55 32 Q62 28 68 32" 
              fill="none" 
              strokeWidth="2"
              className="stroke-primary-foreground"
            />
            <path 
              d="M55 68 Q62 72 68 68" 
              fill="none" 
              strokeWidth="2"
              className="stroke-primary-foreground"
            />
          </g>
        </svg>

        {/* Rotating outer ring */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full animate-spin"
          style={{ animationDuration: '3s' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            className="stroke-primary"
            strokeWidth="1"
            strokeDasharray="20 80"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Loading Text */}
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold text-foreground italic">
          Kenya Airways
        </span>
        <span className="text-sm text-muted-foreground italic">
          The Pride of Africa
        </span>
      </div>
    </div>
  );
};
