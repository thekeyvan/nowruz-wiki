import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

// Color palette
const G = '#124A3F'; // forest green
const GLight = '#1a6b58';
const Gold = '#FEBB26';
const GoldDark = '#d4a020';
const Cream = '#FBFFF1';
const Red = '#C0392B';

/** Sabzeh — wheatgrass in a bowl */
export const SabzehIllustration = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    {/* Bowl */}
    <ellipse cx="40" cy="58" rx="24" ry="8" fill={Gold} />
    <path d="M16 52 Q16 66 40 66 Q64 66 64 52 Z" fill={GoldDark} />
    <ellipse cx="40" cy="52" rx="24" ry="8" fill={Gold} />
    {/* Grass blades */}
    {[28, 32, 36, 40, 44, 48, 52].map((x, i) => (
      <g key={i}>
        <path
          d={`M${x} 52 Q${x - 3 + (i % 2) * 6} ${40 - i * 2} ${x - 2 + i} ${28 - (i % 3) * 4}`}
          stroke={G}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    ))}
    {/* Ribbon */}
    <path d="M26 52 Q40 56 54 52" stroke={GLight} strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

/** Samanu — earthen pot with a spoon */
export const SamanuIllustration = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    {/* Pot body */}
    <path d="M24 38 Q22 60 40 62 Q58 62 56 38 Z" fill={G} />
    {/* Pot top opening */}
    <ellipse cx="40" cy="38" rx="16" ry="5" fill={GLight} />
    {/* Samanu surface */}
    <ellipse cx="40" cy="38" rx="13" ry="3.5" fill={Gold} opacity="0.85" />
    {/* Pot rim handles */}
    <rect x="21" y="36" width="5" height="8" rx="2.5" fill={GoldDark} />
    <rect x="54" y="36" width="5" height="8" rx="2.5" fill={GoldDark} />
    {/* Wooden spoon */}
    <line x1="50" y1="20" x2="38" y2="38" stroke={GoldDark} strokeWidth="2.5" strokeLinecap="round" />
    <ellipse cx="36" cy="40" rx="5" ry="3" fill={GoldDark} transform="rotate(-30 36 40)" />
  </svg>
);

/** Senjed — branch with berries */
export const SenjedIllustration = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    {/* Main branch */}
    <path d="M20 65 Q35 50 40 38 Q45 26 55 18" stroke={G} strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Side branches */}
    <path d="M32 55 Q28 48 22 48" stroke={G} strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M38 44 Q34 38 30 36" stroke={G} strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M44 33 Q48 28 52 28" stroke={G} strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Berries */}
    {[
      [22, 46], [29, 34], [52, 27], [36, 56], [47, 42]
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="5" fill={Gold} stroke={GoldDark} strokeWidth="1" />
    ))}
    {/* Leaves */}
    <ellipse cx="56" cy="20" rx="7" ry="4" fill={GLight} transform="rotate(-40 56 20)" />
    <ellipse cx="30" cy="37" rx="6" ry="3.5" fill={GLight} transform="rotate(30 30 37)" />
  </svg>
);

/** Seer — garlic bulb */
export const SeerIllustration = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    {/* Garlic bulb base */}
    <path d="M40 62 Q26 62 24 50 Q22 38 32 33 Q36 31 40 31 Q44 31 48 33 Q58 38 56 50 Q54 62 40 62 Z" fill={Cream} stroke={G} strokeWidth="1.5" />
    {/* Clove lines */}
    <path d="M40 31 Q40 62 40 62" stroke={G} strokeWidth="1" strokeDasharray="2 3" />
    <path d="M32 33 Q37 48 40 62" stroke={G} strokeWidth="1" strokeDasharray="2 3" />
    <path d="M48 33 Q43 48 40 62" stroke={G} strokeWidth="1" strokeDasharray="2 3" />
    {/* Root */}
    <path d="M36 62 Q38 68 40 70" stroke={G} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M40 62 Q40 68 40 70" stroke={G} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M44 62 Q42 68 40 70" stroke={G} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Stem & leaves */}
    <path d="M40 31 Q40 20 40 14" stroke={G} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M40 22 Q33 18 30 12" stroke={GLight} strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M40 18 Q47 14 50 10" stroke={GLight} strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

/** Sib — apple */
export const SibIllustration = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    {/* Apple body */}
    <path d="M40 28 C26 28 18 38 18 50 C18 62 27 70 40 70 C53 70 62 62 62 50 C62 38 54 28 40 28 Z" fill={Gold} stroke={GoldDark} strokeWidth="1.5" />
    {/* Highlight */}
    <ellipse cx="32" cy="40" rx="6" ry="8" fill="white" opacity="0.25" transform="rotate(-15 32 40)" />
    {/* Stem */}
    <path d="M40 28 Q40 18 42 14" stroke={G} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Leaf */}
    <path d="M42 18 Q52 12 56 18 Q50 26 42 22 Z" fill={G} />
    {/* Leaf vein */}
    <path d="M42 19 Q50 16 55 18" stroke={GLight} strokeWidth="1" strokeLinecap="round" fill="none" />
    {/* Indent */}
    <path d="M37 29 Q40 26 43 29" stroke={GoldDark} strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

/** Somaq — spice bowl */
export const SomaqIllustration = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    {/* Bowl */}
    <path d="M18 45 Q18 66 40 66 Q62 66 62 45 Z" fill={G} />
    <ellipse cx="40" cy="45" rx="22" ry="7" fill={GLight} />
    {/* Spice mound */}
    <path d="M26 44 Q33 35 40 34 Q47 35 54 44" fill={Red} stroke="none" />
    <ellipse cx="40" cy="44" rx="14" ry="4" fill={Red} opacity="0.9" />
    {/* Spice texture dots */}
    {[[36, 40], [40, 38], [44, 40], [38, 42], [43, 42]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="1.2" fill="#8B1010" />
    ))}
    {/* Base rim */}
    <ellipse cx="40" cy="66" rx="14" ry="3" fill={GoldDark} />
  </svg>
);

/** Serkeh — glass jar with cork */
export const SerkehIllustration = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    {/* Jar body */}
    <rect x="26" y="36" width="28" height="30" rx="4" fill={G} opacity="0.85" />
    {/* Liquid */}
    <rect x="28" y="46" width="24" height="18" rx="2" fill={GLight} opacity="0.7" />
    {/* Bubbles */}
    <circle cx="34" cy="55" r="2" fill="white" opacity="0.4" />
    <circle cx="42" cy="58" r="1.5" fill="white" opacity="0.3" />
    <circle cx="48" cy="53" r="2.5" fill="white" opacity="0.25" />
    {/* Jar neck */}
    <rect x="30" y="30" width="20" height="8" rx="2" fill={G} />
    <rect x="28" y="34" width="24" height="4" rx="1" fill={GLight} />
    {/* Cork */}
    <rect x="31" y="22" width="18" height="10" rx="3" fill={GoldDark} />
    <rect x="33" y="24" width="14" height="6" rx="2" fill={Gold} />
    {/* Label */}
    <rect x="30" y="48" width="20" height="10" rx="2" fill="white" opacity="0.15" />
  </svg>
);
