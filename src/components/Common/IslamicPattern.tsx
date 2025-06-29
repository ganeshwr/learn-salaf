import React from 'react';

interface IslamicPatternProps {
  className?: string;
  opacity?: number;
}

const IslamicPattern: React.FC<IslamicPatternProps> = ({ className = '', opacity = 0.05 }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
      <svg
        className="w-full h-full"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="islamic-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <path
              d="M20 10 L30 20 L20 30 L10 20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M10 10 L30 10 L30 30 L10 30 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.25"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
      </svg>
    </div>
  );
};

export default IslamicPattern;