import React from 'react';

// Common SVG props
type IconProps = React.SVGProps<SVGSVGElement>;

export const AppleIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M10 2c1 .5 2 2 2 5" />
  </svg>
);

export const GarlicIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2C8 6 5 10 5 15a7 7 0 0 0 14 0c0-5-3-9-7-13z" />
    <path d="M12 2v6" />
    <path d="M9 7c1 3 3 5 3 8" />
    <path d="M15 7c-1 3-3 5-3 8" />
  </svg>
);

export const SproutIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 20h10" />
    <path d="M10 20c5.5-5.5.5-16.5.5-16.5s-7 5.5-5.5 11.5c.53 2.12 2.87 3.4 5 5Z" />
    <path d="M14 20c-5.5-5.5-.5-16.5-.5-16.5s7 5.5 5.5 11.5c-.53 2.12-2.87 3.4-5 5Z" />
  </svg>
);

export const CoinIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <path d="M12 18V6" />
  </svg>
);

export const VinegarIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 22h8" />
    <path d="M7 10h10" />
    <path d="M12 2v4" />
    <path d="M10 2h4" />
    <path d="M7 10a5 5 0 0 0-5 5v7h20v-7a5 5 0 0 0-5-5H7Z" />
    <path d="M10 6h4" />
  </svg>
);

export const SumacIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="8" strokeDasharray="2 2" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

export const PuddingIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 14a8 8 0 0 0 16 0H4Z" />
    <path d="M7 14v4a2 2 0 0 0 4 0v-4" />
    <path d="M13 14v4a2 2 0 0 0 4 0v-4" />
    <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M12 10c-2 0-3-1-4-2.5S7 5 7 5" />
    <path d="M12 10c2 0 3-1 4-2.5S17 5 17 5" />
  </svg>
);
